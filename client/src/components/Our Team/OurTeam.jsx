import React from "react";
import style from "./OurTeam.module.css";
import {
  RiTwitterFill,
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

export const OurTeam = () => {
  return (
    <>
      <section id="team" className={`${style.team} ${style.section_bg}`}>
        <div className={style.team_container} data-aos="fade-up">
          <div className={style.section_title}>
            <h2>Team</h2>
            <p>
              At NestMenders, we take pride in assembling a team of exceptional
              individuals who are committed to excellence, innovation, and
              collaboration. Our dedicated professionals bring a diverse range
              of skills and expertise, united by a shared passion for delivering
              quality and value to our clients.
            </p>
          </div>
          <div className={style.row}>
            {/* Team Member 1 */}
            <div
              className={style.col_lg_6}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div
                className={`${style.member} ${style.d_flex} ${style.align_items_start}`}
              >
                <div className={style.pic}>
                  <img
                    src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                    className={style.img_fluid}
                    alt=""
                  />
                </div>
                <div className={style.member_info}>
                  <h4>Chauhan Dishant</h4>
                  <span>Front-End Developer</span>
                  <p>
                    "Creating engaging and user-friendly interfaces to enhance
                    the user experience with creative design and smooth
                    interactions."
                  </p>
                  <div className={style.social}>
                    <a href="">
                      <RiTwitterFill />
                    </a>
                    <a href="">
                      <RiFacebookFill />
                    </a>
                    <a href="">
                      <RiInstagramFill />
                    </a>
                    <a href="">
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /* Team Member 2 */}
            <div
              className={style.col_lg_6}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div
                className={`${style.member} ${style.d_flex} ${style.align_items_start}`}
              >
                <div className={style.pic}>
                  <img
                    src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                    className={style.img_fluid}
                    alt=""
                  />
                </div>
                <div className={style.member_info}>
                  <h4>Parmesh Bhatt</h4>
                  <span>Backend - Developer</span>
                  <p>
                    "Crafting captivating and intuitive interfaces for
                    exceptional user satisfaction through innovative design and
                    seamless interactions."
                  </p>
                  <div className={style.social}>
                    <a href="">
                      <RiTwitterFill />
                    </a>
                    <a href="">
                      <RiFacebookFill />
                    </a>
                    <a href="">
                      <RiInstagramFill />
                    </a>
                    <a href="">
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div
              className={style.col_lg_6}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div
                className={`${style.member} ${style.d_flex} ${style.align_items_start}`}
              >
                <div className={style.pic}>
                  <img
                    src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                    className={style.img_fluid}
                    alt=""
                  />
                </div>
                <div className={style.member_info}>
                  <h4>Priyank Vyas</h4>
                  <span>Front-End Developer</span>
                  <p>
                    "Crafting powerful server solutions, optimizing data
                    handling, and ensuring seamless web functionality for
                    enhanced performance."
                  </p>
                  <div className={style.social}>
                    <a href="">
                      <RiTwitterFill />
                    </a>
                    <a href="">
                      <RiFacebookFill />
                    </a>
                    <a href="">
                      <RiInstagramFill />
                    </a>
                    <a href="">
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* {/* Team Member 4 */}
            {/* <div
              className={style.col_lg_6}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div
                className={`${style.member} ${style.d_flex} ${style.align_items_start}`}
              >
                <div className={style.pic}>
                  <img
                    src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                    className={style.img_fluid}
                    alt=""
                  />
                </div>
                <div className={style.member_info}>
                  <h4>Priyank Vyas</h4>
                  <span>DataBase Admin</span>
                  <p>
                    "Architecting robust database solutions, optimizing data
                    handling, and ensuring seamless web functionality for
                    enhanced performance."
                  </p>
                  <div className={style.social}>
                    <a href="">
                      <RiTwitterFill />
                    </a>
                    <a href="">
                      <RiFacebookFill />
                    </a>
                    <a href="">
                      <RiInstagramFill />
                    </a>
                    <a href="">
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
                </div>
              </div>*/}
          </div>
        </div>
      </section>
      {/* End Team Section */}
    </>
  );
};
