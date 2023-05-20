/* eslint-disable no-unused-vars */
import { useLoaderData, useLocation } from "react-router-dom";
import "./AllToys.css";
import React, { useEffect, useState } from "react";
import SingleToyRow from "../SingleToyRow/SingleToyRow";

const AllToys = () => {
  const location = useLocation();
  const allToys = useLoaderData();
  const [showAllToys, setShowAllToys] = useState(allToys);
  let [searchFlag,setSearchFlag] = useState(0);

  useEffect(() => {
    document.title = `Animalto Toyasium -${location.pathname.slice(1)}`;
  }, [location]);

  const handleSearch = (event) => {
    event.preventDefault();
    const text = event.target.search.value;
    const textLower = text.toLowerCase();
    const newToys = showAllToys.filter((toy) =>
      toy.name.toLowerCase().includes(textLower)
    );
    setShowAllToys(newToys);
    setSearchFlag(1);
    console.log(searchFlag);
    event.target.reset();
  };
  const handleShowAll = () => {
    setShowAllToys(allToys);
    setSearchFlag(0)
    console.log(searchFlag);
  };

  return (
    <div className="mt-3">
      <form onSubmit={handleSearch} className="search-box mb-4">
        <input style={{width:'100%'}} type="text" name="search" className="me-2" />
        <input style={{width:'100%'}} type="submit" value="Search" className="btn btn-info" />
      </form>
      <button  className={`btn btn-outline-info mt-2 ${searchFlag ? "d-block" : 'd-none'}`} onClick={handleShowAll}>
        {" "}
        Show all toys
      </button>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Seller Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {showAllToys.map((toy) => (
            <SingleToyRow key={toy._id} toy={toy}></SingleToyRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
