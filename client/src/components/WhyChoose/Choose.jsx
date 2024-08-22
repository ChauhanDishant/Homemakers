import React from "react";
import styles from "./Choose.module.css";

export const Choose = () => {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.header}>Why Choose Us</div>
        <div className={styles.card_container}>
          <div className={styles.card_choose}>
            <img src="./Reliable.jpg" alt="" />
            {/* Card No. 1 */}
            <div className={styles.choose_content}>
              <h2>Experienced & Reliable</h2>
              <p>
                "At RapidRepairHub, we're a dynamic startup with a dedicated
                team of passionate professionals. Our approach empowers our
                workforce through certified training centers."
              </p>
            </div>
          </div>
          {/* Card No. 2 */}
          <div className={styles.card_choose}>
            <img src="./Price_Icon.png" alt="" />
            <div className={styles.choose_content}>
              <h2>Transparent Pricing</h2>
              <p>
                "At RapidRepairHub, transparency is at the core of our pricing
                philosophy. We believe in providing clear and straightforward
                pricing, ensuring our clients understand the value they
                receive."
              </p>
            </div>
          </div>
          {/* Card No. 3 */}
          <div className={styles.card_choose}>
            <img src="./Customer_Support.jpg" alt="" />
            <div className={styles.choose_content}>
              <h2>Customer Support</h2>
              <p>
                "At RapidRepairHub, our commitment to exceptional service
                extends to our specialized customer support teams tailored for
                each service, be it plumbing, electrical, carpentry, and more."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
