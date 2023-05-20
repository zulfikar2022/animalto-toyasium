/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { authContext } from "../../MyContext/AuthProvider";
import MyToyRow from "../MyToyRow/MyToyRow";

const MyToys = () => {
  const location = useLocation();
  const { user } = useContext(authContext);
  const email = user.email;
  const [myAllToys, setMyAllToys] = useState([]);

  useEffect(() => {
    document.title = `Animalto Toyasium -${location.pathname.slice(1)}`;
  }, [location]);

  useEffect(() => {
    console.log("inside useEffect");
    fetch(`https://toy-marketplace-server-sand.vercel.app/toy/myToys?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyAllToys(data);
        console.log(data);
      });
  }, [email]);
  const handleShort =  (type) => {
    console.log(type);
       fetch(`https://toy-marketplace-server-sand.vercel.app/toy/myToys/sort?email=${email}&type=${type}`)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setMyAllToys(data);
          })
  };

  return (
    <div className="mt-3">
      <div className="d-flex flex-column w-25 ">
        <button
          className="btn btn-outline-info mb-2"
          onClick={() => handleShort("ascending")}
        >
          Sort by Ascending
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => handleShort("descending")}
        >
          Sort by Descending
        </button>
      </div>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Rating</th>
            <th scope="col">Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {myAllToys.map((toy) => (
            <MyToyRow
              setMyAllToys={setMyAllToys}
              myAllToys={myAllToys}
              key={toy._id}
              toy={toy}
            ></MyToyRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
