import { createContext } from "react";
import { useReducer } from "react";
import { store } from "../../store";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";

export const CartContext = createContext([]);

let allProducts = [...store];

// save store in the localStorage
const saveCartInLS = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
}

const reducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      {let itemToAdd = allProducts.find((prod) => prod.id === action.id);
      if (!itemToAdd) {
        // If the product is not found, return the current state without any changes.
        saveCartInLS(state);
        return state;
      }

      let itemAlreadyInCart = state.find((prod) => prod.id === action.id)
      
      if (itemAlreadyInCart) {
        itemAlreadyInCart["qnt"] = itemToAdd["qnt"] + 1;
        saveCartInLS([...state]);
        return [...state];
      } else {
        // Initialize qnt with 1
        itemToAdd["qnt"] = 1;
      }
      // Save and Return a new state with the itemToAdd added to the cart array.
      saveCartInLS([...state, itemToAdd]);
      return [...state, itemToAdd];}
    case "deleteFromCart":
      {state.forEach((prod) => {
        if (prod.id == action.id) {
          prod.qnt = 0;
        }
      })
      let afterDelete = state.filter((prod) => {
        return prod.id != action.id;
      })
      toast.error("Item removed from cart", {
        style: {
          border: '1px solid #1976d2',
          padding: '16px',
          color: '#1976d2',
        },
        iconTheme: {
          primary: 'red',
          secondary: '#FFFAEE',
        },
      });
      saveCartInLS([...afterDelete]);
      return [...afterDelete];}
    case "increaseqnt":
      {let itemNeedToIncreaseqnt = state.find((prod) => prod.id === action.id);
      itemNeedToIncreaseqnt["qnt"] += 1;
      saveCartInLS([...state]);
      return [...state];}
    case "decreaseqnt":
      {let itemNeedToDecreaseqnt = state.find((prod) => prod.id === action.id);
      if (itemNeedToDecreaseqnt["qnt"] > 0) {
        itemNeedToDecreaseqnt["qnt"] = itemNeedToDecreaseqnt["qnt"] - 1;
      }

      if (itemNeedToDecreaseqnt["qnt"] === 0) {
        let afterDelete = state.filter((prod) => {
          return prod.id != action.id;
        })
        toast.error("Item removed from cart", {
          style: {
            border: '1px solid #1976d2',
            padding: '16px',
            color: '#1976d2',
          },
          iconTheme: {
            primary: 'red',
            secondary: '#FFFAEE',
          },
        });
        saveCartInLS([...afterDelete]);
        return [...afterDelete];
      }}
      saveCartInLS([...state]);
      return [...state];
    case "clearCart":
      return [];
    default:
      saveCartInLS([...state]);
      return state;
  }
}

let initialCartState = [];
if (localStorage.getItem("cart")) {
  initialCartState = [...JSON.parse(localStorage.getItem("cart"))];
}

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialCartState);

  return <CartContext.Provider value={{ cart, dispatch }}>
    {children}
  </CartContext.Provider>
}

CartContextProvider.propTypes = {
  children: PropTypes.node,
}
