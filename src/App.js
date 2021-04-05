import RecipeList from "./components/RecipeList";
import RecipeAddForm from "./components/RecipeAddForm";
import RecipeEditForm from "./components/RecipeEditForm";
import RecipeDisplay from "./components/RecipeDisplay";
import {useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import axios from 'axios';

function App() {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        loadRecipes();
    }, []);

    const loadRecipes = () => {
        axios.get('/api/recipes/').then(res => {
            setRecipes(res.data.recipes)
        })
    }

    const deleteRecipe = (id) => {
        axios.delete('/api/recipes/' + id).then(res => {
            loadRecipes()
            alert('Retsept on kustutatud!')
        })
    }

    const addRecipe = (recipe) => {
        axios.post('/api/recipes/', {
            title: recipe.title,
            type: recipe.type,
            time: recipe.time,
            ingredients: recipe.ingredients,
            steps: recipe.steps,
        }).then(res => {
            loadRecipes()
            console.log(res)
        })
    }

    const editRecipe = (recipe, id) => {
        axios.patch('/api/recipes/' + id, {
            title: recipe.title,
            type: recipe.type,
            time: recipe.time,
            ingredients: recipe.ingredients,
            steps: recipe.steps,
        }).then(res => {
            loadRecipes()
            console.log(res)
        })
    }
    return (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route exact path='/' render={() => (
                        <>
                            <RecipeList recipes={recipes} onDelete={deleteRecipe}/>
                        </>
                    )}/>
                    <Route path='/display/:id' render={() => (
                        <RecipeDisplay/>
                    )}/>
                    <Route path='/add' render={() => (
                        <RecipeAddForm onAdd={addRecipe}/>
                    )}/>
                    <Route path='/edit/:id' render={() => (
                        <RecipeEditForm onEdit={editRecipe}/>
                    )}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
