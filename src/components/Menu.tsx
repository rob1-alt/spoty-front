import React from 'react';
import {Link} from 'react-router-dom';

function Menu() {

    return (
        <ul style ={{display: 'flex'}}>
            <Link to = '/'>
                <li style = {{marginLeft : 10, listStyle : 'none'}}>Navigation</li>
            </Link>

            <Link to = '/Navigation'>
                <li  style = {{marginLeft : 10, listStyle : 'none'}}>Accueil</li>
            </Link>
        </ul>
    )
}

export default Menu;