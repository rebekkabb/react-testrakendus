import Recipe from "./Recipe";
import {Link} from "react-router-dom";

const RecipeList = ({recipes, onDelete, switchComponent}) => {
    return (
        <div className='recipe-list-container'>
            <div className="header">
                <h1>Retseptid</h1>
                <Link to='/add'>
                    <span className='submit-button button-block'>Lisa retsept</span>
                </Link>
                <hr/>
            </div>

            <div className='recipes'>
                {recipes.map((recipe) => (
                    <Recipe
                        key={recipe.id} currentRecipe={recipe} onDelete={onDelete} switchComponent={switchComponent}/>
                ))}
            </div>
        </div>
    )
}

export default RecipeList