import React, {useState} from 'react'
import Slider from "react-slick";
import './Slider.css'

function Sliders(props) {
    props.images.shift()

    const [imageIndex, setImageIndex] = useState(1)
    
    var settings = {
        dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      };
     
    return (
        <div className='Slider-Box'>
            <div className='slider__images__box'>
                <Slider {...settings}>

                    {props.images.map((img, idx) => 
                        <div className={idx === imageIndex ? 'slide ActiveSlide' : 'slide'}>
                            <img src={img.url} alt={img.name}/>
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default Sliders
