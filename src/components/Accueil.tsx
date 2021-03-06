import React, { useEffect, useState } from 'react';
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


function Accueil(){

  const [topTracks,  setTopTracks] = useState<any[]>([]);
  const [Me,  setMe] = useState<any[]>([]);
  const [topArtists,  setTopArtists] = useState<any[]>([]);
  const [isLoaded,  setIsLoaded] = useState(false);



  useEffect(() => {
    if(!isLoaded) {
      fetch("http://127.0.0.1:8080/toptracks/65a1ddd3ba89726cc3e5821bbd23dcb7f8e34e47")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setTopTracks(result);
        },
        (error) => {
          console.log(error);
          setIsLoaded(true);
        }
      )
    }
    // console.log( topTracks[0].urlImage)
    // console.log(testObj(topTracks, "urlImage"))
  }, [topTracks]);

  

  const testObj = (o: object, search: string) => {
    for (const [key, value] of Object.entries(o)) {
        if (key === search) {
        return value
        }
    }
}

function geturl(number:number){
  if (topTracks[number] === undefined){
    return ""

  
  }else{
    console.log("else")
    const objet = testObj(topTracks[number], "urlImage")
    return objet  
  }
}



function getName(number:number){
  if (topTracks[number] === undefined){
    return ""

  
  }else{
    console.log("else")
    const objet = testObj(topTracks[number], "name")
    return objet  
  }
}
function getReleaseDate(number:number){
  if (topTracks[number] === undefined){
    return ""

  
  }else{
    console.log("else")
    const objet = testObj(topTracks[number], "release_date")
    return objet  
  }
}





  useEffect(() => {
    if(!isLoaded) {
      fetch("http://127.0.0.1:8080/topartist/65a1ddd3ba89726cc3e5821bbd23dcb7f8e34e47")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setTopArtists(result);
        },
        (error) => {
          console.log(error);
          setIsLoaded(true);
        }
      )
    }
  }, [topArtists]);


function getArtist(number:number){
  if (topArtists[number] === undefined){
    return ""
  
  }else{
    const objet = testObj(topArtists[number], "popularity")
    return objet
  }
}


      if(topTracks !== undefined || topTracks[0] !== undefined) {
        console.log(topTracks);
        console.log(isLoaded);
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
                  <p>Bienvenue sur Spoty, le tracker Spotify par excellence ! Consultez l???int??gralit??s de vos donn??es Spotify gr??ce ?? notre API en quelques clicks.
                  <br/>Bonne d??couverte !<br/></p>
                  <div className="Arrow3">
                <img src={arrow3}></img> 
                </div>
                  <button  type="button"> <a className="LinkButton" href="#ancre2">Je d??couvre !</a> </button>
                </div>  
                </div>
    
                <img className="flower1" src={flower1}></img> 
    
    
                          {/*        TOP ALBUM         */}
                  <a id="ancre2"></a>
                <div className="TopAlbum">
                    <h1 className="T3">
                      <Row>
                        <Col span={12}>Top...</Col>
                        <Col className="test" span={12}>{getArtist(0)}</Col>
                      </Row>
                    </h1>  
                    <div className="DataAlbum">
                      <h2 className="info">
                        <Row>
                          <Col flex="auto"></Col>
                            <Col flex="50%">...c'est la popularit?? de cet artiste !</Col>
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
                          <Col flex="50%">...c'est la dur??e de cet album !</Col>
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
                          {/* Label: <span className="BackLabel"> Capitol Musique France </span><br /> */}
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
                      <img className="ImageGlobal" src={geturl(0)} alt="Image de l'album 1"/>
                      <img className='ButtonPeriode' src={cemois} alt="button"/> 
                    </div>
                    <div className="Album2"> 
                    {/*BACKEND*/}
                      <img className="ImageGlobal" src={geturl(1)} alt="Image de l'album 1"/>
                      <img className='ButtonPeriode' src={months6} alt="button"/> 
                    </div>
                    <div className="Album3"> 
                    {/*BACKEND*/}
                      <img className="ImageGlobal" src={geturl(2)} alt="Image de l'album 1"/>
                      <img className='ButtonPeriode' src={alltime} alt="button"/> 
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
                        <Col className="pourcentage" span={12}>{getArtist(0)}</Col>
                      </Row>
                    </h1>  
                    <div className="DataArtiste">
                      <h2 className="InfoData">
                        <Row>
                          <Col flex="auto"></Col>
                            <Col flex="50%">...c'est la popularit?? de cet artiste !</Col>
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
                          <Col flex="50%">...c'est le nombre d'abonn?? de cet artiste !</Col>
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
                            {/*Artiste:*/} <span className="BackArtisteName">"Green Montana"</span>
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
                        {/*BACKEND*/}<Col className="TitleTrack" flex="60%">"{getName(0)}"</Col>{/*BACKEND*/}
                        <Col className="pourcentage2" flex="auto">Top...</Col>
                      </Row>
                    </h1>  
                    <div className="DataTitre">
                      <h2 className="info3">
                        <Row>
                          {/*BACKEND*/}<Col flex="70%">Par Laylow</Col>{/*BACKEND*/}
                            <Col flex="auto"></Col>
                        </Row>
                      </h2>  
                      <div className="T8">
                      <Row>
                        {/*BACKEND*/}<Col flex="70%">2020</Col>{/*BACKEND*/}
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
                      {/*BACKEND*/}<Col flex="70%">2.45</Col>{/*BACKEND*/}
                        </Row>
                      </div>
                      <h2 className="info3">
                        <Row>
                          <Col flex="70%">...c'est la dur??e de ce titre !</Col>
                          <Col flex="auto"></Col>
                        </Row> 
                      </h2>  
                    </div> 
                        <div className="ImageAlbum2">
                          {/*BACKEND*/}<img src={geturl(0)}></img> {/*BACKEND*/}
                        </div>
                        <Row>
                        <Col className="AlbumTitle"flex="auto">
                            Titre !
                          </Col>
                        <div className="InfoTitre">
                          <Col flex ="20%">
                            {/*BACKEND*/}
                          <span className="BackTitle"> "{getName(0)}" - Trinity</span> <br />
                          {/* Label: <span className="BackLabel"> Cactus Jack Records </span><br /> */}
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
                                  <Col flex="50%">Merci d???avoir utilis?? nos services !
                                L?????quipe Spoty est fi??re de vous compter parmi ses membres. Mais la f??te n???est pas finie... <br/></Col>
                                  <Link to="/Navigation" className="ButtonDraft">
                                      <Col flex="auto">SOUND DRAFT</Col>
                                  </Link>
                                  </Row> 
                                  <Row>
                                  <Col className="Blanc"flex="50%">blanc</Col>
                                  <Col flex="auto"></Col>
                                  </Row> 
                                <Row>
    
                                <Col flex="50%">Nous vous proposons un jeu avant de se quitter ! Spoty Sound Draft permet de cr??er une playlist al??atoirement en vous laissant choisir entre plusieurs morceaux. Laissez votre instinct d??cider et d??couvrez de nouveaux artistes.<br/>N???hesitez pas ?? jouer, communiquer vos r??sultats et inviter vos amis  !
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
    } else {
      return (<div>Chargement...</div>);
    }
}

export default Accueil;