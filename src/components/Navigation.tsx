import React from 'react';

import 'antd/dist/antd.css';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import '../App.css';
/* Background */
import background from './img/BackgroundPink.jpg';
import backgroundB from './img/BackgroundBlue.jpg';
import backgroundY from './img/BackgroundYellow.jpg';
/* Header */
import Logo from './img/logo.svg';
import PhotoId from './img/ImgProfil.jpg'
import Indication from'../img/Indi.svg'
/* Albums aux choix */
import choice1 from '../img/Alb1.jpg'
import choice2 from '../img/Alb2.jpg'
import choice3 from '../img/Alb3.jpg'
import choice4 from '../img/Alb4.jpg'
/* Albums choisit pour draft */
import select1 from '../img/Alb5.jpg'
import select2 from '../img/Alb6.jpg'
import select3 from '../img/Alb7.jpg'
import select4 from '../img/Alb8.jpg'
import select5 from '../img/Alb9.jpg'
import select6 from '../img/Alb0.jpg'
/* Ca j'avoue je sais pas */
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';


import Accueil from  '../components/Accueil'
import Menu from './Menu';


function navigation (){

    return(
        <div className="App">
            <body>
                <div className="Container">
                  {/* PAGE DE PRESENTATION */}
        <div className="Notice">

                <h1 className="A1">
                <Row>
                    <Col span={24}>SPOTY DRAFT</Col>
                </Row>
                </h1>
                <h1 className="A2">
                <Row>
                    <Col span={24}>COMPOSEZ VOTRE 4-4-2<br />MUSICAL !</Col>
                </Row>
                </h1>
                <div className="Explication">
                <p>
                    <Row>
                    <Col span={24}>Entrez dans la danse en choisissant 6 morceaux</Col>
                    </Row>
                </p>
                <p>
                    <Row>
                    <Col span={24}>que Spoty Draft vous propose aléatoirement.</Col>
                    </Row>
                </p>
                <p>
                    <Row>
                    <Col span={24}> Découvrez ensuite votre composition de sons et créez votre playlist.</Col>
                    </Row>
                </p>
                <p>
                    <Row>
                    <Col span={24}>C’est le moment de faire de nouvelles découvertes musicales !</Col>
                    </Row>
                </p>
                <button type="button">Let's go !</button>
                <img className="Indication" src={Indication} alt="Fleche en SVG"/>
                </div>
                </div>
                {/* PAGE DES CHOIX DES TITRES */}
                <div className="Selection">
                <h2 className="A3">
                <Row>
                    <Col flex='100px'>
                    </Col>
                    <Col flex='auto'>Choisissez un titre parmi<br />la sélection</Col>
                </Row>
                </h2>
                <p className='Counter'>
                <Row>
                    <Col flex='auto'>03/05</Col>
                    <Col flex='100px'>
                    </Col>
                </Row>
                </p>
                <div className='Listing'>
                <Row gutter={[24, 16]}>
                    <Col span={6}>
                    <div className='Choice1'>
                    <img className="Illustration1" src={choice1} alt="Image de l'album 1"/>
                    <p className='Music1'>Starboy</p>
                    <p className='Singer1'>The Weeknd</p>
                    </div>
                    </Col>
                    <Col span={6}>
                    <div className='Choice2'>
                    <img className="Illustration1" src={choice2} alt="Image de l'album 2"  />
                    <p className='Music1'>Starboy</p>
                    <p className='Singer1'>The Weeknd</p>
                    </div>
                    </Col>
                    <Col span={6}>
                    <div className='Choice3'>
                    <img className="Illustration1" src={choice3} alt="Image de l'album 3"  />
                    <p className='Music1'>Starboy</p>
                    <p className='Singer1'>The Weeknd</p>
                    </div>
                    </Col>
                    <Col span={6}>
                    <div className='Choice4'>
                    <img className="Illustration1" src={choice4} alt="Image de l'album 4"  />
                    <p className='Music1'>Starboy</p>
                    <p className='Singer1'>The Weeknd</p>
                    </div>
                    </Col>
                </Row>
                </div>
                <div className="Space">
                </div>
                </div>
                {/* PAGE PLAYLIST FINALE */}
                <div className='FinalDraft'>
                <h2 className="A4">
                <Row>
                    <Col flex='100px'>
                    </Col>
                    <Col flex='auto'>Votre composition</Col>
                </Row>
                </h2>
                <p className='Score'>Popularité : 75<br />Durée : 22min</p>
                <div className='ListDraft'>
                <div className='Line1'>
                    <div className='Draft1'>
                    <img className="ImgChoice1" src={select1} alt="Image de l'album 1"  />
                    </div>
                    <div className='Draft2'>
                    <img className="ImgChoice1" src={select2} alt="Image de l'album 2"  />
                    </div>
                </div>
                <div className='Line2'>
                    <div className='Draft3'>
                    <img className="ImgChoice1" src={select3} alt="Image de l'album 3"  />
                    </div>
                    <div className='Draft4'>
                    <img className="ImgChoice1" src={select4} alt="Image de l'album 4"  />
                    </div>
                    <div className='Draft5'>
                    <img className="ImgChoice1" src={select5} alt="Image de l'album 5"  />
                    </div>
                </div>
                <div className='Line3'>
                    <div className='Draft6'>
                    <img className="ImgChoice1" src={select6} alt="Image de l'album 6"  />
                    </div>
                </div>
                </div>
                <button className='Download' type="button">Dowload</button>
                <div className='Space2'>
                </div>

            </div>
          </div>
       </body>
       </div>
           

    )
}

export default navigation;