import React, {useRef} from "react";

import "./Comment.scss";

const Comment = () => {
  const nameInput = useRef(null)
  const emailInput = useRef(null)
  const commentInput = useRef(null)

function onSubmitHandler (event) {
  event.preventDefault()
}

  return (
    <div className="comment__section">
      <div className="comment__container">
        <div className="comment__title--container">
          <h2>ارتباط با ما</h2>
        </div>
        <form onSubmit={
          (event) => onSubmitHandler(event)
        }>
        <div className='comment__input__container'>
          <label>نام خود را وارد کنید</label>
          <input ref={nameInput} type="text" placeholder='نام' />          
        </div> 
          
        <div className='comment__input__container'>  
          <label>ایمیل خود را وارد کنید</label>
          <input ref={emailInput} type="email" placeholder="ایمیل" />
        </div>   
          <div className='comment__textarea__container'>
            <label>پرسش، نظر و انتقاد</label>
            <textarea ref={commentInput} />
          </div>
          <button type='submit'>ارسال</button>
        </form>
      </div>
    </div>
  );
};

export default Comment;
