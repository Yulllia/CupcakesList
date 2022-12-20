import React, { useEffect, useState } from "react";
import ListCupcakes1 from "../assets/chocolate.jpg";
import Macarons from "../assets/macarons.jpg";
import GalleryItem from "./GalleryItem";
import { Carousel, Spin } from "antd";
import { useLocation } from "react-router-dom";

function Gallery() {
  const [cupcakeList, setCupcakeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();
  const itemChoose = pathname.substring(1);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/${itemChoose}`)
      .then((res) => res.json())
      .then((data) => setCupcakeList(data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, [itemChoose]);

  if (loading) {
    return <Spin />;
  }

  const contentStyle = {
    color: "#fff",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div>
      <h2 className="d-flex justify-content-center">
        Оберіть {itemChoose === "cupcake" ? "капкейки" : "макаруни"} до душі
      </h2>
      <div className="container">
        <Carousel effect="fade" className="mt-5">
          {cupcakeList.map((item, index) => {
            return (
              <GalleryItem
                key={item.id}
                itemChoose={itemChoose}
                item={item}
                index={index}
                style={contentStyle}
              />
            );
          })}
        </Carousel>
      </div>
      <div className="historyDessert container mt-5">
        {itemChoose === "cupcake" ? (
          <div className="textWidth">
            <h4 className="d-flex justify-content-center">
              Історія {itemChoose === "cupcake" ? "капкейків" : "макарун"}
            </h4>
            Капкейки стали чи не найбільш культовим десертом XXI століття. При
            тому, що років їм чимало. Адже симпатичні маленькі тістечка без
            крема з'явилися ще у Римській імперії, хоча загальноєвропейську
            популярність здобули за епохи середньовіччя. Звісно, чимось вони
            відрізнялися від популярних нащадків, але і подібних рис було теж
            чимало. Особливо цей вид випічки прижився в Англії. Селяни готували
            їх у невеличких формах, аби було зручно брати з собою на
            сільськосподарські роботи. Відсутність начинки робила капкейки
            прийнятним смаколиком навіть для найбідніших родин. Але класичного
            рецепту дотримувалися не всі. Деякі господині все ж доповнювали
            тісто солодкою помадкою чи то шматком смаженої цибулі. У 1828 році
            американка Еліза Леслі включила у свою кулінарну книжку рецепт
            приготування ласощів. Поступово солодкі капкейки заполонили домашні
            кухні і кондитерські. Свою назву, за однією з версій, набули завдяки
            тому, що продукти на них вимірювали чашками. Інша ж стверджує, що
            ласощі просто випікали у чашках. На початку капкейки інколи
            називали... цифровими, адже перші рецепти було легко запам'ятати
            завдяки цифрам: одна чашка масла, дві чашки цукру, три чашки
            борошна, чотири яйця, одна чашка молока і чайна ложка соди.
          </div>
        ) : (
          <div className="textWidth">
            <h4 className="d-flex justify-content-center">
              Історія {itemChoose === "cupcake" ? "капкейків" : "макарун"}
            </h4>
            Сьогодні кожна людина знає, що таке макаруни. Але так було не
            завжди. Історія десерту йде корінням в далеке минуле, в часи Марії
            Медічі. Приїхавши до Франції, вона привезла з собою італійського
            кондитера, який дивував своєю майстерністю і орігинальнейшимі
            рецептами. У ХVI столітті це тістечко не було широко відомо навіть у
            Франції, залишаючись доступним тільки для знаті. Потім рецептура
            набула поширення, а місцеві кондитери довели її до досконалості. Так
            макаруни, історія походження говорить про італійські корені, стали
            національним надбанням французів. Але років 7-8 назад вони стали
            загальним надбанням людства. Хоча традиційно пальму першості за
            популярністю утримує Франція. За зовнішнім виглядом десерт нагадує
            міні-гамбургери. Він складається з двох печенек, з'єднаних шаром
            джему або крему. А на смак схожий на безе, що не дивно - рецептура
            обох тістечок схожа. Цей десерт міцно зайняв своє місце на вищих
            місцях світових рейтингів смачненького. Він славиться найніжнішої
            структурою і чудовим смаком. А його форма забезпечує зручність.
            Різнобарвні печеньки зручно розміщуються в упаковці, з них виходять
            презентабельні подарунки, складаються вражаючі композиції.
          </div>
        )}
        <p>
          <img
            className="rounded img-fluid"
            src={itemChoose === "macarons" ? Macarons : ListCupcakes1}
            width={330}
            height={330}
            alt="chocolate"
          />
        </p>
      </div>
    </div>
  );
}

export default Gallery;
