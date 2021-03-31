import Recipe from "./Recipe";

const RecipeList = ({recipes}) => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <div className='recipe-list'>
            <div className="header">
                <h1>Retseptid</h1>
                <button onClick={onClick} className='add-button'>Lisa retsept</button>
            </div>
            <div>
                {recipes.map((recipe) => (
                    <Recipe currentRecipe={recipe}/>
                ))}

            </div>
        </div>
    )
}

export default RecipeList