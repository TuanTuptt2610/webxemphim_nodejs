import { useContext, useRef, useState } from "react";
import "./navbar.scss";
import "@material-ui/icons";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";
const Navbar = ({ userAccount }) => {
  const [isScrolled, setIsScrolled] = useState();
  const [search, setSearch] = useState("");
  const { dispatch } = useContext(AuthContext);

  const searchRef = useRef();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        {/* left */}
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          {/* <span>New and Popular</span>
          <span>My List</span> */}
        </div>
        {/* right */}
        <div className="right">
          <div className="search_movies">
            <Link
              to={{ pathname: "/search/" + search, searchMovies: search }}
              className="link"
            >
              <Search className="icon_search" />
            </Link>
            <input
              type="text"
              placeholder="search"
              ref={searchRef}
              onKeyUp={handleSearch}
            />
          </div>
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src={
              userAccount.profilePic ||
              "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
            }
            alt=""
          />
          <div className="profile">
            <div>
              <ArrowDropDown className="icon" />
            </div>
            <div className="option">
              {/* <span>Setting</span> */}
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
