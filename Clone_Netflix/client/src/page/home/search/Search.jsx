import React, { useEffect, useState } from "react";
import Featured from "../../../components/navbar/featured/Featured";
import Navbar from "../../../components/navbar/Navbar";
import "./search.scss";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";

export default function Search({ userAccount }) {
  const location = useLocation();
  const searchMovies = location.searchMovies;

  const [movies, setMovies] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  // const index = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("/search/" + searchMovies, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, [searchMovies]);

  return (
    <div className="search">
      <Navbar userAccount={userAccount} />
      <Featured />
      <div className="list">
        <div className="warpper">
          <div className="container">
            {!movies.length ? (
              <div className="resultSearching">Không có kết quả tìm kiếm!</div>
            ) : (
              <>
                <div className="resultSearching">
                  Tìm thấy {movies.length} kết quả!
                </div>
                <div className="resultListItem">
                  {movies.map((movie) => (
                    <Link to={{ pathname: "/watch", movie: movie }}>
                      <div
                        className="listItem"
                        // onMouseEnter={() => setIsHovered(true)}
                        // onMouseLeave={() => setIsHovered(false)}
                        // style={{ left: isHovered && index * 255 - 50 + index * 2.5 }}
                      >
                        <img src={movie?.img} alt="" />
                        {isHovered && (
                          <>
                            {/* <video src={movie.trailer} autoPlay={true} loop /> */}
                            <div className="itemInfo">
                              <div className="icons">
                                <PlayArrow className="icon" />
                                <Add className="icon" />
                                <ThumbUpAltOutlined className="icon" />
                                <ThumbDownAltOutlined className="icon" />
                              </div>
                              <div className="itemInfoTop">
                                <span>{movie.duration}</span>
                                <span className="limit">+{movie.limit}</span>
                                <span>{movie.year}</span>
                              </div>
                              <div className="desc">{movie.desc}</div>
                              <div className="genre">{movie.genre}</div>
                            </div>
                          </>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
