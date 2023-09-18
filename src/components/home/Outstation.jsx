import React, { useRef, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiCalendar, BiMap } from "react-icons/bi";
import { AiOutlineClockCircle, AiOutlineSwap } from "react-icons/ai";

const Outstation = () => {
  const { handleSubmit, register, setValue, getValues } = useForm();
  const [startDate, setStartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [toInputValue, setToInputValue] = useState("");
  const [toIsFocus, setToIsFocus] = useState(false);

  const suggestions = [
    "New York",
    "Los Angeles",
    "Chicago",
    "San Francisco",
    "Seattle",
  ];

  const handleTabSelect = (index) => {
    setActiveIndex(index);
  };

  const oneWaySubmit = (data) => {
    console.log("Form data:", data);
  };
  const RoundTripSubmit = (data) => {
    console.log("Form data:", data);
  };
  const handleSwap = () => {
    const fromValue = getValues("from");
    const toValue = getValues("to");
    setValue("from", toValue);
    setValue("to", fromValue);
  };

  return (
    <div className="">
      <Tabs selectedIndex={activeIndex} onSelect={handleTabSelect}>
        <TabList className="flex pt-2 gap-8 justify-center">
          <Tab
            className={`no-underline text-[#60A547] cursor-pointer py-3 px-7 text-xl 
                        ${activeIndex === 0 ? "active-tab" : "unactive-tab"}`}>
            ONE WAY
          </Tab>
          <Tab
            className={`no-underline text-[#60A547] cursor-pointer py-3 px-7 text-xl 
                        ${activeIndex === 1 ? "active-tab" : "unactive-tab"}`}>
            ROUND TRIP
          </Tab>
        </TabList>

        <TabPanel className="w-full">
          <div className=" px-3 pt-2">
            <form onSubmit={handleSubmit(oneWaySubmit)}>
              <div className="p-4 flex gap-4">
                <div className="relative">
                  <label htmlFor="from" className="normal-case ps-2 font-bold">
                    From
                  </label>
                  <input
                    type="text"
                    id="from"
                    {...register("from")}
                    className="w-full border-b p-2"
                    placeholder="Start typing city"
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => {
                      if (!isHovered) {
                        setIsFocus(false);
                      }
                    }}
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      setValue("from", e.target.value); // Set the value using setValue
                    }}
                    ref={inputRef}
                  />
                  <BiMap className="absolute text-3xl top-10 right-0" />
                  {isFocus && (
                    <div
                      className="shadow-lg absolute bg-white w-full"
                      onMouseEnter={() => {
                        setIsHovered(true);
                      }}
                      onMouseLeave={() => {
                        setIsHovered(false);
                      }}>
                      {suggestions.map((suggestion, index) => {
                        const isMatch =
                          suggestion
                            .toLowerCase()
                            .indexOf(inputValue.toLowerCase()) > -1;
                        return (
                          <div key={index}>
                            {isMatch && (
                              <div
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => {
                                  setInputValue(suggestion);
                                  setValue("from", suggestion);
                                  inputRef.current.focus();
                                }}>
                                {suggestion}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <AiOutlineSwap
                  onClick={handleSwap}
                  className="text-4xl cursor-pointer my-auto"
                />
                <div className=" relative">
                  <label htmlFor="to" className="normal-case ps-2 font-bold">
                    To
                  </label>
                  <input
                    type="text"
                    id="to"
                    {...register("to")}
                    className="w-full border-b p-2"
                    placeholder="Start typing trip type"
                    onFocus={() => setToIsFocus(true)}
                    onBlur={() => {
                      if (!isHovered) {
                        setToIsFocus(false);
                      }
                    }}
                    value={toInputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      setValue("to", e.target.value); // Set the value using setValue
                    }}
                    ref={inputRef}
                  />
                  <BiMap className="absolute text-3xl top-10 right-0" />
                  {toIsFocus && (
                    <div
                      className="shadow-lg absolute bg-white w-full z-50"
                      onMouseEnter={() => {
                        setIsHovered(true);
                      }}
                      onMouseLeave={() => {
                        setIsHovered(false);
                      }}>
                      {suggestions.map((suggestion, index) => {
                        const isMatch =
                          suggestion
                            .toLowerCase()
                            .indexOf(toInputValue.toLowerCase()) > -1;
                        return (
                          <div key={index}>
                            {isMatch && (
                              <div
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => {
                                  setToInputValue(suggestion);
                                  setValue("to", suggestion);
                                  inputRef.current.focus();
                                }}>
                                {suggestion}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="relative">
                  <label
                    htmlFor="pickUpDate"
                    className="normal-case ps-2 font-bold">
                    Pick Up Date
                  </label>
                  <br />
                  <DatePicker
                    id="pickUpDate"
                    {...register("pickUpDate")}
                    selected={startDate} // Set the selected date
                    onChange={(date) => {
                      setStartDate(date);
                      setValue("pickUpDate", date); // Set the value using setValue
                    }} // Handle date change and update the state
                    className="w-full border-b p-2 "
                    minDate={new Date()}
                    closeOnScroll={true}
                    placeholderText="Select a date"
                  />
                  <BiCalendar className="absolute text-3xl top-10 right-0" />
                </div>
                <div className=" relative">
                  <label
                    htmlFor="pickUpTime"
                    className="normal-case ps-2 font-bold">
                    Pick Up At
                  </label>
                  <select
                    id="pickUpTime"
                    {...register("pickUpTime", { required: true })}
                    className="w-full border-b p-2 appearance-none"
                    placeholder="Start typing Time"
                    required>
                    <option value="">Select Time</option>
                    <option value="00:00">12:00 AM</option>
                    <option value="00:15">12:15 AM</option>
                    <option value="00:30">12:30 AM</option>
                    <option value="00:45">12:45 AM</option>
                    <option value="01:00">1:00 AM</option>
                    <option value="01:15">1:15 AM</option>
                    <option value="01:30">1:30 AM</option>
                    <option value="01:45">1:45 AM</option>
                    <option value="02:00">2:00 AM</option>
                    <option value="02:15">2:15 AM</option>
                    <option value="02:30">2:30 AM</option>
                    <option value="02:45">2:45 AM</option>
                    <option value="03:00">3:00 AM</option>
                    <option value="03:15">3:15 AM</option>
                    <option value="03:45">3:45 AM</option>
                    <option value="04:00">4:00 AM</option>
                    <option value="04:15">4:15 AM</option>
                    <option value="04:30">4:30 AM</option>
                    <option value="04:45">4:45 AM</option>
                    <option value="05:00">5:00 AM</option>
                    <option value="05:00">5:00 AM</option>
                    <option value="05:15">5:15 AM</option>
                    <option value="05:30">5:30 AM</option>
                    <option value="05:45">5:45 AM</option>
                    <option value="06:00">6:00 AM</option>
                    <option value="06:15">6:15 AM</option>
                    <option value="06:30">6:30 AM</option>
                    <option value="06:45">6:45 AM</option>
                    <option value="07:00">7:00 AM</option>
                    <option value="07:15">7:15 AM</option>
                    <option value="07:30">7:30 AM</option>
                    <option value="07:45">7:45 AM</option>
                    <option value="08:00">8:00 AM</option>
                    <option value="08:15">8:15 AM</option>
                    <option value="08:30">8:30 AM</option>
                    <option value="08:45">8:45 AM</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="09:15">9:15 AM</option>
                    <option value="09:30">9:30 AM</option>
                    <option value="09:45">9:45 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="10:15">10:15 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="10:45">10:45 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:15">11:15 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="11:45">11:45 AM</option>
                    <option value="11:45">12:00 PM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:15">12:15 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="12:45">12:45 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:15">1:15 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="13:45">1:45 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="14:15">2:15 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="14:45">2:45 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="15:15">3:15 PM</option>
                    <option value="15:30">3:30 PM</option>
                    <option value="15:45">3:45 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="16:15">4:15 PM</option>
                    <option value="16:30">4:30 PM</option>
                    <option value="16:45">4:45 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:15">5:15 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="17:45">5:45 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:15">6:15 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="18:45">6:45 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:15">7:15 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="19:45">7:45 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:15">8:15 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="20:45">8:45 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:15">9:15 PM</option>
                    <option value="21:30">9:30 PM</option>
                    <option value="21:45">9:45 PM</option>
                    <option value="22:00">10:00 PM</option>
                    <option value="22:15">10:15 PM</option>
                    <option value="22:30">10:30 PM</option>
                    <option value="22:45">10:45 PM</option>
                    <option value="23:00">11:00 PM</option>
                    <option value="23:15">11:15 PM</option>
                    <option value="23:30">11:30 PM</option>
                    <option value="23:45">11:45 PM</option>
                  </select>
                  <AiOutlineClockCircle className="absolute text-3xl top-10 right-0" />
                </div>
              </div>
              <div className="flex justify-center pb-2">
                <button
                  type="submit"
                  className="bg-[#60a547]  text-white py-2 px-4 rounded">
                  Explore Cabs
                </button>
              </div>
            </form>
          </div>
        </TabPanel>

        <TabPanel className="w-full">
          <div className=" pt-2">
            <form onSubmit={handleSubmit(RoundTripSubmit)}>
              <div className="p-4 flex gap-3">
                <div className="relative">
                  <label htmlFor="from" className="normal-case ps-2 font-bold">
                    From
                  </label>
                  <input
                    type="text"
                    id="from"
                    {...register("from")}
                    className="w-full border-b p-2"
                    placeholder="Start typing city"
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => {
                      if (!isHovered) {
                        setIsFocus(false);
                      }
                    }}
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      setValue("from", e.target.value); // Set the value using setValue
                    }}
                    ref={inputRef}
                  />
                  <BiMap className="absolute text-3xl top-10 right-0" />
                  {isFocus && (
                    <div
                      className="shadow-lg absolute bg-white w-full"
                      onMouseEnter={() => {
                        setIsHovered(true);
                      }}
                      onMouseLeave={() => {
                        setIsHovered(false);
                      }}>
                      {suggestions.map((suggestion, index) => {
                        const isMatch =
                          suggestion
                            .toLowerCase()
                            .indexOf(inputValue.toLowerCase()) > -1;
                        return (
                          <div key={index}>
                            {isMatch && (
                              <div
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => {
                                  setInputValue(suggestion);
                                  setValue("from", suggestion);
                                  inputRef.current.focus();
                                }}>
                                {suggestion}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <AiOutlineSwap
                  onClick={handleSwap}
                  className="text-4xl cursor-pointer my-auto"
                />
                <div className=" relative">
                  <label htmlFor="to" className="normal-case ps-2 font-bold">
                    To
                  </label>
                  <input
                    type="text"
                    id="to"
                    {...register("to")}
                    className="w-full border-b p-2"
                    placeholder="Start typing trip type"
                    onFocus={() => setToIsFocus(true)}
                    onBlur={() => {
                      if (!isHovered) {
                        setToIsFocus(false);
                      }
                    }}
                    value={toInputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      setValue("to", e.target.value); // Set the value using setValue
                    }}
                    ref={inputRef}
                  />
                  <BiMap className="absolute text-3xl top-10 right-0" />
                  {toIsFocus && (
                    <div
                      className="shadow-lg absolute bg-white w-full z-50"
                      onMouseEnter={() => {
                        setIsHovered(true);
                      }}
                      onMouseLeave={() => {
                        setIsHovered(false);
                      }}>
                      {suggestions.map((suggestion, index) => {
                        const isMatch =
                          suggestion
                            .toLowerCase()
                            .indexOf(toInputValue.toLowerCase()) > -1;
                        return (
                          <div key={index}>
                            {isMatch && (
                              <div
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => {
                                  setToInputValue(suggestion);
                                  setValue("to", suggestion);
                                  inputRef.current.focus();
                                }}>
                                {suggestion}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="relative">
                  <label
                    htmlFor="pickUpDate"
                    className="normal-case ps-2 font-bold">
                    Pick Up Date
                  </label>
                  <br />
                  <DatePicker
                    id="pickUpDate"
                    {...register("pickUpDate")}
                    selected={startDate} // Set the selected date
                    onChange={(date) => {
                      setStartDate(date);
                      setValue("pickUpDate", date); // Set the value using setValue
                    }} // Handle date change and update the state
                    className="w-full border-b p-2 "
                    minDate={new Date()}
                    closeOnScroll={true}
                    placeholderText="Select a date"
                  />
                  <BiCalendar className="absolute text-3xl top-10 right-0" />
                </div>
                <div className="relative">
                  <label
                    htmlFor="pickUpDate"
                    className="normal-case ps-2 font-bold">
                    Return Date
                  </label>

                  <DatePicker
                    id="returnDate"
                    {...register("returnDate")}
                    selected={returnDate} // Set the selected date
                    onChange={(date) => {
                      setReturnDate(date);
                      setValue("returnDate", date); // Set the value using setValue
                    }} // Handle date change and update the state
                    className="w-full border-b p-2 "
                    minDate={new Date()}
                    closeOnScroll={true}
                    placeholderText="Select a date"
                  />

                  <BiCalendar className="absolute text-3xl top-10 right-10" />
                </div>
                <div className=" relative">
                  <label
                    htmlFor="pickUpTime"
                    className="normal-case ps-2 font-bold">
                    Pick Up At
                  </label>
                  <select
                    id="pickUpTime"
                    {...register("pickUpTime", { required: true })}
                    className="w-full border-b p-2 appearance-none"
                    placeholder="Start typing Time"
                    required>
                    <option value="">Select Time</option>
                    <option value="00:00">12:00 AM</option>
                    <option value="00:15">12:15 AM</option>
                    <option value="00:30">12:30 AM</option>
                    <option value="00:45">12:45 AM</option>
                    <option value="01:00">1:00 AM</option>
                    <option value="01:15">1:15 AM</option>
                    <option value="01:30">1:30 AM</option>
                    <option value="01:45">1:45 AM</option>
                    <option value="02:00">2:00 AM</option>
                    <option value="02:15">2:15 AM</option>
                    <option value="02:30">2:30 AM</option>
                    <option value="02:45">2:45 AM</option>
                    <option value="03:00">3:00 AM</option>
                    <option value="03:15">3:15 AM</option>
                    <option value="03:45">3:45 AM</option>
                    <option value="04:00">4:00 AM</option>
                    <option value="04:15">4:15 AM</option>
                    <option value="04:30">4:30 AM</option>
                    <option value="04:45">4:45 AM</option>
                    <option value="05:00">5:00 AM</option>
                    <option value="05:00">5:00 AM</option>
                    <option value="05:15">5:15 AM</option>
                    <option value="05:30">5:30 AM</option>
                    <option value="05:45">5:45 AM</option>
                    <option value="06:00">6:00 AM</option>
                    <option value="06:15">6:15 AM</option>
                    <option value="06:30">6:30 AM</option>
                    <option value="06:45">6:45 AM</option>
                    <option value="07:00">7:00 AM</option>
                    <option value="07:15">7:15 AM</option>
                    <option value="07:30">7:30 AM</option>
                    <option value="07:45">7:45 AM</option>
                    <option value="08:00">8:00 AM</option>
                    <option value="08:15">8:15 AM</option>
                    <option value="08:30">8:30 AM</option>
                    <option value="08:45">8:45 AM</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="09:15">9:15 AM</option>
                    <option value="09:30">9:30 AM</option>
                    <option value="09:45">9:45 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="10:15">10:15 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="10:45">10:45 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:15">11:15 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="11:45">11:45 AM</option>
                    <option value="11:45">12:00 PM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:15">12:15 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="12:45">12:45 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:15">1:15 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="13:45">1:45 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="14:15">2:15 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="14:45">2:45 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="15:15">3:15 PM</option>
                    <option value="15:30">3:30 PM</option>
                    <option value="15:45">3:45 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="16:15">4:15 PM</option>
                    <option value="16:30">4:30 PM</option>
                    <option value="16:45">4:45 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:15">5:15 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="17:45">5:45 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:15">6:15 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="18:45">6:45 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:15">7:15 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="19:45">7:45 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:15">8:15 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="20:45">8:45 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:15">9:15 PM</option>
                    <option value="21:30">9:30 PM</option>
                    <option value="21:45">9:45 PM</option>
                    <option value="22:00">10:00 PM</option>
                    <option value="22:15">10:15 PM</option>
                    <option value="22:30">10:30 PM</option>
                    <option value="22:45">10:45 PM</option>
                    <option value="23:00">11:00 PM</option>
                    <option value="23:15">11:15 PM</option>
                    <option value="23:30">11:30 PM</option>
                    <option value="23:45">11:45 PM</option>
                  </select>
                  <AiOutlineClockCircle className="absolute text-3xl top-10 right-0" />
                </div>
              </div>
              <div className="flex justify-center py-2">
                <button
                  type="submit"
                  className="bg-[#60a547]  text-white py-2 px-4 rounded">
                  Explore Cabs
                </button>
              </div>
            </form>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Outstation;
