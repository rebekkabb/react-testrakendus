import {useState} from 'react'

const RecipeEditForm = ({onEdit, currentRecipe, switchComponent}) => {
    const [title, setTitle] = useState(currentRecipe.title)
    const [course, setCourse] = useState(currentRecipe.type)
    const [time, setTime] = useState(currentRecipe.time)
    const [ingredients, setIngredients] = useState(currentRecipe.ingredients)
    const [guide, setGuide] = useState(currentRecipe.steps)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title){
            alert('Pealkiri on lisamata!')
            return
        }

        onEdit({title, course, time, ingredients, guide}, )
        switchComponent('intro', '', 'Retsept muudetud!')

        setTitle('')
        setCourse('')
        setTime(0)
        setIngredients('')
        setGuide('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <h3> Muuda retsepti </h3>
            <div className='form-element'>
                <label>Retsepti pealkiri</label>
                <input type='text' placeholder='Lisa pealkiri'
                       value={title} onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='form-element'>
                <label>Käik</label>
                <input type='text' placeholder='Lisa käik'
                       value={course} onChange={(e) => setCourse(e.target.value)}
                />
            </div>
            <div className='form-element'>
                <label>Valmistusaeg</label>
                <input type='number' placeholder='Lisa valmistusaeg'
                       value={time} onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <div className='form-element'>
                <label htmlFor="ingredients"> Koostisosad</label>
                <textarea id='ingredients' placeholder='Lisa koostisosad'
                          value={ingredients} onChange={(e) => setIngredients(e.target.value)}
                />
            </div>
            <div className='form-element'>
                <label htmlFor="juhised"> Juhised</label>
                <textarea id='juhised' placeholder='Lisa juhised'
                          value={guide} onChange={(e) => setGuide(e.target.value)}
                />
            </div>
            <input className='add-button button-block' type='submit' value='Muuda retsepti'/>
        </form>
    )
}

export default RecipeEditForm