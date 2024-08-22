import { useNavigate } from "react-router";
import styles from "./style.module.css";
import { Home } from "../Home/Home";
import Services from "../Services/Services";
import { useState, useEffect } from "react"; // Import useEffect hook
import { Choose } from "../WhyChoose/Choose";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";

const Main = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check localStorage for token on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []); // Empty dependency array means this effect runs only once on mount

  const handleLogin = () => {
    // Update the state first before navigating
    setLoggedIn(true);
    navigate("/signup", { replace: false });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signup", { replace: false });
    setLoggedIn(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.main_container}>
          <h1 className={styles.logo}>Homemakers</h1>
          <nav className={styles.navbar}>
            <h2>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </h2>
            <h2>
              <Link
                to="/services"
                style={{ textDecoration: "none", color: "black" }}
              >
                Services
              </Link>
            </h2>
            <h2>
              <Link
                to="/team"
                style={{ textDecoration: "none", color: "black" }}
              >
                Team
              </Link>
            </h2>
            <h2>
              <Link
                to="/contact-us"
                style={{ textDecoration: "none", color: "black" }}
              >
                Contact Us
              </Link>
            </h2>
            {isLoggedIn ? (
              <>
                <button className={styles.white_btn} onClick={handleLogout}>
                  Log out
                </button>
              </>
            ) : (
              <button className={styles.white_btn} onClick={handleLogin}>
                Login / Signup
              </button>
            )}
          </nav>
        </div>
        <Home />
        <Services />
        <Choose />
        <Footer />
      </div>
    </>
  );
};

export default Main;
