import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name,email,password});
    }

  return (
    <form className="w-75 mx-auto mb-5" onSubmit={handleRegister}>
        <h2 className="text-center my-3">Please, register yourself</h2>
      <div className="mb-3">
        <label htmlFor="exampleInputName1" className="form-label">
          Your Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName1"
          placeholder="Your Name"
          name="name"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Your Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Your Email"
          name="email"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          name="password"
          required
        />
      </div>
      <button type="submit" className=" w-100" style={{backgroundColor:'#14afef',border:'none',padding:'7px',borderRadius:'5px'}}>
       Register
      </button>

        {/* success of failure message will be shown here */}
      <div className="mb-2">
    
      </div>
      <p className="text-center  mt-0" style={{marginLeft:'auto',marginRight:'auto'}}>Already have an account? <Link className="text-danger " to='/login'>Please Login</Link></p>
    </form>
  );
};

export default Register;
