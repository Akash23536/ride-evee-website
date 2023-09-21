import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiCalendar, BiMap } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import useSuggestions from "../../hooks/useSuggestions";

const Local = () => {
  const { handleSubmit, register, setValue } = useForm();
  const [startDate, setStartDate] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [suggestions] = useSuggestions();

  const localSubmit = (data) => {
    console.log("Form data", data);
  };

  return (
    <div className="w-full normal-case">
      <div className="px-3 pt-2">
        <form onSubmit={handleSubmit(localSubmit)}>
          <div className="p-4 w-full flex justify-between  gap-48">
            <div className="relative">
              <label
                htmlFor="from"
                className="normal-case ps-2 font-bold text-xl">
                From
              </label>
              <input
                type="text"
                id="from"
                {...register("from")}
                className="w-full border-b p-2"
                placeholder="Start typing city"
                onFocus={() => setIsFocus(true)}
                required
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
              <BiMap className="absolute text-3xl top-8 right-0" />
              {isFocus && (
                <div
                  className="shadow-lg absolute bg-white w-full"
                  onMouseEnter={() => {
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                  }}>
                  {suggestions
                    .filter((suggestion) =>
                      suggestion
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    )
                    .slice(0, 6)
                    .map((suggestion, index) => {
                      const isMatch = suggestion
                        .toLowerCase()
                        .includes(inputValue.toLowerCase());

                      return (
                        <div key={index}>
                          {isMatch && (
                            <div
                              className="p-2 hover:bg-gray-200 cursor-pointer"
                              onClick={() => {
                                setInputValue(suggestion);
                                setValue("from", suggestion); // Set the value using setValue
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
                className="normal-case ps-2 font-bold text-xl">
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
                className="w-[300px] border-b p-2 "
                minDate={new Date()}
                closeOnScroll={true}
                placeholderText="Select a date"
                required
              />
              <BiCalendar className="absolute text-3xl top-8 right-2" />
            </div>

            <div className=" relative">
              <label
                htmlFor="pickUpTime"
                className="normal-case ps-2 font-bold text-xl">
                Pick Up Time
              </label>
              <select
                id="pickUpTime"
                {...register("pickUpTime", { required: true })}
                className="w-full border-b pe-10 p-2 appearance-none"
                placeholder="Start typing Time"
                required>
                <option value="">Select Time</option>
                <option value="">Select Time</option>
                <option value="12.00 AM">12:00 AM</option>
                <option value="12.15 AM">12:15 AM</option>
                <option value="12.30 AM">12:30 AM</option>
                <option value="12.45 AM">12:45 AM</option>
                <option value="1.00 AM">1:00 AM</option>
                <option value="01:15 AM">1:15 AM</option>
                <option value="01:30 AM">1:30 AM</option>
                <option value="01:45 AM">1:45 AM</option>
                <option value="02:00 AM">2:00 AM</option>
                <option value="02:15 AM">2:15 AM</option>
                <option value="02:30 AM">2:30 AM</option>
                <option value="02:45 AM">2:45 AM</option>
                <option value="03:00 AM">3:00 AM</option>
                <option value="03:15 AM">3:15 AM</option>
                <option value="03:45 AM">3:45 AM</option>
                <option value="04:00 AM">4:00 AM</option>
                <option value="04:15 AM">4:15 AM</option>
                <option value="04:30 AM">4:30 AM</option>
                <option value="04:45 AM">4:45 AM</option>
                <option value="05:00 AM">5:00 AM</option>
                <option value="05:00 AM">5:00 AM</option>
                <option value="05:15 AM">5:15 AM</option>
                <option value="05:30 AM">5:30 AM</option>
                <option value="05:45 AM">5:45 AM</option>
                <option value="06:00 AM">6:00 AM</option>
                <option value="06:15 AM">6:15 AM</option>
                <option value="06:30 AM">6:30 AM</option>
                <option value="06:45 AM">6:45 AM</option>
                <option value="07:00 AM">7:00 AM</option>
                <option value="07:15 AM">7:15 AM</option>
                <option value="07:30 AM">7:30 AM</option>
                <option value="07:45 AM">7:45 AM</option>
                <option value="08:00 AM">8:00 AM</option>
                <option value="08:15 AM">8:15 AM</option>
                <option value="08:30 AM">8:30 AM</option>
                <option value="08:45 AM">8:45 AM</option>
                <option value="09:00 AM">9:00 AM</option>
                <option value="09:15 AM">9:15 AM</option>
                <option value="09:30 AM">9:30 AM</option>
                <option value="09:45 AM">9:45 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="10:15 AM">10:15 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="10:45 AM">10:45 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="11:15 AM">11:15 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="11:45 AM">11:45 AM</option>
                <option value="12.00 PM">12:00 PM</option>
                <option value="12.15 PM">12:15 PM</option>
                <option value="12.30 PM">12:30 PM</option>
                <option value="12.45 PM">12:45 PM</option>
                <option value="1.00 PM">1:00 PM</option>
                <option value="01:15 PM">1:15 PM</option>
                <option value="01:30 PM">1:30 PM</option>
                <option value="01:45 PM">1:45 PM</option>
                <option value="02:00 PM">2:00 PM</option>
                <option value="02:15 PM">2:15 PM</option>
                <option value="02:30 PM">2:30 PM</option>
                <option value="02:45 PM">2:45 PM</option>
                <option value="03:00 PM">3:00 PM</option>
                <option value="03:15 PM">3:15 PM</option>
                <option value="03:45 PM">3:45 PM</option>
                <option value="04:00 PM">4:00 PM</option>
                <option value="04:15 PM">4:15 PM</option>
                <option value="04:30 PM">4:30 PM</option>
                <option value="04:45 PM">4:45 PM</option>
                <option value="05:00 PM">5:00 PM</option>
                <option value="05:00 PM">5:00 PM</option>
                <option value="05:15 PM">5:15 PM</option>
                <option value="05:30 PM">5:30 PM</option>
                <option value="05:45 PM">5:45 PM</option>
                <option value="06:00 PM">6:00 PM</option>
                <option value="06:15 PM">6:15 PM</option>
                <option value="06:30 PM">6:30 PM</option>
                <option value="06:45 PM">6:45 PM</option>
                <option value="07:00 PM">7:00 PM</option>
                <option value="07:15 PM">7:15 PM</option>
                <option value="07:30 PM">7:30 PM</option>
                <option value="07:45 PM">7:45 PM</option>
                <option value="08:00 PM">8:00 PM</option>
                <option value="08:15 PM">8:15 PM</option>
                <option value="08:30 PM">8:30 PM</option>
                <option value="08:45 PM">8:45 PM</option>
                <option value="09:00 PM">9:00 PM</option>
                <option value="09:15 PM">9:15 PM</option>
                <option value="09:30 PM">9:30 PM</option>
                <option value="09:45 PM">9:45 PM</option>
                <option value="10:00 PM">10:00 PM</option>
                <option value="10:15 PM">10:15 PM</option>
                <option value="10:30 PM">10:30 PM</option>
                <option value="10:45 PM">10:45 PM</option>
                <option value="11:00 PM">11:00 PM</option>
                <option value="11:15 PM">11:15 PM</option>
                <option value="11:30 PM">11:30 AM</option>
                <option value="11:45 PM">11:45 PM</option>
              </select>
              <AiOutlineClockCircle className="absolute text-3xl top-8 right-0" />
            </div>
          </div>
          <div className="flex justify-center pb-5">
            <button
              type="submit"
              className="bg-[#60a547] text-white py-2 px-4 rounded">
              Explore Cabs
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Local;
