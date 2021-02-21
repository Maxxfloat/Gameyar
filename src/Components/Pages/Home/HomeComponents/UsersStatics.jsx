import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./UsersStatics.module.scss";
import Card from "../../../UI/Card";
const UsersStatics = () => {
  const [fakeMember, setFakeMemeber] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      console.log("res: ", res);
      const usersNumber = res.data;
      setFakeMemeber(usersNumber.length);
    });
  }, [setFakeMemeber]);

  return (
    <div className={styles.section}>
      <div className={styles.section__container}>
        <div className={styles.title__container}>
          <h1>تعداد گیمر های گیمیار</h1>
        </div>
        <div className={styles.statics__container}>
          <Card>
            <div className={styles.statics__logo}>
              <h2>مربی ها</h2>
              <p>{fakeMember}</p>
            </div>
          </Card>
          <Card>
            <div className={styles.statics__logo}>
              <h2>هم تیمی ها</h2>
              <p>{fakeMember}</p>
            </div>
          </Card>
          <Card>
            <div className={styles.statics__logo}>
              <h2>گیمر های کاربر</h2>
              <p>{fakeMember}</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UsersStatics;
