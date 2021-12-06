import React from 'react';
import '../App.css';
import background from './img/BackgroundPink.jpg';

import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Navigation from '../components/Navigation' ;
import Menu from './Menu';
import { render } from '@testing-library/react';


function Connexion(){
    return(
    <div className="App">
            <body>
                <div className="Container">
                <div className='Top1'>
                        <h1>test</h1>
                    </div>
                </div>
            </body>
    </div>
)

    
}

export default Connexion;