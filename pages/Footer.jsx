import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/purple-cupcakes.png";
import { useSetRecoilState } from "recoil";
import { keyNavigate } from "../atom/store";
import { AiFillFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

function Footer({ children }) {
  const setTodoList = useSetRecoilState(keyNavigate);
  return (
    <div className="footer">
      {children}
      <Link className="navbar-brand" to="/">
        <img
          className="img-fluid rounded"
          style={{ backgroundColor: "white" }}
          src={Logo}
          width={200}
          height={100}
          alt="Logo"
        />
      </Link>
      <div className="footerText">
        <p>
          {" "}
          <Link
            className="linkContact"
            to={"/contact"}
            target="_self"
            onClick={() => setTodoList("contact")}
          >
            Контакти
          </Link>
          <span>
            {" "}
            <a href="https://www.instagram.com/yuliia_cupcakes">
              <FiInstagram />
            </a>
            <a href="https://www.facebook.com/yuliashyshka21">
              <AiFillFacebook />
            </a>
          </span>
        </p>
        <Link className="linkContact" to={"/myself"} target="_self">
          Про мене
        </Link>
      </div>
    </div>
  );
}

export default Footer;
