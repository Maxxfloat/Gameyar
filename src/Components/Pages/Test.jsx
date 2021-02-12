import React from 'react'
import Slider from 'react-slick'

import styles from './Test.module.scss'

import img from '../Assets/Images/gamer photo.jpg'

const Test = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

const card = (
  <div className={styles.card__container}>
  <div className={styles.card}>
    <img src={img} />
    <p>chert</p>
  </div>
  </div>
)

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          title
        </div>
        <div className={styles.groups}>
          <h2>coaches</h2>
         <Slider {...settings} >
           {card}
           {card}
           {card}
           {card}            
          </Slider>
        </div>
        <div className={styles.groups}>
        <h2>teammates</h2>
          <Slider {...settings} >
            {card}
            {card}
            {card}
            {card} 
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Test
