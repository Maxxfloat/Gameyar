import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import "./Comment.scss";

const Comment = () => {
  const { register, handleSubmit } = useForm();

  const onSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="comment__section">
      <div className="comment__container">
        <div className="comment__title--container">
          <h2>ارتباط با ما</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="comment__input__container">
            <label>نام خود را وارد کنید</label>
            <input
              name="name"
              ref={register({
                required: true,
              })}
              type="text"
              placeholder="نام"
            />
          </div>

          <div className="comment__input__container">
            <label>ایمیل خود را وارد کنید</label>
            <input
              name="email"
              type="email"
              ref={register({
                required: true,
              })}
              type="email"
              placeholder="ایمیل"
            />
          </div>
          <div className="comment__textarea__container">
            <label>پرسش، نظر و انتقاد</label>
            <textarea name="comment" ref={register({ required: true })} />
          </div>
          <button type="submit">ارسال</button>
        </form>
      </div>
    </div>
  );
};

export default Comment;

// password regex = {
//   required: true,
//   minLength: 8,
//   pattern: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
// }
