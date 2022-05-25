import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../src/firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth);
    navigate("/login");
  };

  const menuitems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/portfolio">My Portfolio</Link>
      </li>

      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}

      {user ? (
        <li>
          <button class="btn btn-outline btn-primary" onClick={handleSignout}>
            Signout
          </button>
        </li>
      ) : (
        <li>
          <Link to="login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div class="navbar bg-base-100 px-20">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuitems}
          </ul>
        </div>

        <Link to="/" class="text-3xl">
          Future Tools
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{menuitems}</ul>
      </div>
      <div className="navbar-end">
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Dashboard menu
        </label>
      </div>
    </div>
  );
};

export default Header;
