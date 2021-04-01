const RecipeDisplay = (currentRecipe) => {
    return (
        <div className="intro-container">
            <p> {currentRecipe.title} </p>
            <p> {currentRecipe.time} </p>
            <p> {currentRecipe.type} </p>
            <p> {currentRecipe.ingredients} </p>
            <p> {currentRecipe.steps} </p>

        </div>
    )
}

export default RecipeDisplay