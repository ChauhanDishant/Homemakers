import React from "react";
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
    <div class="relative w-full h-auto bg-[#f7f8fc]">
      <div class="font-serif text-4xl text-[#0d0a0f] pt-7 text-center font-normal">
        HomeMakers
      </div>
      <div>
        <div className="mt-7 ml-20 grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-[20%_22%_23%_30%]">
          {/* Content Number 1 */}
          <div className="w-full leading-[2vh]">
            <h4 className="mb-[20px] font-[1.3rem] mt-[0.5vh]">Our Service</h4>
            <p>
              <Link
                to="/service/plumber"
                className="text-left font-sans font-normal text-[#6b696e] no-underline hover:text-blue-600 hover:no-underline"
              >
                Plumber
              </Link>
            </p>
            <p>
              <Link
                to="/service/electrician"
                className="text-left font-sans font-normal text-[#6b696e] no-underline hover:text-blue-600 hover:no-underline"
              >
                Electrician
              </Link>
            </p>
            <p>
              <Link
                to="/service/security-guard"
                className="text-left font-sans font-normal text-[#6b696e] no-underline hover:text-blue-600 hover:no-underline"
              >
                Security Guard
              </Link>
            </p>
            <p>
              <Link
                to="/service/movers-packers"
                className="text-left font-sans font-normal text-[#6b696e] no-underline hover:text-blue-600 hover:no-underline"
              >
                Movers and Packers
              </Link>
            </p>
            <p>
              <Link
                to="/service/sweeper"
                className="text-left font-sans font-normal text-[#6b696e] no-underline hover:text-blue-600 hover:no-underline"
              >
                Sweeper
              </Link>
            </p>
            <p>
              <Link
                to="/service/painter"
                className="text-left font-sans font-normal text-[#6b696e] no-underline hover:text-blue-600 hover:no-underline"
              >
                Painter
              </Link>
            </p>
          </div>
          {/* Content Number 2*/}
          <div className="w-full leading-[2vh]">
            <h4 className="mb-[20px] font-[1.3rem] mt-[0.5vh]">
              About Homemakers
            </h4>
            <p>
              <Link
                to="/mission"
                className="text-left font-sans font-normal text-[#6b696e] no-underline hover:text-blue-600 hover:no-underline"
              >
                Our Mission
              </Link>
            </p>
            <p>
              <Link
                to="/team"
                className="text-left font-sans font-normal text-[#6b696e] no-underline hover:text-blue-600 hover:no-underline"
              >
                Our Team
              </Link>
            </p>
            <p>
              <Link
                to="/blog"
                className="text-left font-sans font-normal text-[#6b696e] no-underline hover:text-blue-600 hover:no-underline"
              >
                Our Blog
              </Link>
            </p>
          </div>
          <div className="w-full leading-[2.5vh]">
            <h4 className="mb-[20px] font-[1.3rem] mt-[0.5vh]">Contact</h4>
            <p className="grid grid-cols-[10%_auto] hover:text-blue-600">
              <IoLocationOutline />
              Anand, Gujarat
            </p>
            <p className="grid grid-cols-[10%_auto] hover:text-blue-600">
              <FaPhoneAlt />
              +91 7041652332
            </p>

            <p className="grid grid-cols-[10%_auto] hover:text-blue-600">
              <MdOutlineMail />
              dishantchauhan40@gmail.com
            </p>
            <p className="grid grid-cols-[10%_auto] hover:text-blue-600">
              <IoIosContact />
              Contact-Us
            </p>

            <hr className="w-[80%]"></hr>
            <div className="w-[4/5] mx-auto">
              <ul className="flex items-center gap-4">
                <li className="relative">
                  <a
                    href="https://www.instagram.com/"
                    className="flex items-center justify-center w-12 h-12 text-white text-2xl bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:text-gray-800 hover:shadow-xl ring-2 ring-pink-300 ring-opacity-50"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="relative">
                  <a
                    href="https://www.linkedin.com/"
                    className="flex items-center justify-center w-12 h-12 text-white text-2xl bg-blue-700 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-blue-100 hover:text-blue-700 hover:shadow-xl ring-2 ring-blue-500 ring-opacity-50"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li className="relative">
                  <a
                    href="https://www.twitter.com/"
                    className="flex items-center justify-center w-12 h-12 text-white text-2xl bg-blue-400 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-blue-100 hover:text-blue-500 hover:shadow-xl ring-2 ring-blue-300 ring-opacity-50"
                  >
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="xs:w-[90%] sm:w-full leading-[2vh]">
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
        <p className="text-center text-xs md:text-lg">
          &copy; Homemakers 2024 - ALL OF THE RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
};

export default Footer;
