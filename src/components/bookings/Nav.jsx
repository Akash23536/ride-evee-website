import { useState } from "react";
import logo from "../../assets/logo.png";
import navicon from "../../assets/nav.png";
import ModalProfile from "./ModalProfile";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="w-full">
      <header className="bg-white">
        <nav className="flex flex-row justify-between items-center w-[99%]">
          <a
            href="/"
            className="pl-[32px] justify-start items-start laptop:flex">
            <img className="w-[150px] m-4" src={logo} alt="" />
          </a>

          <div className="relative">
            <img className="w-[250px]" src={navicon} alt="" />
            <p className="absolute top-2 font-bold text-white  right-4">
              +91876578984
            </p>
          </div>

          <div className=" bg-white min-h-fit xl:min-h-[8vh] flex flex-row">
            <ul className="flex flex-row items-center md-items-center justify-end md:gap-[2vw] gap-[2vw]">
              <li className="text-center font-bold justify-center items-center">
                <a href="/SignUp">Vendor Sign Up</a>
              </li>
              <li className="p-2 h-[38px] font-bold text-white bg-[#60A547] rounded-[9px]">
                <a href="/SignUp">Customer Sign In</a>
              </li>
              <button className="items-end">
                {!open ? (
                  <svg
                    onClick={handleOpen}
                    xmlns="http://www.w3.org/2000/svg"
                    width="78"
                    height="78"
                    viewBox="0 0 78 78"
                    fill="none">
                    <g filter="url(#filter0_d_3_188)">
                      <circle cx="39" cy="35" r="17" fill="#38B000" />
                    </g>
                    <path
                      d="M31 35H46M31 30H46M36 40H46"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    onClick={handleClose}
                    xmlns="http://www.w3.org/2000/svg"
                    width="78"
                    height="78"
                    viewBox="0 0 78 78"
                    fill="none">
                    <g filter="url(#filter0_d_3_216)">
                      <circle cx="39" cy="35" r="17" fill="#38B000" />
                    </g>
                    <path
                      d="M42 32L36 38M36 32L42 38M49 35C49 40.5228 44.5228 45 39 45C33.4772 45 29 40.5228 29 35C29 29.4772 33.4772 25 39 25C44.5228 25 49 29.4772 49 35Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <ModalProfile open={open} setOpen={setOpen} />
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
