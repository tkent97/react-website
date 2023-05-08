import React from "react";
import { useState, useNavigate } from "react";
import "../assets/loginpage.css";
const LoginPage = () => {
    return (
        <div className="main-login">
            <div className="login-container">
                <h1>Login to your Demand Beats account </h1>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <div className="login-button">login</div>
                <p className="text">Or login using</p>
                <div className="other-login">
                    <div className="facebook"></div>
                    <div className="google"></div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
