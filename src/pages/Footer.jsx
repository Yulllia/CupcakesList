import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/icon-logo.svg";
import { FiInstagram } from "react-icons/fi";
import { MdPermContactCalendar } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { Tooltip } from "antd";

function Footer() {
  return (
    <div className="footer">
      <Tooltip title="Головна сторінка" color="purple">
        <Link to="/">
          <Logo className="logo-color"/>
        </Link>
      </Tooltip>
      <Tooltip title="Про мене" color="purple">
        <Link className="linkContact" to={"/contact"} target="_self">
          <MdPermContactCalendar width={40} height={40} />
        </Link>
      </Tooltip>
      <Tooltip title="Інстаграм" color="purple">
        <a href={"https://www.instagram.com/yuliia_cupcakes"}>
          <FiInstagram />
        </a>
      </Tooltip>
      <Tooltip title="Контакти" color="purple">
        <Link className="linkContact" to={"/myself"} target="_self">
          <BsPersonCircle />
        </Link>
      </Tooltip>
    </div>
  );
}

export default Footer;
