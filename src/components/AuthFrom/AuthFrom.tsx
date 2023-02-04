import style from "./AuthFrom.module.scss";
import CustomTextField from "../CustomTextField/CustomTextField";
import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link";
import { Button } from '@mui/material'
import { FormEvent, useState } from "react";
import {userNameValidator, emailValidator, passwordValidator} from './components/validators'
import axios from "axios";

interface AuthFromProps {
  isRegister: boolean;
}

const AuthFrom = ({ isRegister }: AuthFromProps) => {
  const [formDate, setFromDate] = useState({})

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { id, value } = e.target;

    setFromDate({
      ...formDate,
      [id]: value
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  
    console.log(formDate)
  }

  return (
    <div className={style.container}>
      <section className={style.content}>
      <span className={style.icon}>
          <Link href="/" >
            <HomeIcon />
          </Link>
        </span>
      <form className={style.from} onSubmit={handleSubmit}>
        <label>Sign in</label>
       {isRegister && <CustomTextField
          id="username"
          label="Username"
          helperText=""
          onChange={handleChange}
          validator={userNameValidator}
        />}
        <CustomTextField
          id="email"
          label="Email"
          helperText=""
          onChange={handleChange}
          validator={emailValidator}
        />
        <CustomTextField
          id="password"
          label="Password"
          helperText=""
          onChange={handleChange}
          validator={passwordValidator}
        />
        <Button variant="contained" type="submit">
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

