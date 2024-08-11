import React from 'react'
import college from './../../Assets/images/college.png';
import echange from './../../Assets/images/echange.png';
import ecole from './../../Assets/images/ecole.png';
import univers from './../../Assets/images/universite.png';

export default function Nav({handleTous, handleUnivers, handleECollege}) {

// liste de MENU accorder dans le page
const pages = ['Etablissement', 'école', 'Univers', 'Se connecter'];

    return (
        <nav>
            <div className='Petit-menu'>
                <a><h2>Map-etabli..</h2></a>
                <ul className='nav-menu'>
                    <li><a onClick={handleTous}><img src={echange} className='icons'  />Tous</a></li>
                    {/* <li><a onClick={handleInstitut}><img src={college} className='icons'  />Instituts</a></li> */}
                    <li><a onClick={handleUnivers}><img src={univers} className='icons'  />Univers</a></li>
                    <li><a onClick={handleECollege}><img src={ecole} className='icons'  />Ecole | Collège</a></li>
                </ul>
            </div>
        </nav>
    )
}
