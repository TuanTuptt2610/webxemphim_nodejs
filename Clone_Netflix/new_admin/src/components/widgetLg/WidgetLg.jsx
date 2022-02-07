import axios from "axios";
import { useEffect, useState } from "react";
import "./widgetLg.css";

export default function WidgetLg() {
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    const getNewMovies = async () => {
      try {
        const res = await axios("/movies?new=true", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setNewMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewMovies();
  }, []);

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Movies</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Movie</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Genre</th>
          <th className="widgetLgTh">Is Series</th>
        </tr>

        {newMovies.map((movie) => (
          <>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src={movie.img} alt="" className="widgetLgImg" />
                <span className="widgetLgName">{movie.title}</span>
              </td>
              <td className="widgetLgDate">{movie.createdAt}</td>
              <td className="widgetLgAmount">{movie.genre}</td>
              {movie.isSeries ? (
                <td className="widgetLgStatus">true</td>
              ) : (
                <td className="widgetLgStatus">false</td>
              )}
            </tr>
          </>
        ))}
      </table>
    </div>
  );
}
