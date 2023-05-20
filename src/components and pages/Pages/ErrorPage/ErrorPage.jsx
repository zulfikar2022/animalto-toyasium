import { Link } from "react-router-dom";
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="text-center error-container container">
      <h1 className="error-code">404</h1>
      <p className="error-message">Page Not Found</p>
      <p className="error-description">
        The page you are looking for does not exist or an another error
        occurred. Go to <Link to="/">Home page</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
