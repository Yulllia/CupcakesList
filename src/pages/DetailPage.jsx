import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useImage } from "../components/Image";
import { Image } from "antd";
import DetailPhoto from "./DetailPhoto";

function DetailPage() {
  const [cupcakeItem, setCupcakeItem] = useState([]);
  const [visible, setVisible] = useState(false);
  let { id, item } = useParams();
  const { loading, image } = useImage(cupcakeItem.imageName);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/${item}/${id}`)
      .then((res) => res.json())
      .then((data) => setCupcakeItem(data))
      .catch((err) => console.log(err));
  }, [id, item]);

  if (loading) {
    return <Spin />;
  }

  const renderSeveralPhoto = (source) => {
    return source.map((item, index) => {
      return <DetailPhoto item={item} key={index} />;
    });
  };

  return (
    <>
      <div className="card mx-auto mt-5 card-size bodyCard">
        {image && (
          <>
            <Image
              preview={{ visible: false }}
              src={image}
              onClick={() => setVisible(true)}
            />
            <div style={{ display: "none" }}>
              <Image.PreviewGroup
                preview={{
                  visible,
                  onVisibleChange: (vis) => setVisible(vis),
                }}
              >
                {renderSeveralPhoto(cupcakeItem.imageList)}
              </Image.PreviewGroup>
            </div>
          </>
        )}
        <div className="card-body">
          <h5 className="card-title mb-3">{cupcakeItem.title}</h5>
          <p className="card-text">
            <span className="boldColor">Інгрідієнти: </span>
            {cupcakeItem.ingridient}
          </p>
          <p className="card-text">
            <span className="boldColor">Склад: </span> {cupcakeItem.contains}
          </p>
          {item !== "macarons" && (
            <p className="card-text">
              <span className="boldColor">Начинки на ваш вибір: </span>
              {cupcakeItem.containChoose}
            </p>
          )}
          <p className="card-text">
            <span className="boldColor">Ціна: </span>
            {cupcakeItem.price}
          </p>
          <Link to={`/${item}`} className="btn btn-primary" replace>
            Повернутися назад
          </Link>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
