import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/purple-cupcakes.png";
import useWindowDimensions from "./ResizeWindow";
import Hamburger from "hamburger-react";

function Navigation({ children }) {
  const [isOpen, setOpen] = useState(false);
  const { width } = useWindowDimensions();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);


  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="menu-wrapper" ref={wrapperRef} >
        {(isOpen || width > 785 ) && (
          <ul className="menu-list">
            <Link onClick={()=>setOpen(false)} style={{ textDecoration: "none" }} to={`/${"cupcake"}`}>
              Капкейки
            </Link>
            <Link onClick={()=>setOpen(false)} style={{ textDecoration: "none" }} to={`/${"macarons"}`}>
              Макаруни
            </Link>
            <Link onClick={()=>setOpen(false)} style={{ textDecoration: "none" }} to={"/price"}>
              Доставка і оплата
            </Link>
          </ul>
        )}
        {width < 785 && (
          <Hamburger toggled={isOpen} toggle={setOpen} color={isOpen ? "white" : "black"} />
        )}
        </div>
        <Link className="navbar-brand" to="/">
          <img
            className="img-fluid rounded"
            src={Logo}
            width={200}
            height={100}
            alt="Logo"
          />
        </Link>
      </div>
      {children}
    </>
  );
}

export default Navigation;
