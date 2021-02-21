import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import "./Signup.scss";

const Signup = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmitHandler = (data) => {
    console.log("data: ", data);
    props.signupSubmit(data);
  };

  return (
    <div className="signup__section">
      <form onSubmit={handleSubmit(onSubmitHandler)} className="signup__form">
        <label>نام کاربری</label>
        <input
          name="userName"
          ref={register({
            required: true,
            pattern: /^[A-Za-z0-9_]+$/,
          })}
        />
        <label>ایمیل</label>
        <input name="userEmail" ref={register} type="email" />
        <button type="submit">ثبت</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupSubmit: (payload) => dispatch({ type: "SIGNUP_SUBMIT", payload }),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
