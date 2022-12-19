import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/purple-cupcakes.png";
import { useRecoilState } from "recoil";
import { keyNavigate } from "../atom/store";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import useWindowDimensions from "./ResizeWindow";
import { useSetRecoilState } from "recoil";

const items = [
  {
    label: (
      <Link style={{ textDecoration: "none" }} to={`/${"cupcake"}`}>
        Капкейки
      </Link>
    ),
    key: "cupcake",
  },
  {
    label: (
      <Link style={{ textDecoration: "none" }} to={`/${"macarons"}`}>
        Макаруни
      </Link>
    ),
    key: "macarons",
  },

  {
    label: (
      <Link style={{ textDecoration: "none" }} to={"/price"}>
        Доставка і оплата
      </Link>
    ),
    key: "price",
  },
];

function Navigation({ children }) {
  const [current, setCurrent] = useRecoilState(keyNavigate);
  const [collapsed, setCollapsed] = useState(false);
  const { width } = useWindowDimensions();
  const setTodoList = useSetRecoilState(keyNavigate);

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="menu-wrapper">
          <Button
            type="default"
            onClick={() => setCollapsed(!collapsed)}
            style={{
              marginBottom: '16px',
              display: width <= 800 ? "block" : "none",
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          {(collapsed || width >= 800) && (
            <Menu
              style={{ background: "none", borderBottom: "unset", width: width<=800 ? "400px" : "650px"}}
              onClick={onClick}
              selectedKeys={[current]}
              mode={width <= 800 ? "inline" : "horizontal"}
              items={items}
            />
          )}
        </div>
        <Link className="navbar-brand" to="/"  onClick={() => setTodoList("gallery")}>
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
