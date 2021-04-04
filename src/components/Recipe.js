import {Link} from "react-router-dom";

const Recipe = ({currentRecipe, onDelete, switchComponent}) => {
    return (
        <div className="item">
            <div className='recipe-title'>
                <Link to={'/display/' + currentRecipe.id}>
                    <h3 key={currentRecipe.id}>{currentRecipe.title}</h3>
                </Link>
            </div>
            <div className='buttons'>
                <Link to={'/edit/' + currentRecipe.id}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="20" height="20" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="button">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                </Link>
                <svg onClick={() => onDelete(currentRecipe.id)} className='button' xmlns="http://www.w3.org/2000/svg"
                     width="20" height="20" viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    <line x1="10" y1="11" x2="10" y2="17"/>
                    <line x1="14" y1="11" x2="14" y2="17"/>
                </svg>

            </div>
        </div>
    )
}

export default Recipe