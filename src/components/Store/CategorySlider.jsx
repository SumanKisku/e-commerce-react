import { store } from '../../../store.js';

const Button = ({ children, onSelect }) => {
  // console.log(onSelect);
  return <button onClick={()=> onSelect(children)} className="capitalize p-2 rounded border-2 border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition-all mr-2 duration-200 ease-in-out">
 {children}  
  </button>;
}

const ButtonSelected = ({children}) => {
  return <button className="capitalize p-2 rounded border-2 border-blue-500 bg-blue-500 text-white transition-all mr-2 duration-200 ease-in-out">
    {children}  
  </button>;

}

const CategorySlider = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex overflow-x-auto overflow-y-hidden mb-8">
      <div className="flex h-10">
        {
          categories.map((category) => {
            return category === selected ?
              <ButtonSelected key={category}> 
                {category} 
              </ButtonSelected>
              :
              <Button onSelect={onSelect} key={category}> 
                {category} 
              </Button>

          })
        }
      </div>
    </div>
  );
};

export default CategorySlider
