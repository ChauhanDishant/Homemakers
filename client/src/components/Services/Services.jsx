import React from "react";
import styles from "./Services.module.css";
import { Helmet } from "react-helmet";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <div className={styles.main_container}>
        <div className={styles.header}>Our Featured Services</div>
        <div className={styles.container}>
          <h4>
            "Enlist skilled professionals tailored to your specific needs with
            Rapid Repair Services"
          </h4>
          <div className={styles.card_container}>
            <div className={styles.card}>
              <img
                className={styles.image}
                src="Service_Painter.jpg"
                alt="Painting"
              />
              <div className={styles.content}>
                <h2>Painter</h2>
                <div className={styles.starRating}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={styles.starContainer}>
                      <span
                        className={
                          star <= 4.1
                            ? styles.goldStar
                            : star - 0.5 <= 4.1
                            ? styles.halfStar
                            : styles.grayStar
                        }
                      >
                        &#9733;
                      </span>
                    </span>
                  ))}
                  <p className={styles.ratingText}>4.1</p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img
                className={styles.image}
                src="./Service_Plumber.webp"
                alt="Plumber"
              />
              <div className={styles.content}>
                <h2>Plumber</h2>
                <div className={styles.starRating}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={styles.starContainer}>
                      <span
                        className={
                          star <= 4.2
                            ? styles.goldStar
                            : star - 0.5 <= 4.2
                            ? styles.halfStar
                            : styles.grayStar
                        }
                      >
                        &#9733;
                      </span>
                    </span>
                  ))}
                  <p className={styles.ratingText}>4.2</p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img
                className={styles.image}
                src="./Service_Electrician.webp"
                alt="Electrician"
              />
              <div className={styles.content}>
                <h2>Electrician</h2>
                <div className={styles.starRating}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={styles.starContainer}>
                      <span
                        className={
                          star <= 4.4
                            ? styles.goldStar
                            : star - 0.5 <= 4.4
                            ? styles.halfStar
                            : styles.grayStar
                        }
                      >
                        &#9733;
                      </span>
                    </span>
                  ))}
                  <p className={styles.ratingText}>4.4</p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img
                className={styles.image}
                src="./Service_Movers.jpg"
                alt="Movers and Packers"
              />
              <div className={styles.content}>
                <h2>Movers & Packers</h2>
                <div className={styles.starRating}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={styles.starContainer}>
                      <span
                        className={
                          star <= 4.3
                            ? styles.goldStar
                            : star - 0.5 <= 4.3
                            ? styles.halfStar
                            : styles.grayStar
                        }
                      >
                        &#9733;
                      </span>
                    </span>
                  ))}
                  <p className={styles.ratingText}>4.3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 500 200">
          <path
            d="M 0 25 C 250 20 180 130 900 40 L 800 0 L 0 0"
            fill="rgb(247,248,252)"
          ></path>
        </svg>
      </div>
    </>
  );
}
