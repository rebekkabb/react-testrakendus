import {useState} from 'react'

const RecipeAddForm = ({onAdd, switchComponent}) => {
    const [title, setTitle] = useState('')
    const [course, setCourse] = useState('')
    const [time, setTime] = useState(0)
    const [ingredients, setIngredients] = useState('')
    const [guide, setGuide] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title){
            alert('Pealkiri on lisamata!')
            return
        }

        onAdd({title, course, time, ingredients, guide})
        switchComponent('intro', '', 'Retsept lisatud!')

        setTitle('')
        setCourse('')
        setTime(0)
        setIngredients('')
        setGuide('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <h3> Lisa retsept </h3>
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
            <input className='add-button button-block' type='submit' value='Salvesta retsept'/>
        </form>
    )
}

export default RecipeAddForm