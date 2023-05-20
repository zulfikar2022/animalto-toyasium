/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyToyRow = ({ toy,setMyAllToys,myAllToys }) => {
  const { _id, name, category, availableQuantity, price, rating, image } = toy;
  const navigate = useNavigate();
  const handleDeleteToy = () => {
    Swal.fire({
      title: "Are you sure to delete the toy?",
      text: "You won't be able to revert this deletion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4e8ea9",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-marketplace-server-sand.vercel.app/toy/delete/${_id}`, {
          method: "delete",
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount === 1){
              Swal.fire("Deleted!", "Your toy is successfully deleted.", "success");
              const remainingToys = myAllToys.filter(toy => toy._id !== _id);
              setMyAllToys(remainingToys);
            }
        })
      }
    });
  };
  const navigateUpdateToy = () => {
    navigate('/toy/updateToy',{state: _id})
  };
  return (
    <tr>
      <td>
        <img style={{ height: "200px", width: "200px" }} src={image} alt="" />
      </td>
      <td style={{ paddingTop: "84px", paddingBottom: "84px" }}>{name}</td>
      <td style={{ paddingTop: "84px", paddingBottom: "84px" }}>{category}</td>
      <td style={{ paddingTop: "84px", paddingBottom: "84px" }}>${price}</td>
      <td style={{ paddingTop: "84px", paddingBottom: "84px" }}>{rating}</td>
      <td style={{ paddingTop: "84px", paddingBottom: "84px" }}>
        {availableQuantity}
      </td>
      <td>
        <section
          style={{ paddingTop: "84px", paddingBottom: "84px", gap: "10px" }}
          className="d-flex flex-column"
        >
          <button onClick={handleDeleteToy} className="btn btn-outline-danger">
            Delete Toy
          </button>
          <button onClick={navigateUpdateToy} className="btn btn-outline-info">
            Update Toy
          </button>
        </section>
      </td>
    </tr>
  );
};

export default MyToyRow;
