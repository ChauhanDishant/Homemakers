import React from "react";
import styles from "./Contact.module.css";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import { RiSendPlane2Line } from "react-icons/ri";

const Contact = () => {
  return (
    <div className={styles.contact_container}>
      <section>
        <div className={styles.section_header}>
          <div className={styles.container}>
            <h2>Contact Us</h2>
            <p>
              "Feel free to contact us with any queries or service requests for
              our home service company. We're here to assist you and ensure your
              home receives the expert care it deserves. Your satisfaction is
              our priority, and our dedicated team is ready to address any
              questions you may have. Reach out to us today, and let's make your
              home service experience exceptional."
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.contact_info}>
              <div className={styles.contact_info_item}>
                <div className={styles.contact_info_icon}>
                  <FaHome />
                </div>
                <div className={styles.contact_info_content}>
                  <h4>Address</h4>
                  <p>
                    139,CHARUSAT Campus, Highway-off Nadiad,
                    <br /> Changa, Gujarat, <br />
                    388421
                  </p>
                </div>
              </div>
              <div className={styles.contact_info_item}>
                <div className={styles.contact_info_icon}>
                  <FaPhone />
                </div>
                <div className={styles.contact_info_content}>
                  <h4>Phone</h4>
                  <p>7041652332</p>
                </div>
              </div>
              <div className={styles.contact_info_item}>
                <div className={styles.contact_info_icon}>
                  <FaEnvelope />
                </div>
                <div className={styles.contact_info_content}>
                  <h4>Email</h4>
                  <p>dishantchauhan40@gmail.com</p>
                </div>
              </div>
            </div>
            <div className={styles.contact_form}>
              <form action="" id="contact-form">
                <h2>Send Message</h2>
                <div className={styles.input_box}>
                  <input type="text" required={true} name="fullName" />
                  <span>Full Name</span>
                </div>
                <div className={styles.input_box}>
                  <input type="email" required={true} name="email" />
                  <span>Email</span>
                </div>
                <div className={styles.input_box}>
                  <textarea required={true} name="message" defaultValue={""} />
                  <span>Type your Message...</span>
                </div>
                <button className={styles.btn_submit} type="submit">
                  <div className={styles.submit}>
                    <RiSendPlane2Line />
                  </div>
                  <p>Send</p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
