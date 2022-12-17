import React from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { keyNavigate } from "../atom/store";

function AboutMySelf() {
 const setTodoList = useSetRecoilState(keyNavigate);
  return (
    <div className="container col-md-6 col-sm-12">
      <h4>Привіт, мене звати Юля</h4>
      <p>
        Впродовж 2 років займаюся випічкою солодощів таких як капкейки,
        макаруни, які приносять радість моїм друзям та близьким. Капкейки
        виготовлені із натуральних продуктів без консервантів, мають хороший
        смак та текстуру. Ділюся з вами частинкою моєї творчості, яку можна
        розділити з друзями та близкими. Для замовлення пишіть на сторінку
        інстаграм, що знаходиться в розділі{" "}
        <Link
          to={"/contact"}
          target="_self"
          onClick={() => setTodoList("contact")}
        >
          Контакти
        </Link>
        .
      </p>
    </div>
  );
}

export default AboutMySelf;
