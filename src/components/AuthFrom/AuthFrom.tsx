import style from "./AuthFrom.module.scss";
import CustomTextField from "../CustomTextField/CustomTextField";
import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link";
import { Button } from '@mui/material'

interface AuthFromProps {
  isRegister: boolean;
}

const AuthFrom = ({ isRegister }: AuthFromProps) => {
  return (
    <div className={style.container}>
      <section className={style.content}>
      <span className={style.icon}>
          <Link href="/" >
            <HomeIcon />
          </Link>
        </span>
      <form className={style.from}>
        <label>Sign in</label>
       {isRegister && <CustomTextField
          id="username"
          label="Username"
          helperText=""
        />}
        <CustomTextField
          id="email"
          label="Email"
          helperText=""
        />
        <CustomTextField
          id="password"
          label="Password"
          helperText=""
        />
        <Button variant="contained">
          {isRegister ? "Sign up" : "Sign in"}
        </Button>
        <Link href={isRegister ? "/login" : "/register"}>
          {isRegister ? "Login to accout?" : "Create an account?"}
        </Link>
      </form>
      </section>
    </div>
  );
};

export default AuthFrom;

