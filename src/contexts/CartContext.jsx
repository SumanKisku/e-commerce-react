/* eslint-disable no-case-declarations */
import { createContext } from "react";
import { useReducer } from "react";
import { store } from "../../store";
import { toast } from "react-hot-toast";

export const CartContext = createContext([]);

let allProducts = [...store];

// save store in the localStorage
const saveCartInLS = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

const reducer = (state, action) => {
    switch (action.type) {
        case "addToCart":
            // eslint-disable-next-line no-case-declarations
            let itemToAdd = allProducts.find((prod) => prod.id === action.id);
            if (!itemToAdd) {
                // If the product is not found, return the current state without any changes.
                saveCartInLS(state);
                return state;
            }

            // eslint-disable-next-line no-case-declarations
            let itemAlreadyInCart = state.find((prod) => prod.id === action.id)

            if (itemAlreadyInCart) {
                itemAlreadyInCart["qtn"] = itemToAdd["qtn"] + 1;
                saveCartInLS([...state]);
                return [...state];
            } else {
                itemToAdd["qtn"] = 1;
            }
            // Return a new state with the itemToAdd added to the cart array.
            saveCartInLS([...state, itemToAdd]);
            return [...state, itemToAdd];
        case "deleteFromCart":
            state.forEach((prod) => {
                if (prod.id == action.id) {
                    prod.qtn = 0;
                }
            })
            // eslint-disable-next-line no-case-declarations
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
        case "increaseQtn":
            let itemNeedToIncreaseQtn = state.find((prod) => prod.id === action.id);
            itemNeedToIncreaseQtn["qtn"] += 1;
            saveCartInLS([...state]);
            return [...state];
        case "decreaseQtn":
            let itemNeedToDecreaseQtn = state.find((prod) => prod.id === action.id);
            if (itemNeedToDecreaseQtn["qtn"] > 0) {
                itemNeedToDecreaseQtn["qtn"] = itemNeedToDecreaseQtn["qtn"] - 1;
            }

            if (itemNeedToDecreaseQtn["qtn"] === 0) {
                // eslint-disable-next-line no-case-declarations
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
            }
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
    initialCartState = JSON.parse(localStorage.getItem("cart"));
}

export const CartContextProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(reducer, initialCartState);

    return <CartContext.Provider value={{ cart, dispatch }}>
        {children}
    </CartContext.Provider>
}