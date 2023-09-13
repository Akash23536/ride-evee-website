import { useEffect, useState } from "react";
import HeadingBooking from "./HeadingBooking";
import Nav from "./Nav";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";
import Footer from "../Footer";

const Bookings = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [booking, setBooking] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);

  const handleOpen = (entry) => {
    setSelectedTrip(entry);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch("booking.json")
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, []);

  return (
    <div className="w-full">
      <Nav />
      <HeadingBooking />
      <div className="w-full py-7">
        <Tabs
          className="flex"
          selectedIndex={activeIndex}
          onSelect={(index) => setActiveIndex(index)}>
          <TabList className="w-1/6 shadow-xl h-screen px-4 space-y-4">
            <Tab
              className={`no-underline flex justify-between items-center cursor-pointer text-[#60A547] py-3 px-7 text-xl 
                        ${activeIndex === 0 ? "active-tab" : "unactive-tab"}`}>
              Upcoming <AiOutlineArrowRight />
            </Tab>
            <Tab
              className={`no-underline flex justify-between items-center cursor-pointer text-[#60A547] py-3 px-7 text-xl 
                        ${activeIndex === 1 ? "active-tab" : "unactive-tab"}`}>
              Cancelled <AiOutlineArrowRight />
            </Tab>
            <Tab
              className={`no-underline flex justify-between items-center text-[#60A547] cursor-pointer py-3 px-7 text-xl 
                        ${activeIndex === 2 ? "active-tab" : "unactive-tab"}`}>
              Completed <AiOutlineArrowRight />
            </Tab>
          </TabList>

          <div className="w-5/6  px-4 justify-start">
            <div className=" px-3 justify-start">
              <TabPanel className="w-full ">
                <div className="flex text-lg items-center rounded-lg shadow-2xl bg-[#FFFFFF] justify-between py-6 px-3">
                  <h1 className="font-semibold">
                    You do not have any upcoming bookings with us. Do you want
                    to book a taxi?
                  </h1>
                  <button className="bg-[#60A547] rounded-lg text-white py-2 px-3">
                    Book Now
                  </button>
                </div>
                {booking.map(
                  (entry) =>
                    entry.status === "Upcoming" && (
                      <div
                        key={entry._id}
                        className=" rounded-lg shadow-2xl bg-[#FFFFFF] justify-between py-6 my-4 px-3">
                        <div className="flex justify-between">
                          <div className="flex gap-4">
                            <div className="">
                              <div className="bg-[#60A547] text-xl text-white  rounded-full flex flex-col items-center justify-center text-center w-20 h-20 my-auto font-semibold">
                                <p className="">{entry.day}</p>
                                {/* <br /> */}
                                <p className="">{entry.month}</p>
                              </div>
                            </div>

                            <div>
                              <h1 className="font-semibold">
                                {entry.location}
                                {entry.distance}
                              </h1>
                              <h1 className="font-semibold">{entry.area}</h1>
                              <p className="text-[#60A547] ">
                                Advanced Paid : Rs. {entry.paid}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h1 className="font-semibold text-end">
                              TRIP ID {entry.tripid}
                            </h1>
                            <div className="flex gap-3">
                              <button
                                onClick={() => handleOpen(entry)}
                                // onClick={() => window.my_modal_3.showModal()}
                                className="bg-[#60A547] text-white px-3 py-2 text-lg rounded-md font-semibold ">
                                Cancel Booking
                              </button>
                              <button className="bg-[#60A547] text-white px-3 py-2 text-lg rounded-md font-semibold ">
                                Edit Booking
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
                {isModalOpen && (
                  <div
                    className=""
                    //  className="modal" modal-box
                  >
                    <div className="absolute modal-box max-w-3xl top-1/2 p-0 ">
                      <div className="bg-[#60A547] py-3 text-white">
                        <button
                          onClick={handleClose}
                          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4 text-2xl">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none">
                            <path
                              d="M10.1 5.9L5.9 10.1M5.9 5.9L10.1 10.1M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <h3 className="font-bold text-2xl text-center">
                          Fare Summary
                        </h3>
                      </div>
                      <div className="bg-white p-4 ">
                        <h3 className="text-xl font-bold">
                          Booking ID: {selectedTrip.tripid}
                        </h3>
                        {/* <p className="text-lg">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p> */}
                        <select className="select my-2 text-lg  bg-white shadow-md py-2 px-3 placeholder:text-black w-full">
                          <option disabled selected>
                            Please let us know the reason for your cancellation
                            request.
                          </option>
                          <option>Miscellaneous</option>
                          <option>Unconfirmed Plan</option>
                          <option>Pricing Issue</option>
                          <option>Bad Review</option>
                        </select>
                        {/* <div className="relative  my-2 ">
                          <input
                            className="text-lg  bg-white shadow-md py-2 px-3 placeholder:text-black w-full"
                            type="text"
                            name=""
                            id=""
                            placeholder="Lorem Ipsum is simply dummy text."
                          />
                          <svg
                            className="absolute top-4 cursor-pointer right-3"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none">
                            <path
                              d="M4.33337 7.0239L7.02387 9.66652M7.02387 9.66652L9.66648 6.97601M7.02387 9.66652L6.97598 4.3334M4.25392 13.0249L9.85369 12.9746C10.9738 12.9645 11.5338 12.9595 11.9596 12.7377C12.3342 12.5425 12.6374 12.2339 12.8258 11.8558C13.0399 11.4261 13.0349 10.866 13.0248 9.74597L12.9745 4.14619C12.9645 3.02613 12.9595 2.4661 12.7376 2.04025C12.5425 1.66567 12.2338 1.36247 11.8558 1.17411C11.426 0.959969 10.866 0.964998 9.74594 0.975056L4.14616 1.02534C3.0261 1.0354 2.46607 1.04043 2.04022 1.26225C1.66563 1.45737 1.36243 1.76606 1.17407 2.14409C0.959937 2.57386 0.964966 3.13389 0.975024 4.25395L1.02531 9.85372C1.03537 10.9738 1.0404 11.5338 1.26222 11.9597C1.45734 12.3342 1.76603 12.6375 2.14406 12.8258C2.57383 13.0399 3.13386 13.0349 4.25392 13.0249Z"
                              stroke="#60A547"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="relative my-2 ">
                          <input
                            className="text-lg bg-white shadow-md py-2 px-3 placeholder:text-black w-full"
                            type="text"
                            name=""
                            id=""
                            placeholder="Lorem Ipsum is simply dummy text."
                          />
                          <svg
                            className="absolute top-4 cursor-pointer right-3"
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 6 6"
                            fill="none">
                            <circle cx="3" cy="3" r="3" fill="#60A547" />
                          </svg>
                        </div>
                        <div className="relative my-2 ">
                          <input
                            className="text-lg bg-white shadow-md py-2 px-3 placeholder:text-black w-full"
                            type="text"
                            name=""
                            id=""
                            placeholder="Lorem Ipsum is simply dummy text."
                          />
                          <svg
                            className="absolute top-4 cursor-pointer right-3"
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 6 6"
                            fill="none">
                            <circle cx="3" cy="3" r="3" fill="#60A547" />
                          </svg>
                        </div> */}
                        <div className="text-center py-4">
                          <button className="bg-[#60A547] text-2xl px-11 py-2 rounded-3xl text-white">
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </TabPanel>

              <TabPanel className="w-full">
                {booking.map(
                  (entry) =>
                    entry.status === "Cancelled" && (
                      <div
                        key={entry._id}
                        className=" rounded-lg shadow-2xl bg-[#FFFFFF] justify-between py-6 my-4 px-3">
                        <div className="flex justify-between">
                          <div className="flex gap-4">
                            <div className="inline-block">
                              <div className="bg-[#60A547] text-xl text-white w-20 h-20 flex items-center justify-center rounded-full font-semibold">
                                <p className="m-0 px-1">{entry.day}</p>
                                <p className="m-0">{entry.month}</p>
                              </div>
                            </div>

                            <div>
                              <h1 className="font-semibold">
                                {entry.location}
                                {entry.distance}
                              </h1>
                              <h1 className="font-semibold">{entry.area}</h1>
                              <p className="text-[#60A547] ">
                                Advanced Paid : Rs. {entry.paid}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h1 className="font-semibold text-end">
                              TRIP ID {entry.tripid}
                            </h1>
                            <p>{entry.from}</p>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </TabPanel>

              <TabPanel className="w-full">
                {booking.map(
                  (entry) =>
                    entry.status === "Completed" && (
                      <div
                        key={entry._id}
                        className=" rounded-lg shadow-2xl bg-[#FFFFFF] justify-between py-6 my-4 px-3">
                        <div className="flex justify-between">
                          <div className="flex gap-4">
                            <div className="bg-[#60A547] text-white flex items-center rounded-full p-5 text-4xl font-semibold">
                              <FiCheckCircle />
                            </div>
                            <div>
                              <h1 className="font-semibold">
                                {entry.location}
                                {entry.distance}
                              </h1>
                              <h1 className="font-semibold">{entry.area}</h1>
                              <p className="text-[#60A547] ">
                                Advanced Paid : Rs. {entry.paid}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h1 className="font-semibold text-end">
                              TRIP ID {entry.tripid}
                            </h1>
                            <p>{entry.from}</p>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Bookings;
