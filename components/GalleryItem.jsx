import React from "react";
import { Link } from "react-router-dom";
import { useImage } from "./Image";
import { Spin } from "antd";

function GalleryItem({ item, index, style, itemChoose }) {
  const { loading, image } = useImage(item.imageName);
  if (loading) {
    return <Spin />;
  }
  return (
    <div style={style} className="carouselDesign">
      {image && (
        <Link to={`/${itemChoose}/${index}`}>
          <img
            src={image}
            className="img-fluid carouselItem rounded"
            alt="Capcakes chocolate"
          />
        </Link>
      )}
    </div>
  );
}

export default GalleryItem;
