import React from "react";
import style from "./Mission.module.css";

export const Mission = () => {
  return (
    <>
      <div className={style.mission_container}>
        <div className={style.mission}>
          <div className={style.header}>
            <p>Our Mission</p>
          </div>
          {/* Mission 1 */}
          <div className={style.mission_content}>
            <div className={style.mission_state}>
              <div className={style.mission_img}>
                <img src="excellence.svg" alt="Check Mark Icon" />
              </div>
              <div className={style.mission_use}>
                <h5>Commitent to Excellence</h5>
                <p>
                  "Transforming houses into homes, our seamless home service
                  brings comfort to your doorstep with a touch of excellence."
                </p>
              </div>
            </div>
            {/* Mission 2 */}
            <div className={style.mission_state}>
              <div className={style.mission_img}>
                <img src="./Customer_Centric.jpg" alt="Check Mark Icon" />
              </div>
              <div className={style.mission_use}>
                <h5>Customer Centric Approach</h5>
                <p>
                  "Putting you at the heart of every transformation, our
                  seamless home service is designed to bring comfort right to
                  your doorstep, ensuring an excellent experience tailored just
                  for you."
                </p>
              </div>
            </div>
            {/* Mission 3 */}
            <div className={style.mission_state}>
              <div className={style.mission_img}>
                <img src="./Vision.png" alt="Check Mark Icon" />
              </div>
              <div className={style.mission_use}>
                <h5>Vision</h5>
                <p>
                  "Bringing you to the heart of every transformation, our
                  seamless home service ensures comfort at your doorstep,
                  tailored just for you."
                </p>
              </div>
            </div>
            <div className={style.mission_state}>
              <div className={style.mission_img}>
                <img src="./Goals.png" alt="Check Mark Icon" />
              </div>
              <div className={style.mission_use}>
                <h5>Goals</h5>
                <p>
                  "Embark on a journey to complete home well-being. With
                  'Holistic Home Wellness,' we place you at the core of each
                  transformation. Our seamless home service is crafted to
                  deliver comfort directly to your doorstep, promising an
                  exceptional experience curated uniquely for you."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.mission_image}>
          <img src="./Our_Mission.jpg" alt="" />
        </div>
      </div>
    </>
  );
};
