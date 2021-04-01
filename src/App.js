import RecipeList from "./components/RecipeList";
import RecipeAddForm from "./components/RecipeAddForm";
import {useState, useEffect} from 'react'
import axios from 'axios';
import IntroDisplay from "./components/IntroDisplay";
import RecipeEditForm from "./components/RecipeEditForm";
import RecipeDisplay from "./components/RecipeDisplay";

//TODO: add routing
function App() {

    const [recipes, setRecipes] = useState([])
    const [currentDisplay, setCurrentDisplay] = useState('intro')
    const [currentRecipe, setCurrentRecipe] = useState('')
    const [prompt, setPrompt] = useState('Vali nimekirjast retsept mida vaadata :)')

    useEffect(() => {
        loadRecipes();
        setCurrentDisplay('intro')
    }, []);

    const loadRecipes = () => {
        axios.get('/api/recipes/').then(res => {
            setRecipes(res.data.recipes)
        })
    }
    const deleteRecipe = (id) => {
        axios.delete('/api/recipes/' + id).then(res => {
            loadRecipes()
            console.log('delete', id)
        })
    }

    const switchComponent = (component, recipe, prompt) => {
        setCurrentDisplay(component)
        setCurrentRecipe(recipe)
        setPrompt(prompt)
    }

    const addRecipe = (recipe) => {
        axios.post('/api/recipes/', {
            title: recipe.title,
            type: recipe.course,
            time: recipe.time,
            ingredients: recipe.ingredients,
            steps: recipe.guide,
        }).then(res => {
            loadRecipes()
            console.log(res)
        })
    }

    const editRecipe = (recipe, id) => {
        axios.patch('/api/recipes/' + id, {
            title: recipe.title,
            type: recipe.course,
            time: recipe.time,
            ingredients: recipe.ingredients,
            steps: recipe.guide,
        }).then(res => {
            loadRecipes()
            console.log(res)
        })
    }
    return (
        <div className="container">
            {recipes.length > 0 ? (
                <RecipeList recipes={recipes} onDelete={deleteRecipe} switchComponent={switchComponent}/>
            ) : ('No recipes to show')}

            {currentDisplay === 'intro' ? (
                <IntroDisplay prompt={prompt}/>
            ) : currentDisplay === 'add' ? (
                <RecipeAddForm onAdd={addRecipe} switchComponent={switchComponent}/>
            ) : currentDisplay === 'edit' ? (
                <RecipeEditForm currentRecipe={currentRecipe} onEdit={editRecipe} switchComponent={switchComponent}/>
            ) : currentDisplay === 'display' ? (
                <RecipeDisplay currentRecipe={currentRecipe}/>
            ) : null}
        </div>
    );
}

export default App;
