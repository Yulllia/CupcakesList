import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

function ContactPage() {
  return (
    <div className="contactBlock mt-5">
      <div>
        <h2 className="mb-5">
          Контакти{" "}
          <span>
            {" "}
            <FaTelegramPlane />
          </span>
        </h2>
        <p>
          Контактний номер: <a href="tel:+380964735817">+380964735817</a>
        </p>
        <p>
          Telegram: <a href="https://t.me/YuliaShyshka">Yulia Kruk</a>
        </p>
        <p>
          Email: <a href="mailto:shyshka20@gmail.com">shyshka20@gmail.com</a>
        </p>
        <p>Адреса: місто Львів, вул. Очаківська 7</p>
        <p>
          Ми в «Інстаграм»:{" "}
          <a href="https://www.instagram.com/yuliia_cupcakes">
            <FiInstagram />
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
