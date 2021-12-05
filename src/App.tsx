import React from 'react';
import './App.css';

//HEADER//
import Logo from './img/logo.svg';
import PhotoId from './img/ImgProfil.jpg'
import Logo2 from './img/logo2.svg';

import background from './img/BackgroundPink.jpg';
import backgroundB from './img/BackgroundBlue.jpg';
import cdtop from './img/cd.png';
import arrow1 from './img/arrow1.svg';
import arrow3 from './img/arrow3.svg';

import album1 from './img/Ipseite.jpg';
import flower1 from './img/flower1.svg'

import Album10 from './img/Album1.0.png';
import Album20 from './img/Album2.png';
import Album30 from './img/Album3.png';
import cemois from './img/loop1.0.svg';
import months6 from './img/loop1.1.svg';
import alltime from './img/loop1.1.1.svg';

import BackgroundYellow from './img/BackgroundYellow.jpg';
import PhotoArtiste from './img/PhotoArtiste.jpg';
import flower2 from './img/flower2.svg'
import flower3 from './img/flower3.svg'

import { Row, Col, Divider} from 'antd';
import 'antd/dist/antd.css';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import arrow6 from './img/arrow6.svg';
import star2 from './img/star2.svg';
import star3 from './img/star3.svg';
import loop2 from './img/loop2.svg';

import backgroundfooter from './img/BackgroundFooter.jpg';
import logofooter from './img/logo.svg';
import CopyExample from './Button.js';

/////////////////////////////////////ROOT/////////////////////////////////////////////////////////
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Navigation from './components/Navigation' ;
import Accueil from './components/Accueil';
import Menu from './components/Menu';



function App() {
  return (
    
 
    <div className="App">
      {/*       HEADER        */}
      <header className="App-header">
      <a id="ancre"></a>
        <Link to="/" className="LogoSpoty" >
          <img src={Logo2} alt="Logo Spoty" />
        </Link>
          <Link to="Navigation"> <p className='SpotyDraft'>SPOTY DRAFT</p> </Link>
          <p className="NameId">Victor Guislain</p>
          <img className="PhotoId" src={PhotoId} alt="Photo de profil utilisateur" />
        </header>

     


     {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
     <Routes>
            <Route path="/" element={<Accueil/>}/>
            <Route path="/navigation" element={<Navigation/>}/>
        </Routes>
      
      <body>
        <div className="Container">

        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
        

        {/*        Le Top du Top         */}
         



              {/*        THANKS     */}

        {/*                  FOOTER                  */}
                <div className="footer">
                  <div className="BackgroundFooter">

                  <a href="#ancre"><img  className="LogoFooter" src={logofooter} alt="logo"/></a>
                    <div className="FooterTexte">
                      <p>Full stack</p>
                      <a className="LinkFooter" href="https://www.spotify.com/fr/">Spotify.com</a>
                      <p>Instagram <br /> Twitter</p>
                      <a className="LinkFooter" href="https://www.hetic.net">© 2021 HETIC</a>
                    </div>
                  </div>
                </div>

          </div>
      </body>
    </div>
  );
}

export default App;
