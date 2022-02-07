import axios from "axios";
import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [check1, setCheck1] = useState("");
  const [checkEmailSpace, setCheckEmailSpace] = useState(true);

  const history = useHistory();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleCheckEmail = () => {
    const begin = emailRef.current.value.search("@gmail.com");
    const end = emailRef.current.value.length;
    const str = emailRef.current.value.substr(begin, end);
    if (str === "@gmail.com") {
      setCheck1(str);
    }
  };

  const handleStart = () => {
    handleCheckEmail();
    setEmail(emailRef.current.value);
    if (!emailRef.current.value) {
      alert("Email không được bỏ trống");
    } else if (check1 !== "@gmail.com") {
      alert("Sai định dạng: Bạn phải nhập email");
    }
    for (let checkEmail of emailRef.current.value) {
      if (checkEmail === " ") {
        alert("Sai định dạng: Email không được có dấu cách");
        setCheckEmailSpace(false);
      }
    }
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    setUsername(usernameRef.current.value);
    setPassword(passwordRef.current.value);
    if (!usernameRef.current.value) {
      alert("Username không được bỏ trống");
    } else if (!passwordRef.current.value) {
      alert("Password không được bỏ trống");
    }
    for (let pass of passwordRef.current.value) {
      if (pass === " ") {
        alert("Sai định dạng: Password không được có dấu cách");
      }
    }
    try {
      await axios.post("auth/register", { email, username, password });
      history.push("/login");
    } catch (err) {}
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/login" className="loginButton">
            <span>Sign In</span>
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email || check1 !== "@gmail.com" || !checkEmailSpace ? (
          <div className="input">
            <input
              type="email"
              placeholder="email address"
              ref={emailRef}
              onInput={handleCheckEmail}
            />
            <button className="registerButton" onClick={handleStart}>
              Get Start
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
