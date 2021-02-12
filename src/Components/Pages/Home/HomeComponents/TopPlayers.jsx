import React from "react";

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import img from "../../../Assets/Images/gamer photo.jpg";
import styles from "./TopPlayers.module.scss";

const TopPlayers = () => {
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
        <img className={styles.card__img} src={img} />
        <p>chert</p>
      </div>
    </div>
  );

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>
            برترین مربی ها و همتیمی ها
          </h2>
          </div>
        <div className={styles.groups}>
          <h2>coaches</h2>
          <div className={styles.slider__container}>
          <Slider className={styles.slider}  {...settings}>
            {card}
            {card}
            {card}
            {card}
          </Slider>
          </div>
        </div>
        <div className={styles.groups}>
          <h2>teammates</h2>
          <div className={styles.slider__container}>
          <Slider className={styles.slider}  {...settings}>
            {card}
            {card}
            {card}
            {card}
          </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlayers;

/* {topPlayersArray.map((index) => {
              console.log(index);
              return index;
            })} */

// const [slidesToShow, setSlidesToShow] = React.useState(1);
// let mql = null;
// mql = window.matchMedia("(min-width: 37rem)");
// console.log(mql.matches);
// if (mql.matches) {
//   setSlidesToShow(3);
// } else {
//   setSlidesToShow(1);
// }

// React.useEffect(() => {
//   function handleResize() {
//     let mql = null;
//     mql = window.matchMedia("(min-width: 37rem)");
//     console.log(mql.matches);
//     if (mql.matches) {
//       setSlidesToShow(3);
//     } else {
//       setSlidesToShow(1);
//     }
//   }

//   window.addEventListener("resize", handleResize);
// });
