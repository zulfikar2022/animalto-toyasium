/* eslint-disable react/prop-types */
import "./allToys.css";
const SingleToyRow = ({ toy }) => {
  const { name, sellerName, category, price, availableQuantity, image } = toy;
  return (
    <tr className="">
      <img style={{ height: "200px", width: "200px" }} src={image} alt="" />
      <td style={{ paddingTop:"84px", paddingBottom:"84px" }}>{name}</td>
      <td style={{ paddingTop:"84px", paddingBottom:"84px" }}>{sellerName}</td>
      <td style={{ paddingTop:"84px", paddingBottom:"84px" }}>{category}</td>
      <td style={{ paddingTop:"84px", paddingBottom:"84px" }}>${price}</td>
      <td style={{ paddingTop:"84px", paddingBottom:"84px" }}>{availableQuantity}</td>
      <td style={{ paddingTop:"84px", paddingBottom:"84px" }}>
        <button className="btn btn-outline-info">View details</button>
      </td>
    </tr>
  );
};

export default SingleToyRow;
