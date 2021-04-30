import { Link, NavLink } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import styled from "styled-components";
import {
  FaSmile,
  FaRegSmile,
  FaBook,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";
import { HiHome, HiOutlineHome, HiCog, HiOutlineCog } from "react-icons/hi";
import {
  AiFillHome,
  AiOutlineHome,
  AiFillSmile,
  AiOutlineSmile,
} from "react-icons/ai";
import { BsPersonFill, BsPerson } from "react-icons/bs";
import { BiSmile } from "react-icons/bi";
import { RiSearchLine, RiSearch2Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { ImSearch, ImBook, ImBooks } from "react-icons/im";

const Navbar = styled.nav`
  ul {
    z-index: 10;
    background-color: white;
    min-height: 8vh;
    max-height: 8vh;
    bottom: 0;
    left: 0;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  li {
    list-style: none;
    padding: 5px;
    color: black;
  }
  li:active,
  li:focus {
    outline: none;
    background: none;
  }
  .nav-tab > * {
    color: black;
    transition: all 0.3s ease;
  }
  .nav-tab-active > * {
    color: orange;
  }
`;

const Navigation = () => {
  return (
    <Navbar>
      <ul>
        <li>
          <NavLink
            to={ROUTES.HOME}
            className="nav-tab"
            activeClassName="nav-tab-active"
          >
            <AiFillHome size="2em" title="home" />
            {/* <HiHome size="2em" title="home" />
            <AiOutlineHome size="2em" title="home" />
            <HiOutlineHome size="2em" title="home" /> */}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ROUTES.SEARCH}
            className="nav-tab"
            activeClassName="nav-tab-active"
          >
            {/* <FiSearch size="2em" title="search" />
            <RiSearch2Line size="2em" title="search" /> */}
            <RiSearchLine size="2em" title="search" />
            {/* <ImSearch size="2em" title="search" /> */}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ROUTES.YOU}
            className="nav-tab"
            activeClassName="nav-tab-active"
          >
            <ImBook size="1.8em" title="profile" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ROUTES.SETTINGS}
            className="nav-tab"
            activeClassName="nav-tab-active"
          >
            {/* <HiCog size="2em" title="settings" /> */}
            <BsPersonFill size="2.1em" title="profile" />
          </NavLink>
        </li>
      </ul>
    </Navbar>
  );
};

export default Navigation;
