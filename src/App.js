import Axios from "axios";
import { useState } from "react";
import "./App.css";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("");
  const YOUR_APP_ID = "1e8ea187";
  const YOUR_APP_KEY = "e329dcbf3a9bdc2b759ce6a3fe1fed8d";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1>Food Recipe App</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="app__input"
          placeholder="enter ingredient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="app__submit" type="submit">
          Search
        </button>
        <select className="app__healthLabels">
          <option value="vegan" onClick={() => setHealthLabel("vegan")}>
            vegan
          </option>
          <option
            value="vegetarian"
            onClick={() => setHealthLabel("vegetarian")}
          >
            vegetarian
          </option>
          <option
            value="dairy-free"
            onClick={() => setHealthLabel("dairy-free")}
          >
            dairy-free
          </option>
          <option
            value="gluten-free"
            onClick={() => setHealthLabel("gluten-free")}
          >
            gluten-free
          </option>
          <option
            value="wheat-free"
            onClick={() => setHealthLabel("wheat-free")}
          >
            wheat-free
          </option>
          <option value="egg-free" onClick={() => setHealthLabel("egg-free")}>
            egg-free
          </option>
          <option
            value="peanut-free"
            onClick={() => setHealthLabel("peanut-free")}
          >
            peanut-free
          </option>
          <option value="soy-free" onClick={() => setHealthLabel("soy-free")}>
            soy-free
          </option>
          <option
            value="tree-nut-free"
            onClick={() => setHealthLabel("tree-nut-free")}
          >
            tree-nut-free
          </option>
          <option value="fish-free" onClick={() => setHealthLabel("fish-free")}>
            fish-free
          </option>
          <option
            value="shell-fish-free"
            onClick={() => setHealthLabel("shell-fish-free")}
          >
            shell-fish-free
          </option>
        </select>
      </form>
      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
