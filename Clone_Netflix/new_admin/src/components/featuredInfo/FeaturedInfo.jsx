import "./featuredInfo.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FeaturedInfo() {
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("/users", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getAdmins = async () => {
      try {
        const res = await axios.get("/admins", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setAdmins(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getMovies = async () => {
      try {
        const res = await axios.get("/movies", {
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

    getUsers();
    getAdmins();
    getMovies();
  });

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{users.length}</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Admins</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{admins.length}</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Movies</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{movies.length}</span>
        </div>
      </div>
    </div>
  );
}
