/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const MyToyRow = ({ toy }) => {
  const { _id, name, category, availableQuantity, price, rating, image } = toy;
  return (
    <tr>
      <td>
        <img style={{ height: "200px", width: "200px" }} src={image} alt="" />
      </td>
      <td style={{ paddingTop: "84px", paddingBottom: "84px" }}>{name}</td>
      <td style={{ paddingTop: "84px", paddingBottom: "84px" }}>{category}</td>
      <td style={{ paddingTop: "84px", paddingBottom: "84px" }}>${price}</td>
      <td style={{ paddingTop: "84px", paddingBottom: "84px" }}>{rating}</td>
      <td style={{ paddingTop: "84px", paddingBottom: "84px" }}>{availableQuantity}</td>
    </tr>
  );
};

export default MyToyRow;
