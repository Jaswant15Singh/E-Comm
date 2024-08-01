import React, { useState } from "react";
import "../Pages/Css/login.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const {email,password}=fields;
  const login = async () => {
    console.log("login");

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // email: fields.email,
          // password: fields.password,
          email,
          password
        }),
      });

      const responseData = await response.json();
      console.log(responseData);

      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/");
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed");
    }
  };

  const signup = async () => {
    console.log("signup");

    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          password: fields.password,
        }),
      });

      const responseData = await response.json();
      console.log(responseData);

      if (responseData.success) {
        alert("User has been registered");
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/");
      } else {
        alert("Existing User with same email found");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed");
    }
  };

  const changeHandler = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <div className="loginsignup">
      <div className="container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Signup" && (
            <input
              type="text"
              value={fields.name}
              onChange={changeHandler}
              name="name"
              placeholder="Enter Your Name"
            />
          )}
          <input
            type="email"
            value={fields.email}
            onChange={changeHandler}
            name="email"
            placeholder="Enter Your Email"
          />
          <input
            type="password"
            value={fields.password}
            onChange={changeHandler}
            name="password"
            placeholder="Enter Your Password"
          />
        </div>
        <button
          onClick={() => {
            state === "Signup" ? signup() : login();
          }}
        >
          Continue
        </button>
        {state === "Signup" ? (
          <p className="loginsignup-login">
            Already have an account?
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?
            <span
              onClick={() => {
                setState("Signup");
              }}
            >
              Click Here
            </span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
