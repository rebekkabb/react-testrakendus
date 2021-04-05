import {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from "react-router-dom";
import axios from "axios";

const RecipeEditForm = ({onEdit}) => {
    let {id} = useParams();
    let history = useHistory();

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

    const onSubmit = (e) => {
        e.preventDefault()

        if (!recipe.title) {
            alert('Pealkiri on lisamata!')
            return
        }

        onEdit(recipe, id)

        setRecipe('', '', 0, '', '')

        history.push('/')
    };

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <Link to='/' className='return-link'> Tagasi </Link>
            <h1> Muuda retsepti </h1>
            <div className='form-element'>
                <label>Retsepti pealkiri</label>
                <input type='text' placeholder='Lisa pealkiri'
                       value={recipe.title} onChange={(e) => {
                    const r = {...recipe};
                    r.title = e.target.value;
                    setRecipe(r)
                }}
                />
            </div>
            <div className='form-element'>
                <label>Käik</label>
                <input type='text' placeholder='Lisa käik'
                       value={recipe.type} onChange={(e) => {
                    const r = {...recipe};
                    r.type = e.target.value;
                    setRecipe(r)
                }}
                />
            </div>
            <div className='form-element'>
                <label>Valmistusaeg</label>
                <input type='number' placeholder='Lisa valmistusaeg'
                       value={recipe.time} onChange={(e) => {
                    const r = {...recipe};
                    r.time = e.target.value;
                    setRecipe(r)
                }}
                />
            </div>
            <div className='form-element'>
                <label htmlFor="ingredients"> Koostisosad</label>
                <textarea id='ingredients' placeholder='Lisa koostisosad'
                          value={recipe.ingredients} onChange={(e) => {
                    const r = {...recipe};
                    r.ingredients = e.target.value;
                    setRecipe(r)
                }}
                />
            </div>
            <div className='form-element'>
                <label htmlFor="juhised"> Juhised</label>
                <textarea id='juhised' placeholder='Lisa juhised'
                          value={recipe.steps} onChange={(e) => {
                    const r = {...recipe};
                    r.steps = e.target.value;
                    setRecipe(r)
                }}
                />
            </div>
            <input className='submit-button button-block' type='submit' value='Salvesta retsepti'/>
        </form>
    )
}

export default RecipeEditForm