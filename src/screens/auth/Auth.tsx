import { FC, useState } from "react";
import style from "./Auth.module.css";
import { Button } from "../../ui/button/Button";

export const Auth: FC<{ setShowPortal: () => void }> = ({ setShowPortal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={style.section}>
      <div className={style.button}>
        <button onClick={setShowPortal} className={style.back}>
          <div className={style.arrow} />
        </button>
      </div>
      <div className={style.auth} style={{ height: "100vh" }}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          style={{ marginTop: 20 }}
          placeholder="Email"
        />
        <Button styleType={"auth"} style={{ marginTop: 20 }}>
          Sign in
        </Button>
      </div>
    </div>
  );
};
