import { useState } from "react";

const eleven = {
  leather: 1,
  iron: 2,
  steel: 4,
};

const twilve = {
  ...eleven,
  aluminum: 2,
  glass: 4,
};

console.log(eleven);
console.log(twilve);

const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Current Recipe</h3>
      <button onClick={() => setRecipe(eleven)}>Eleven</button>
      <button onClick={() => setRecipe(twilve)}>Eleven</button>
      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
