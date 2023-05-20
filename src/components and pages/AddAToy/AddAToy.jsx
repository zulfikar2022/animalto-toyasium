/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import "./AddAToy.css";
import { authContext } from "../../MyContext/AuthProvider";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

const AddAToy = () => {
  const { user } = useContext(authContext);
  const location = useLocation();
  useEffect(() => {
    document.title = `Animalto Toyasium -${location.pathname.slice(1)}`;
  }, [location]);
  const handleAddToy = (event) => {
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
    const newToy = {
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
      return Swal.fire(
        "Something is wrong with your inserted data. Please check the rating , available quantity and price field"
      );
    }

    fetch(`https://toy-marketplace-server-sand.vercel.app/toy/addToy`, {
      method: "post",
      body: JSON.stringify(newToy),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Your toy successfully added to the database!!!");
          form.reset();
        }
      });
  };

  return (
    <div className=" mt-2 big-container">
      <form onSubmit={handleAddToy} className="p-2">
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
            />
          </div>
          <div>
            <label htmlFor="dropdown" className="form-label">
              Category
            </label>
            <br />
            <select id="dropdown" name="select" required>
              <option value="">Select a category</option>
              <option value="lion">Lion</option>
              <option value="panda">Panda</option>
              <option value="elephant">Elephant</option>
              <option value="horse">Horse</option>
              <option value="cow">Cow</option>
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
              defaultValue={user.displayName}
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
              defaultValue={user.email}
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="text"
              name="price"
              className="form-control"
              id="price"
              required
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
            />
          </div>
        </div>

        <input
          type="submit"
          className="mt-2 w-100 p-2 rounded border-0 btn btn-info"
          value="Add toy"
        />
      </form>
    </div>
  );
};

export default AddAToy;
