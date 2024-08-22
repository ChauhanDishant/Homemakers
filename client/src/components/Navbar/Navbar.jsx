import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
    navigate("/signup", { replace: false });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/signup", { replace: false });
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 fixed w-full z-10 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-5">
        <Link
          to="/"
          className="text-3xl font-extrabold text-white hover:text-yellow-300 transition-colors duration-300"
        >
          Homemakers
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>

          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-yellow-300 hover:text-blue-600 transition duration-300"
              >
                <span className="mr-2">Profile</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20">
                  <DropdownLink to="/profile">Profile</DropdownLink>
                  <DropdownLink to="/settings">Settings</DropdownLink>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-600 transition-colors duration-300"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-yellow-400 text-blue-600 px-6 py-2 rounded-full hover:bg-white hover:text-purple-600 transition duration-300 shadow-md"
            >
              Login / Signup
            </button>
          )}
        </nav>

        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none hover:text-yellow-300 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <MobileMenu
          isLoggedIn={isLoggedIn}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
          setMenuOpen={setMenuOpen}
        />
      )}
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-lg font-medium text-white hover:text-yellow-300 transition-colors duration-300"
  >
    {children}
  </Link>
);

const DropdownLink = ({ to, children }) => (
  <Link
    to={to}
    className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-600 transition-colors duration-300"
  >
    {children}
  </Link>
);

const MobileMenu = ({ isLoggedIn, handleLogin, handleLogout, setMenuOpen }) => (
  <div className="lg:hidden bg-purple-600">
    <nav className="flex flex-col items-center py-4 space-y-4">
      <NavLink to="/" onClick={() => setMenuOpen(false)}>
        Home
      </NavLink>
      <NavLink to="/services" onClick={() => setMenuOpen(false)}>
        Services
      </NavLink>
      <NavLink to="/team" onClick={() => setMenuOpen(false)}>
        Team
      </NavLink>
      <NavLink to="/contact-us" onClick={() => setMenuOpen(false)}>
        Contact Us
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink to="/profile" onClick={() => setMenuOpen(false)}>
            Profile
          </NavLink>
          <NavLink to="/settings" onClick={() => setMenuOpen(false)}>
            Settings
          </NavLink>
          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            className="bg-yellow-400 text-blue-600 px-6 py-2 rounded-full hover:bg-white hover:text-purple-600 transition duration-300 shadow-md"
          >
            Log out
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            handleLogin();
            setMenuOpen(false);
          }}
          className="bg-yellow-400 text-blue-600 px-6 py-2 rounded-full hover:bg-white hover:text-purple-600 transition duration-300 shadow-md"
        >
          Login / Signup
        </button>
      )}
    </nav>
  </div>
);

export default Navbar;
