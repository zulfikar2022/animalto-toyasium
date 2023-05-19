import "./ShopByCategory.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css'; 

const ShopByCategory = () => {
  return (
    <div className="my-2">
      <Tabs>
        <TabList className='tablist-container'>
          <Tab selectedClassName="activeTab">Lion</Tab>
          <Tab selectedClassName="activeTab">Panda</Tab>
          <Tab selectedClassName="activeTab">Elephant</Tab>
          <Tab selectedClassName="activeTab">Horse</Tab>
          <Tab selectedClassName="activeTab">Cow</Tab>
        </TabList>

        <TabPanel>
          <h2>Lion data</h2>
        </TabPanel>
        <TabPanel>
          <h2>Panda Data</h2>
        </TabPanel>
        <TabPanel>
          <h2>Elephant Data</h2>
        </TabPanel>
        <TabPanel>
          <h2>Horse Data</h2>
        </TabPanel>
        <TabPanel>
          <h2>Cow Data</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
