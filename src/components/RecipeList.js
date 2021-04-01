import Recipe from "./Recipe";

const RecipeList = ({recipes, onDelete, switchComponent}) => {
    return (
        <div className='recipe-list'>
            <div className="header">
                <h1>Retseptid</h1>
                <button onClick={() => switchComponent('add', '')} className='add-button button-block'>Lisa retsept</button>
            </div>
            <div>
                {recipes.map((recipe) => (
                    <Recipe
                       key={recipe.id} currentRecipe={recipe} onDelete={onDelete} switchComponent={switchComponent}/>
                ))}
            </div>
        </div>
    )
}

export default RecipeList