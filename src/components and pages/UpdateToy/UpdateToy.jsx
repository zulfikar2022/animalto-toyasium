/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../MyContext/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const { user } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const [toy, setToy] = useState();
  const id = location.state;
  useEffect(() => {
    fetch(`http://localhost:5000/toy/update/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
        console.log(toy);
      });
  }, [id]);

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.toyName.value;
    const category = form.select.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.email.value;
    const availableQuantity = parseInt(form.quantity.value);
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const details = form.details.value;
    const image = form.image.value;
    const updatedToy = {
      name,
      category,
      sellerName,
      sellerEmail,
      availableQuantity,
      price,
      rating,
      details,
      image,
    };
    if (rating < 0 || rating > 5 || availableQuantity < 0 || price <= 0) {
      return Swal.fire({
        icon: "error",
        text: "Something is wrong with your inserted data. Please check the rating , available quantity and price field",
      });
    }
    fetch(`http://localhost:5000/toy/update/${id}`, {
      method: "put",
      body: JSON.stringify(updatedToy),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire("Data updated successfully!!");
            navigate('/myToys');
        } else {
          Swal.fire({
            icon: "error",
            text: "Data could not update",
          });
        }
      });
  };
  return (
    <div className=" mt-2 big-container">
      <form onSubmit={handleUpdateToy} className="p-2">
        <div className="add-a-toy-container">
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Toy Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              aria-describedby="emailHelp"
              required
              name="toyName"
              defaultValue={toy?.name}
            />
          </div>
          <div>
            <label htmlFor="dropdown" className="form-label">
              Category
            </label>
            <br />
            <select
              id="dropdown"
              name="select"
              //   defaultValue={toy?.category}
              required
            >
              <option value="">Select a category</option>
              <option
                selected={toy?.category === "lion" ? true : false}
                value="lion"
              >
                Lion
              </option>
              <option
                selected={toy?.category === "panda" ? true : false}
                value="panda"
              >
                Panda
              </option>
              <option
                selected={toy?.category === "elephant" ? true : false}
                value="elephant"
              >
                Elephant
              </option>
              <option
                selected={toy?.category === "horse" ? true : false}
                value="horse"
              >
                Horse
              </option>
              <option
                selected={toy?.category === "cow" ? true : false}
                value="cow"
              >
                Cow
              </option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="sellerName" className="form-label">
              Seller Name
            </label>
            <input
              type="text"
              className="form-control"
              id="sellerName"
              required
              defaultValue={user?.displayName}
              name="sellerName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sellerEmail" className="form-label">
              Seller Email
            </label>
            <input
              type="email"
              className="form-control"
              id="sellerEmail"
              required
              defaultValue={user?.email}
              readOnly
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Available Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              required
              name="quantity"
              defaultValue={toy?.availableQuantity}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              name="price"
              className="form-control"
              id="price"
              required
              defaultValue={toy?.price}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rating" className="form-label">
              Rating
            </label>
            <input
              type="text"
              className="form-control"
              id="rating"
              required
              name="rating"
              defaultValue={toy?.rating}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="details" className="form-label">
              Details
            </label>
            <textarea
              name="details"
              type="text"
              required
              id="details"
              rows={4}
              style={{ width: "100%" }}
              defaultValue={toy?.details}
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image Link
            </label>
            <input
              type="url"
              name="image"
              className="form-control"
              id="image"
              required
              defaultValue={toy?.image}
            />
          </div>
        </div>

        <input
          type="submit"
          className="mt-2 w-100 p-2 rounded border-0 btn btn-info"
          value="Update toy"
        />
      </form>
    </div>
  );
};

export default UpdateToy;
