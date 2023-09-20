import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import { AiFillCar } from "react-icons/ai";
import { BiSolidBuildings } from "react-icons/bi";
import { BsAirplaneEngines } from "react-icons/bs";
import Outstation from "./Outstation";
import AirportTransfer from "./AirportTransfer";
import Local from "./Local";
const BookCab = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full absolute top-3 z-40">
      <div className=" justify-between py-3   px-40 items-center">
        <div className="flex shadow-xl rounded-lg pt-4 bg-white justify-center ">
          <ul
            className="justify-start items-start "
            style={{
              fontStyle: `normal`,
              fontWeight: `500`,
              lineHeight: `normal`,
            }}>
            <Tabs
              selectedIndex={activeIndex}
              onSelect={(index) => setActiveIndex(index)}>
              <TabList className="flex gap-8 justify-center">
                <Tab
                  className={`no-underline text-[#60A547] cursor-pointer py-1 px-7 text-xl 
                        ${activeIndex === 0 ? "active-tab" : "unactive-tab"}`}>
                  <div className="flex gap-3 items-center">
                    <BiSolidBuildings /> Outstation
                  </div>
                </Tab>
                <Tab
                  className={`no-underline  text-[#60A547] cursor-pointer py-1 px-7 text-xl
                        ${activeIndex === 1 ? "active-tab" : "unactive-tab"}`}>
                  <div className="flex gap-3 items-center">
                    <AiFillCar /> Local
                  </div>
                </Tab>

                <Tab
                  className={`no-underline text-[#60A547] cursor-pointer py-1 px-7 text-xl 
                        ${activeIndex === 2 ? "active-tab" : "unactive-tab"}`}>
                  <div className="flex gap-3 items-center">
                    <BsAirplaneEngines /> Airport Transfer
                  </div>
                </Tab>
              </TabList>
              <TabPanel className="w-full">
                <div className=" px-3 pt-2">
                  <Outstation></Outstation>
                </div>
              </TabPanel>
              <TabPanel className="w-full">
                <div className="px-3 pt-2">
                  <Local />
                </div>
              </TabPanel>

              <TabPanel className="w-full">
                <div className=" px-3 pt-2">
                  <AirportTransfer />
                </div>
              </TabPanel>
            </Tabs>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookCab;
