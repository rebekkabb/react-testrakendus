import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const RecipeDisplay = () => {
    let {id} = useParams();

    const [recipe, setRecipe] = useState({
        title: "",
        type: "",
        time: 0,
        ingredients: "",
        steps: ""
    })

    useEffect(() => {
        axios.get('/api/recipes/' + id).then(res => {
            setRecipe(res.data.recipe)
        })
    }, [id]);

    return (
        <div className="display-container">
            <div className='upper-container'>
                <h2> {recipe.title} </h2>
                <Link to='/' className='return-link'> Tagasi </Link>
            </div>
            <div className='with-svg-container small-margin'>
                <div className='with-svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="image">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <p> {recipe.time} </p>
                </div>
                <div className='with-svg'>
                    <svg className="image" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                        <line x1="7" y1="7" x2="7.01" y2="7"/>
                    </svg>
                    <p> {recipe.type} </p>
                </div>
            </div>
            <h3> Koostisosad: </h3>
            <p className='display-whitespace'> {recipe.ingredients} </p>
            <hr/>
            <h3> Juhised: </h3>
            <p className='display-whitespace'> {recipe.steps} </p>
        </div>
    )
}

export default RecipeDisplay