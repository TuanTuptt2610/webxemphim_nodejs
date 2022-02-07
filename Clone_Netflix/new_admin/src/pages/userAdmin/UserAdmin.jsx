import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { useState, useContext } from "react";
import { useHistory } from "react-router";
import { Link, useLocation, useParams } from "react-router-dom";
// import storage from "../../firebase";
import { AdminContext } from "../../context/adminContext/AdminContext";
import { updateAdmin } from "../../context/adminContext/AdminApiCalls";
import "./userAdmin.css";

export default function UserAdmin({ userAccount }) {
  const history = useHistory();
  const location = useLocation();
  const user = location.user;

  const [userUpdate, setUserUpdate] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  // const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(AdminContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUserUpdate({ ...userUpdate, [e.target.name]: value });
  };

  //Uppload Picture
  // const upload = (items) => {
  //   items.forEach((item) => {
  //     const fileName = new Date().getTime() + item.label + item.file.name;
  //     const uploadTask = storage.ref(`/profiles/${fileName}`).put(item.file);
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done.");
  //       },
  //       (err) => {
  //         console.log(err);
  //       },
  //       () => {
  //         uploadTask.snapshot.ref.getDownloadURL().then((url) => {
  //           setUserUpdate((prev) => {
  //             return { ...prev, [item.label]: url };
  //           });
  //           setUploaded((prev) => prev + 1);
  //         });
  //       }
  //     );
  //   });
  // };

  // const handleUpload = (e) => {
  //   e.preventDefault();
  //   upload([{ file: profilePic, label: "profilePic" }]);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAdmin(user._id, userUpdate, dispatch);
    history.push("/admins");
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Admin</h1>
        <Link to="/newAdmin">
          <button className="userAddButton">Create</button>
        </Link>
      </div>

      {/* show infor admin */}
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={
                user.profilePic ||
                "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
              }
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
              {/* <span className="userShowUserTitle">Software Engineer</span> */}
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.fullname}</span>
            </div>
            {/* <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div> */}
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{user.phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
          </div>
        </div>

        {/* update */}
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={user.username}
                  className="userUpdateInput"
                  name="username"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder={user.fullname}
                  name="fullname"
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={user.email}
                  className="userUpdateInput"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder={user.phone}
                  name="phone"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={profilePic || user.profilePic}
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  name="profilePic"
                  style={{ display: "none" }}
                  // onChange={(e) => setProfilePic(e.target.files[0])}
                />
              </div>
              {user._id === userAccount._id ? (
                // <>
                //   {uploaded === 1 ? (
                <button className="userUpdateButton" onClick={handleSubmit}>
                  Update
                </button>
              ) : (
                // ) : (
                //     <button className="userUpdateButton" onClick={handleUpload}>
                //       Upload
                //     </button>
                //   )}
                // </>
                <button className="userUpdateButton" disabled>
                  Update
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
