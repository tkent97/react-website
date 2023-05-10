import React from "react";
import { useState, useNavigate } from "react";
import "..assets/signup.css";
const SignUp = () => {
    return (
        <div className="main-signup">
            <div className="signup-container">
                <h1>Sign Up! </h1>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <div className="login-button">login</div>
                <p className="text">Or sign up using</p>
                <div className="other-signup">
                    <div className="facebook"></div>
                    <div className="google"></div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
