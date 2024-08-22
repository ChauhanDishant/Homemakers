import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

const Footer = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.footer}>
        <h1 className={styles.footer_logo}>Homemakers</h1>
        <div className={styles.footer_content}>
          <div className={styles.main_content}>
            {/* Content Number 1 */}
            <div className={styles.content}>
              <h4>Our Service</h4>
              <p>
                <Link to="/service/plumber" className={styles.link}>
                  Plumber
                </Link>
              </p>
              <p>
                <Link to="/service/electrician" className={styles.link}>
                  Electrician
                </Link>
              </p>
              <p>
                <Link to="/service/security-guard" className={styles.link}>
                  Security Guard
                </Link>
              </p>
              <p>
                <Link to="/service/movers-packers" className={styles.link}>
                  Movers and Packers
                </Link>
              </p>
              <p>
                <Link to="/service/sweeper" className={styles.link}>
                  Sweeper
                </Link>
              </p>
              <p>
                <Link to="/service/painter" className={styles.link}>
                  Painter
                </Link>
              </p>
            </div>
            {/* Content Number 2*/}
            <div className={styles.content}>
              <h4>About Homemakers</h4>
              <p>
                <Link to="/mission" className={styles.link}>
                  Our Mission
                </Link>
              </p>
              <p>
                <Link to="/team" className={styles.link}>
                  Our Team
                </Link>
              </p>
              <p>
                <Link to="/blog" className={styles.link}>
                  Our Blog
                </Link>
              </p>
            </div>
            <div className={styles.content}>
              <h4>Contact</h4>
              <p>
                <span className={styles.icons}>
                  <IoLocationOutline />
                </span>
                Anand, Gujarat
              </p>
              <p>
                <span className={styles.icons}>
                  <FaPhoneAlt />
                </span>
                +91 7041652332
              </p>
              <p>
                <span className={styles.icons}>
                  <MdOutlineMail />
                </span>
                dishantchauhan40@gmail.com
              </p>
              <p>
                <Link to="/contact-us" className={styles.link}>
                  <span className={styles.icons}>
                    <IoIosContact />
                  </span>
                  Contact Us
                </Link>
              </p>

              <hr className={styles.socialline}></hr>
              <div className={styles.social_media}>
                <div className={styles.social_media_list}>
                  <ul className={styles.social_media_list}>
                    <li>
                      <a href="https://www.instagram.com/">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/">
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <iframe
                title="Anand Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.9651782849767!2d72.9635974150218!3d22.565184385185125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e43c2f1bb4e0d%3A0xe6b908b0ee93a6fe!2sAnand%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1662909063693!5m2!1sen!2sin"
                width="95%"
                height="290"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <hr></hr>
          <p className={styles.bottom}>
            &copy; Homemakers 2023 - ALL OF THE RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;