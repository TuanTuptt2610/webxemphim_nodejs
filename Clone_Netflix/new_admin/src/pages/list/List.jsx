import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router";
import { useState, useContext } from "react";
import "./list.css";
import { ListContext } from "../../context/listContext/ListContext";
import { updateList } from "../../context/listContext/ListApiCalls";

export default function List() {
  const history = useHistory();
  const location = useLocation();
  const list = location.list;

  const [listUpdate, setListUpdate] = useState(null);

  const { dispatch } = useContext(ListContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setListUpdate({ ...listUpdate, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateList(list._id, listUpdate, dispatch);
    history.push("/lists");
  };

  return (
    <div className="product">
      {/* show infor */}
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newlist">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>

      {/* update */}
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input
              type="text"
              name="title"
              placeholder={list.title}
              // value="Title"
              onChange={handleChange}
            />
            <label>Type</label>
            <select name="type" onChange={handleChange}>
              {list.type === "movie" ? (
                <>
                  <option value="movie">Movie</option>
                  <option value="series">Series</option>
                </>
              ) : (
                <>
                  <option value="series">Series</option>
                  <option value="movie">Movie</option>
                </>
              )}
            </select>
            <label>Genre</label>
            <input
              type="text"
              placeholder={list.genre}
              name="genre"
              // value={list.genre}
              onChange={handleChange}
            />
          </div>
          <div className="productFormRight">
            <button className="productButton" onClick={handleSubmit}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
