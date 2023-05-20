import { ToastContainer , toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./MobileApp.css";

const MobileApp = () => {
    const handleDownloadApp = () => {
        toast.info('This is a fake button!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
  return (
    <div className="app-container">
      <h4>
        Experience the Ultimate online toy shopping brought to you by{" "}
        <i>Animalto Toyasium</i> .
      </h4>
      <p>
        Official Distributor of Mattel, Funskool, Winfun, Frank & Zephyr Toy
        Brands in ToyLand! <br /> Authorized Licensee of Hot Lions & Pandas
         (2022)!
      </p>
      <button onClick={handleDownloadApp} className="fake-button">Download Our Mobile App</button>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default MobileApp;
