import React from "react";
import { Link } from "react-router-dom";

import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner__section">
      <div className="banner__container">
        <div className="banner__title--container">
          <h2>جدی بازی کنید</h2>
          <p>جامعه ای از برترین گیمر های ایران</p>
          <p>مربیان و بازیکن‌های با تجربه</p>
        </div>
        <div className="banner__cta--container">
          <div className="banner__cta--card">
            <p>با راهنمایی مربی با تجربه حرفه‌ای بازی کن</p>
            <p>با یه هم تیمی ماهر حتما پیروز می‌شی</p>
            <Link to="/singup">
              <button>انتخاب مربی یا همتیمی</button>
            </Link>
          </div>
          <div className="banner__cta--card">
            <p>
              می‌تونی از مهارت خودت تو گیم استفاده کنی و یک مربی یا هم تیمی باشی
            </p>
            <button>ایجاد حساب</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
