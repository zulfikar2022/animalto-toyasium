/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../SocialLogin/SocialLogin";
import "./Login.css";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../MyContext/AuthProvider";

const Login = () => {
  const {signIn,setUser}  = useContext(authContext);
  const [showPass,setShowPass] = useState(false);
  const [error,setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.id || '/';
  console.log(from);

  
  useEffect(() => {
      document.title = `Animalto Toyasium -${location.pathname.slice(1)}`;
  },[location])



  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    


    signIn(email,password)
        .then(res => {
          const loggedUser = res.user;
          if(loggedUser){
            setError('');
            setUser(loggedUser);
            form.reset();
            if(from === '/'){
              navigate('/');
            }
            else {
              navigate(`/toys/${from}`,{replace:true});
            }
          }
        })
        .catch(err => {
            setError(err.message);
        })
  };

  return (
    <>
      <form onSubmit={handleLogin} className="w-75 mx-auto mb-2">
        <h2 className="text-center my-2">Please, Login</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type={showPass? 'text' : 'password'}
            className="form-control"
            id="exampleInputPassword1"
            name="password"
          />
          <input
            type="checkbox"
            className=""
            onClick={() => setShowPass(!showPass)}
            id="myCheckbox"
            name="myCheckbox"
            value="isChecked"
          />
          <label htmlFor="myCheckbox">
            {showPass ? "Hide Password" : "Show Password"}
          </label>
        </div>

        <button
          type="submit"
          className="w-100"
          style={{
            backgroundColor: "#14afef",
            border: "none",
            padding: "7px",
            borderRadius: "5px",
          }}
        >
          Login
        </button>
        {/* failure message will be shown here */}
        <div className="mb-2 ">
          <p className="text-danger">{error ? error : ''}</p>
        </div>
      </form>
      <p
        className="text-center  mt-0"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        New to this site?{" "}
        <Link className="text-danger " to="/register">
          please Register
        </Link>
      </p>
      <SocialLogin from={from}></SocialLogin>
    </>
  );
};

export default Login;
