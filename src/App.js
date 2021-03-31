import RecipeList from "./components/RecipeList";
import {useState} from 'react'

function App() {
    const [recipes, setRecipes] = useState([
        {id: 1, title: 'yes'},
        {id: 2, title: 'no'},
        {id: 3, title: 'maybe'}
    ])
    return (
        <div className="container">
            <RecipeList recipes={recipes}/>
        </div>
    );
}

export default App;
