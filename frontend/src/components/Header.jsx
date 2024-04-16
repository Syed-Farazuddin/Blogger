import React, { useState } from "react";
import { images } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../stores/actions/user";

function Header() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  console.log(userState);
  const logoutHandler = () => {
    dispatch(logout());
  };
  const navItems = [
    { id: 132, name: "Home", type: "link" },
    { id: 138, name: "Articles", type: "link" },
    {
      id: 133,
      name: "Pages",
      type: "dropdown",
      items: ["About us", "Contact us"],
    },
    { id: 134, name: "Pricing", type: "link" },
    { id: 136, name: "FAQ", type: "link" },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownHandler = () => {
    setDropdown((curr) => {
      return !curr;
    });
  };
  const navOpenHandler = () => {
    setOpenMenu((curr) => {
      return !curr;
    });
  };
  return (
    <section className="sticky top-0 left-0 right-0 z-10 bg-white">
      <header className="flex justify-between items-center px-5 mx-auto py-4">
        <div>
          <img src={images.logo} alt="" />
        </div>
        <div
          className="cursor-pointer z-50 md:hidden "
          onClick={navOpenHandler}
        >
          {openMenu ? <AiOutlineClose className="" /> : <AiOutlineMenu />}
        </div>
        <div
          className={`${
            openMenu ? "right-0 " : "-right-full "
          } transition-all duration-300 md:transition-none mt-[60px] md:mt-0 bg-darK-hard text-white md:text-darK-soft md:bg-transparent flex flex-col md:flex-row justify-center md:justify-end w-full md:w-auto fixed top-0 bottom-0 gap-x-9 items-center md:static z-40`}
        >
          <ul className="flex flex-col items-center gap-x-7 gap-y-5 md:flex-row font-semibold md:items-center">
            {navItems.map((item) =>
              item.type === "link" ? (
                <li
                  key={item.id}
                  className="hover:border-b-blue-500 border-b-2 border-transparent"
                >
                  <a href="">{item.name}</a>
                </li>
              ) : (
                <div key={item.id} className="flex items-center flex-col ">
                  <button
                    className="px-4 py-2 flex items-center"
                    onClick={dropdownHandler}
                  >
                    {item.name}
                    <MdKeyboardArrowDown />
                  </button>
                  <div
                    className={`${
                      dropdown ? "block" : "hidden "
                    } lg:hidden transition-all duration-500 pt-4 lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max lg:absolute`}
                  >
                    <ul className="flex flex-col shadow-lg rounded-lg overflow-hidden bg-darK-soft lg:bg-transparent gap-2 text-center">
                      {item.items.map((page) => (
                        <li key={page}>
                          <a
                            href="/"
                            className="hover:bg-darK-hard hover:text-white px-4 py-2 lg:text-darK-soft text-white"
                          >
                            {page}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
            {
              // console.log(userState.user);
              userState.userInfo ? (
                <>
                  <button
                    onClick={logoutHandler}
                    className="text-[#1565D8] border-[2px] font-semibold hover:bg-[#1565D8] hover:text-white transition-all duration-200 border-[#1565D8] px-6 py-2 rounded-full mt-5 md:mt-0"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to={"/login"}
                    className="text-[#1565D8] border-[2px] font-semibold hover:bg-[#1565D8] hover:text-white transition-all duration-200 border-[#1565D8] px-6 py-2 rounded-full mt-5 md:mt-0"
                  >
                    Sign in
                  </Link>
                </>
              )
            }
          </ul>
        </div>
      </header>
    </section>
  );
}

export default Header;
