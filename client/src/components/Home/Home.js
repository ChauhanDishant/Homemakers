import React, { useState, useEffect } from "react";
import "./Home.css";

export const Home = () => {
  const [cardsSplitTransition, setCardsSplitTransition] = useState(false);

  const handleCardsSplitReveal = () => {
    setCardsSplitTransition(true);
  };

  useEffect(() => {
    // Trigger the revealing function when the component mounts
    handleCardsSplitReveal();
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <>
      <div className={`header ${cardsSplitTransition ? "transition" : ""}`}>
        <header>
          <div id="header-container">
            <div id="header-page-title">
              <h1>
                <span>Restoring</span> Efficiency,
                <br /> One Fix at a Time
              </h1>
              <p>
                HomeMakers: Transforming Houses into Homes, One Swift Fix at a
                Time!
              </p>
              <div id="header-subscribe-form">
                <input type="email" name id placeholder="Enter your email" />
                <input type="submit" defaultValue="Subscribe" />
              </div>
            </div>
            <ul
              className={`cards-split ${
                cardsSplitTransition ? "transition" : ""
              }`}
              onClick={handleCardsSplitReveal}
            >
              <>
                <ul className="cards-down">
                  <li className="card card-1">
                    <div className="card-inner">
                      <div className="card-front">
                        <img src="Carpenters.jpg" alt="Carpenter" />
                      </div>
                      <div className="card-back">
                        <div class="content">
                          <h4>Carpenter</h4>
                          <p>
                            "Crafting excellence in wooden finishes,
                            transforming spaces with precision."
                          </p>
                          <button className="btn">Read More</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="card card-2">
                    <div className="card-inner">
                      <div className="card-front">
                        <img src="Electrician.jpg" alt="Electrician" />
                      </div>
                      <div className="card-back">
                        <div class="content">
                          <h4>Electrician</h4>
                          <p>
                            "Powering up your world with skilled electrical
                            solutions, brightening every corner."
                          </p>
                          <button className="btn">Read More</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="card card-3">
                    <div className="card-inner">
                      <div className="card-front">
                        <img src="Plumber.png" alt="Plumber" />
                      </div>
                      <div className="card-back">
                        <div class="content">
                          <h4>Plumber</h4>
                          <p>
                            "Efficient plumbing solutions, ensuring leak-free
                            comfort and smooth water flow."
                          </p>
                          <button className="btn">Read More</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="card card-4">
                    <div className="card-inner">
                      <div className="card-front">
                        <img src="Painters.jpg" alt="Painter" />
                      </div>
                      <div className="card-back">
                        <div class="content">
                          <h4>Painter</h4>
                          <p>
                            "Vibrant strokes of expertise, adding life to your
                            walls with a splash of color."
                          </p>
                          <button className="btn">Read More</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="card card-5">
                    <div className="card-inner">
                      <div className="card-front">
                        <img
                          src="MoversandPackers.jpg"
                          alt="Movers and Packers"
                        />
                      </div>
                      <div className="card-back">
                        <div class="content">
                          <h4>Movers & Packers</h4>
                          <p>
                            "Seamless relocation experience, making moving
                            stress-free & hassle-free."
                          </p>
                          <button className="btn">Read More</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="card card-6">
                    <div className="card-inner">
                      <div className="card-front">
                        <img src="Cleaner_Staff.jpg" alt="Cleaner Staff" />
                      </div>
                      <div className="card-back">
                        <div class="content">
                          <h4>Cleaners</h4>
                          <p>
                            "Immaculate cleanliness, tailored services to keep
                            your space spotless and refreshing."
                          </p>
                          <button className="btn">Read More</button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
};

export default Home;
