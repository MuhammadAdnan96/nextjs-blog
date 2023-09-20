import React from "react";
import InputField from "./components/inputField";
import styles from "./styles/inputContainer.module.css";

const Container = ({
  userName,
  setUserName,
  password,
  setPassword,
  LoginHandler,
  className,
}) => {
  return (
    <div className={styles.container}>
      <h2>Let's Login To Your Account First!</h2>

      <InputField
        className={styles.input}
        type="text"
        value={userName}
        placeholder="Username"
        label="Username: "
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />

      <InputField
        className={styles.input}
        type="password"
        value={password}
        placeholder="Password"
        label="Password:  "
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button 
      className={styles.loginBtn} onClick={LoginHandler}>
        Login
      </button>
    </div>
  );
};

export default Container;
