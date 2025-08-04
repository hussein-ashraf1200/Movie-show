import React, { useState } from "react";
import { Menu, Search, TicketPlus, X } from "lucide-react";
import { Link, Links } from "react-router-dom";
import { assets } from "../assets/assets";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const closeTab = () => setOpenMenu(false);
  const openTab = () => setOpenMenu(true);

  const { isSignedIn } = useUser();

  return (
    <div>
      <nav
        className="fixed w-full  top-0 left-0 flex z-50 sm:justify-around justify-between
       items-center p-2"
      >
        {/* logo */}
        <Link to="/">
          <img src={assets.logo} alt="logo img" />
        </Link>

        {/* desktop nav */}
        <ul
          className="border  border-[#42576B] rounded-3xl pr-9 pl-9 p-2 md:text-[17px] sm:flex sm:gap-6 gap-2 
        justify-center items-center hidden backdrop-blur-xl"
        >
          <Link to="/" onClick={closeTab}>
            Home
          </Link>
          <Link to="/moveis" onClick={closeTab}>
            Moveis
          </Link>
          <Link to="/" onClick={closeTab}>
            Theaters
          </Link>
          <Link to="/" onClick={closeTab}>
            Releases
          </Link>
          {isSignedIn && (
            <Link to="admin" onClick={closeTab}>
              Dashboard
            </Link>
          )}
        </ul>

        {/* login and mobile menu */}
        <div className="flex justify-center items-center gap-2">
          <div className="hidden sm:block">
            <Search />
          </div>
          {isSignedIn ? (
            <UserButton />
          ) : (
            <SignInButton mode="modal">
              <button
                className="bg-[#D63854] 
      w-[60px] flex justify-center items-center 
      sm:h-10 h-8 sm:w-[100px] p-2 rounded-2xl"
              >
                Login
              </button>
            </SignInButton>
          )}

          <button onClick={openTab} className="sm:hidden">
            <Menu />
          </button>
        </div>
      </nav>

      {/* mobile sidebar menu */}
      <div
        className={`fixed top-0 left-0 w-full h-lvh z-50  backdrop-blur-sm transition-transform duration-500 ease-in-out sm:hidden flex justify-center items-center transform ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={closeTab} className="fixed top-4 right-4">
          <X />
        </button>
        <ul className="flex flex-col items-center justify-center gap-3.5 text-white text-lg">
          <Link to="/" onClick={closeTab}>
            Home
          </Link>
          <Link to="/moveis" onClick={closeTab}>
            Moveis
          </Link>
          <Link to="/theaters" onClick={closeTab}>
            Theaters
          </Link>
          <Link to="/releases" onClick={closeTab}>
            Releases
          </Link>
          {isSignedIn && (
            <Link to="admin" onClick={closeTab}>
              dashboard
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
