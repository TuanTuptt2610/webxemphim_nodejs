import Chart from "../../components/chart/Chart";
import "./analytics.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);
  const [movieStats, setMovieStats] = useState([]);

  useEffect(() => {
    // users
    const getUserStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });

        const statsUserList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });

        statsUserList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };

    //movies
    const getMovieStats = async () => {
      try {
        const res = await axios.get("/movies/stats", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });

        const statsMovieList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });

        statsMovieList.map((item) =>
          setMovieStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New Movie": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };

    getUserStats();
    getMovieStats();
  }, [MONTHS]);

  return (
    <div className="home">
      {/* chart users */}
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />

      {/* chart movies */}
      <Chart
        data={movieStats}
        title="Movie Analytics"
        grid
        dataKey="New Movie"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
