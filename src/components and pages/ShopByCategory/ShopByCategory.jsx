/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./ShopByCategory.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyItem from "../ToyItem/ToyItem";

const ShopByCategory = ({ allToys }) => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    setToys([...allToys]);
  }, [allToys]);
  // console.log(allToys);

  return (
    <div className="my-4">
      <Tabs>
        <TabList className="tablist-container ">
          <Tab selectedClassName="activeTab">Lion</Tab>
          <Tab selectedClassName="activeTab">Panda</Tab>
          <Tab selectedClassName="activeTab">Elephant</Tab>
          <Tab selectedClassName="activeTab">Horse</Tab>
          <Tab selectedClassName="activeTab">Cow</Tab>
        </TabList>
        <TabPanel>
          <div className="lion-container">
            {toys?.map((toy) =>
              toy?.category === "lion" ? (
                <ToyItem
                  key={toy?._id}
                  image={toy?.image}
                  name={toy?.name}
                  price={toy?.price}
                  rating={toy?.rating}
                  id={toy?._id}
                ></ToyItem>
              ) : null
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="lion-container">
            {toys?.map((toy) =>
              toy?.category === "panda" ? (
                <ToyItem
                  key={toy?._id}
                  image={toy?.image}
                  name={toy?.name}
                  price={toy?.price}
                  rating={toy?.rating}
                  id={toy?._id}
                ></ToyItem>
              ) : null
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="lion-container">
            {toys?.map((toy) =>
              toy?.category === "elephant" ? (
                <ToyItem
                  key={toy?._id}
                  image={toy?.image}
                  name={toy?.name}
                  price={toy?.price}
                  rating={toy?.rating}
                  id={toy?._id}
                ></ToyItem>
              ) : null
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="lion-container">
            {toys?.map((toy) =>
              toy?.category === "horse" ? (
                <ToyItem
                  key={toy?._id}
                  image={toy?.image}
                  name={toy?.name}
                  price={toy?.price}
                  rating={toy?.rating}
                  id={toy?._id}
                ></ToyItem>
              ) : null
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="lion-container">
            {toys?.map((toy) =>
              toy?.category === "cow" ? (
                <ToyItem
                  key={toy?._id}
                  image={toy?.image}
                  name={toy?.name}
                  price={toy?.price}
                  rating={toy?.rating}
                  id={toy?._id}
                ></ToyItem>
              ) : null
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
