import React from 'react'
import Buttons from '../../shared/Buttons'
import './Hero.css'
import img from './img.svg'
import img2 from './img2.svg'

function Hero(props) {
    return (
        <div className='Hero'>
            <div className="title">
                <h2>The Jersey Store</h2>
            </div>
            <div className="container">
                <div className='img1'>
                    <img src={img} alt="Donuts"/>
                </div>
                    <img className='Hero-Img' src={props.image} alt='hero img'/>
                <div className='img2'>
                    <img src={img2} alt="Sphere"/>
                </div>
            </div>
            <div className="buttons">
                <Buttons className='shop__button' name='Shop Now' />
            </div>
        </div>
    )
}

export default Hero
