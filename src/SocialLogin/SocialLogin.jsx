/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import "./SocialLogin.css";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { authContext } from "../MyContext/AuthProvider";

const SocialLogin = ({from}) => {
  const { loginWithGoogle, setUser } = useContext(authContext);
  const navigate = useNavigate();


  const handleGoogleLogin = () => {
    loginWithGoogle().then((res) => {
      const user = res.user;

      setUser(user);
      if(from === '/'){
        navigate('/');
      }
      else{
        navigate(`/toys/${from}`,{replace:true});
      }
    });
  };

  return (
    <div className="text-center mb-3">
      <div className="social-log-container">
        <Link className="" onClick={handleGoogleLogin}>
          <div className="social-log-item">
            <FaGoogle className="social-log-logo" />
            <span>Login With Google</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SocialLogin;
