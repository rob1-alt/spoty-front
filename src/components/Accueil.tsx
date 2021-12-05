import React from 'react';
import '../App.css';

//HEADER//
import Logo from '../img/logo.svg';
import PhotoId from '../img/ImgProfil.jpg'

import background from '../img/BackgroundPink.jpg';
import backgroundB from '../img/BackgroundBlue.jpg';
import cdtop from '../img/cd.png';
import arrow1 from '../img/arrow1.svg';
import arrow3 from '../img/arrow3.svg';

import album1 from '../img/Ipseite.jpg';
import flower1 from '../img/flower1.svg'

import Album10 from '../img/Album1.0.png';
import Album20 from '../img/Album2.png';
import Album30 from '../img/Album3.png';
import cemois from '../img/loop1.0.svg';
import months6 from '../img/loop1.1.svg';
import alltime from '../img/loop1.1.1.svg';

import BackgroundYellow from '../img/BackgroundYellow.jpg';
import PhotoArtiste from '../img/PhotoArtiste.jpg';
import flower2 from '../img/flower2.svg'
import flower3 from '../img/flower3.svg'

import { Row, Col, Divider} from 'antd';
import 'antd/dist/antd.css';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import arrow6 from '../img/arrow6.svg';
import star2 from '../img/star2.svg';
import star3 from '../img/star3.svg';
import loop2 from '../img/loop2.svg';

import backgroundfooter from '../img/BackgroundFooter.jpg';
import logofooter from '../img/logo.svg';
import CopyExample from '../Button.js';

/////////////////////////////////////ROOT/////////////////////////////////////////////////////////
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Navigation from '../components/Navigation' ;
import Menu from './Menu';


