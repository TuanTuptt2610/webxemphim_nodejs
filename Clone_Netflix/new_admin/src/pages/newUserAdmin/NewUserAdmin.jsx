import { createAdmin } from "../../context/adminContext/AdminApiCalls";
import { AdminContext } from "../../context/adminContext/AdminContext";
import "./newUserAdmin.css";
// import storage from "../../firebase";
import { useContext, useState } from "react";
import { useHistory } from "react-router";

export default function NewUserAdmin() {
  const [user, setUser] = useState(null);
  // const [profilePic, setProfilePic] = useState(null);
  const history = useHistory();

  const { dispatch } = useContext(AdminContext);
  // const [uploaded, setUploaded] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

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
  //           setUser((prev) => {
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

    createAdmin(user, dispatch);
    history.push("admins");
  };

  console.log(user);

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Admin</h1>
      <form className="newUserForm">
        {/* <div className="newUserItem">
          <label>Profile Picture</label>
          <input
            type="file"
            id="profilePic"
            name="profilePic"
            onChange={(e) => setProfilePic(e.target.files[0])}
          />
        </div> */}
        <div className="newUserItem">
          <label>Admin Name</label>
          <input
            type="text"
            placeholder="eg: johnsmith"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="eg: John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="eg: john@gmail.com"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="phone number" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="address" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Is Admin</label>
          <select
            className="newUserSelect"
            name="isAdmin"
            id="isAdmin"
            onChange={handleChange}
          >
            <option value="" hidden>
              Is Admin?
            </option>
            <option value="true">True</option>
          </select>
        </div>
        {/* <button className="newUserButton" onClick={handleSubmit}>
          Create
        </button> */}
        {/* {uploaded === 1 ? ( */}
        <button className="addProductButton" onClick={handleSubmit}>
          Create
        </button>
        {/* ) : (
          <button className="addProductButton" onClick={handleUpload}>
            Upload
          </button>
        )} */}
      </form>
    </div>
  );
}
