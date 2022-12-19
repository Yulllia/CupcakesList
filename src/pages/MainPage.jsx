import React from "react";
import { Link } from "react-router-dom";
import Cupcake from "../assets/cupcake.jpg";
import Macarons from "../assets/macarons.jpg";
import { useSetRecoilState } from "recoil";
import { keyNavigate } from "../atom/store";

function MainPage() {
  const setTodoList = useSetRecoilState(keyNavigate);
  return (
    <div className="container-fluid align-self-center main-block">
      <h1 className="row d-flex  justify-content-center text-center">
        Макаруни та капкейки ручної роботи
      </h1>
      <div
        className="row-lg d-md-flex  justify-content-center mt-5"
        style={{ height: "282px" }}
      >
        <div className="col-lg-4 hover-focus cursor-pointer">
          <Link to={`/${"cupcake"}`} onClick={() => setTodoList("cupcake")}>
            <img
              src={Cupcake}
              style={{ height: "100%" }}
              className="rounded-2 cursor-pointer m-3 img-fluid"
              width={400}
              height={250}
              alt="Cupcakes"
            />
          </Link>
        </div>
        <div className="col-lg-4">
          <Link to={`/${"macarons"}`} onClick={() => setTodoList("macarons")}>
            <img
              src={Macarons}
              style={{ height: "100%" }}
              width={400}
              height={250}
              className="rounded-2 cursor-pointer m-3 img-fluid"
              alt="Macarons"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