function accueil(){

    return(
        <div className="App">
     


        {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}

   
         <body>
           <div className="Container">
   
   
           {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
           
   
           {/*        Le Top du Top         */}
             <div className="Top">
               <div className="Arrow1">
               <img src={arrow1}></img> 
               </div>
               <h1 className="T1">
                 <Row><Col span={24}>Le Top</Col></Row>
               </h1>
               <h1 className="T2">
                 <Row>
                 <Col span={12}></Col>
                 <Col span={12}>du Top !</Col>
                 </Row>
               </h1>    
               <div className="cd">
                 <img src={cdtop}></img>
               </div>    
               <div className="Welcome">
                 <p>Bienvenue sur Spoty, le tracker Spotify par excellence ! Consultez l’intégralités de vos données Spotify grâce à notre API en quelques clicks.
                 <br/>Bonne découverte !<br/></p>
                 <div className="Arrow3">
               <img src={arrow3}></img> 
               </div>
                 <button  type="button"> <a className="LinkButton" href="#ancre2">Je découvre !</a> </button>
               </div>  
               </div>
   
               <img className="flower1" src={flower1}></img> 
   
   
                         {/*        TOP ALBUM         */}
                <a id="ancre2"></a>
               <div className="TopAlbum">
                   <h1 className="T3">
                     <Row>
                       <Col span={12}>Top...</Col>
                       <Col className="test" span={12}>78</Col>
                     </Row>
                   </h1>  
                   <div className="DataAlbum">
                     <h2 className="info">
                       <Row>
                         <Col flex="auto"></Col>
                          <Col flex="50%">...c'est la popularité de cet artiste !</Col>
                       </Row>
                     </h2>  
                     <div className="T4">
                     <Row>
                     <Col flex="auto"></Col> 
                       {/*BACKEND*/}<Col flex="50%">2016</Col>{/*BACKEND*/}
                       </Row>
                     </div>
                     <h2 className="info">
                       <Row>
                         <Col flex="auto"></Col>
                         <Col flex="50%">...c'est la date de sortie de cet album !</Col>
                       </Row>
                     </h2>  
                     <div className="T4">
                     <Row>
                     <Col flex="auto"></Col> 
                     {/*BACKEND*/}<Col flex="50%">45</Col>{/*BACKEND*/}
                       </Row>
                     </div>
                     <h2 className="info">
                       <Row>
                         <Col flex="auto"></Col>
                         <Col flex="50%">...c'est la durée de cet album !</Col>
                       </Row> 
                     </h2>  
                   </div>
                        <div className="album1">
                         {/*BACKEND*/}<img src={album1}></img>{/*BACKEND*/}
                       </div>
                       <Row>
                       <div className="InfoAlbum">
                         <Col flex ="50%">
                           {/*BACKEND*/}
                         <span className="BackTitle"> Damso - Batterie Faible </span> <br />
                         Label: <span className="BackLabel"> Capitol Musique France </span><br />
                         Genre: <span className="BackGenre"> Rap </span>
                           {/*BACKEND*/}
                         </Col>
                         </div>
                         <Col className="AlbumAlbum"flex="auto">
                           Album
                         </Col>
                       </Row>
                 </div>
                 
                   {/*        TOP 3 TITRE        */}
   
               <div className="Top3">
                 <h1 className="Titre1">Top 3</h1>
                 <div className="ImageAlbum3">
                   <div className="Album1"> 
                   {/*BACKEND*/}
                     <img className="ImageGlobal" src={Album10} alt="Image de l'album 1"/>
                     <img className='ButtonPeriode' src={cemois} alt="button"/> 
                   </div>
                   <div className="Album2"> 
                     <img className="ImageGlobal" src={Album20} alt="Image de l'album 2"/>
                     <img className='ButtonPeriode' src={months6} alt="button"/> 
                   </div>
                   <div className="Album3"> 
                     <img className="ImageGlobal" src={Album30} alt="Image de l'album 3"/>
                     <img className='ButtonPeriode' src={alltime} alt="button"/> 
                     {/*BACKEND*/}
                   </div>
                 </div>
                 <h1 className="Titre2">Titres !</h1>
              </div>
   
                 {/*        TOP 3 ALBUM        */}
   
                 <img className="flower2" src={flower2}></img> 
   
                     {/*        TOP ARTISTE         */}
   
                   <div className="TopArtiste">
                   <h1 className="T5">
                     <Row>
                       <Col span={12}>Top...</Col>
                       <Col className="pourcentage" span={12}>54</Col>
                     </Row>
                   </h1>  
                   <div className="DataArtiste">
                     <h2 className="InfoData">
                       <Row>
                         <Col flex="auto"></Col>
                          <Col flex="50%">...c'est la popularité de cet artiste !</Col>
                       </Row>
                     </h2>  
                     <div className="T6">
                     <Row>
                     <Col flex="auto"></Col> 
                       {/*BACKEND*/}<Col flex="50%">Rap</Col>{/*BACKEND*/}
                       </Row>
                     </div>
                     <h2 className="InfoData">
                       <Row>
                         <Col flex="auto"></Col>
                         <Col flex="50%">...c'est le genre musical de cet artiste !</Col>
                       </Row>
                     </h2>  
                     <div className="T6">
                     <Row>
                     <Col flex="auto"></Col> 
                     {/*BACKEND*/}<Col flex="50%">670 944</Col>{/*BACKEND*/}
                       </Row>
                     </div>
                     <h2 className="InfoData">
                       <Row>
                         <Col flex="auto"></Col>
                         <Col flex="50%">...c'est le nombre d'abonné de cet artiste !</Col>
                       </Row> 
                     </h2>  
                   </div>
                        <div className="artiste2">
                        {/*BACKEND*/} <img src={PhotoArtiste}></img> {/*BACKEND*/}
                       </div>
                       <Row>
                       <div className="InfoArtiste">
                         <Col flex ="30%">
                           {/*BACKEND*/}
                         {/*Artiste:*/} <span className="BackArtisteName"> Green Montana</span>
                           {/*BACKEND*/}
                         </Col>
                         </div>
                         <Col className="ArtisteTitle"flex="auto">
                           Artiste !
                         </Col>
                       </Row>
                 </div>
                 
                   {/*        TOP ARTISTE       */}
   
                 <img className="flower3" src={flower3}></img> 
   
                 {/*        TOP TITRE       */}
   
                 <div className="TopTitre">
                   <h1 className="T7">
                     <Row>
                       {/*BACKEND*/}<Col className="TitleTrack" flex="60%">"SICKO MODE"</Col>{/*BACKEND*/}
                       <Col className="pourcentage2" flex="auto">Top...</Col>
                     </Row>
                   </h1>  
                   <div className="DataTitre">
                     <h2 className="info3">
                       <Row>
                         {/*BACKEND*/}<Col flex="70%">Par Travis Scott</Col>{/*BACKEND*/}
                          <Col flex="auto"></Col>
                       </Row>
                     </h2>  
                     <div className="T8">
                     <Row>
                      {/*BACKEND*/}<Col flex="70%">2018</Col>{/*BACKEND*/}
                      <Col flex="auto"></Col>
                       </Row>
                     </div>
                     <h2 className="info3">
                       <Row>
                         <Col flex="70%">...c'est la date de sortie !</Col>
                         <Col flex="auto"></Col>
                       </Row>
                     </h2>  
                     <div className="T8">
                     <Row>
                     <Col flex="70%"></Col> 
                     {/*BACKEND*/}<Col flex="70%">5.12</Col>{/*BACKEND*/}
                       </Row>
                     </div>
                     <h2 className="info3">
                       <Row>
                         <Col flex="70%">...c'est la durée de ce titre !</Col>
                         <Col flex="auto"></Col>
                       </Row> 
                     </h2>  
                   </div> 
                       <div className="ImageAlbum2">
                         {/*BACKEND*/}<img src={album1}></img> {/*BACKEND*/}
                       </div>
                       <Row>
                       <Col className="AlbumTitle"flex="auto">
                           Titre !
                         </Col>
                       <div className="InfoTitre">
                         <Col flex ="20%">
                           {/*BACKEND*/}
                         <span className="BackTitle"> "Sicko Mode - Astroworld</span> <br />
                         Label: <span className="BackLabel"> Cactus Jack Records </span><br />
                         Genre: <span className="BackGenre"> Rap </span>
                           {/*BACKEND*/}
                         </Col>
                         </div>
                       </Row>
                       
                 </div>
                 
                 {/*        TOP TITRE       */}
                 {/*        THANKS     */}
   
   
                         <div className="Thanks">
                           <div className="loop2">
                             <img src={loop2} alt="" />
                           </div>
                           <div className="star3">
                             <img src={star3} alt="" />
                           </div>
                           <h1 className="Titre1">Thanks !</h1>
                           <div className="TextThanks">
                             <Row>
                               <Row>
                                 <Col flex="50%">Merci d’avoir utilisé nos services !
                               L’équipe Spoty est fière de vous compter parmi ses membres. Mais la fête n’est pas finie... <br/></Col>
                                 <Link to="/Navigation" className="ButtonDraft">
                                     <Col flex="auto">SOUND DRAFT</Col>
                                 </Link>
                                </Row> 
                                <Row>
                                <Col className="Blanc"flex="50%">blanc</Col>
                                 <Col flex="auto"></Col>
                                </Row> 
                              <Row>
   
                               <Col flex="50%">Nous vous proposons un jeu avant de se quitter ! Spoty Sound Draft permet de créer une playlist aléatoirement en vous laissant choisir entre plusieurs morceaux. Laissez votre instinct décider et découvrez de nouveaux artistes.<br/>N’hesitez pas à jouer, communiquer vos résultats et inviter vos amis  !
                               </Col>
                               <Col flex="auto"></Col>
                              </Row>
                              </Row>
                           </div>
                           <div className="PlaceButton">
                             <CopyExample/>
                           </div>
                           
                           <img className="Arrow6" src={arrow6}></img>
       
                        </div>
   
   
   
                 {/*        THANKS     */}
   
           
   
             </div>
         </body>
       </div>
    )
}

export default accueil;