import style from "./AuthFrom.module.scss";
import CustomTextField from "../CustomTextField/CustomTextField";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import { Button } from "@mui/material";
import { FormEvent, useState, useEffect, useRef } from "react";
import {
  userNameValidator,
  emailValidator,
  passwordValidator,
} from "./components/validators";
import { useCustomDispatch } from "@/hooks/store";
import { fetchRegisterUser } from "../../store/thunks/fetchRegisterUser";
import { fetchLoginUser } from "../../store/thunks/fetchLoginUser";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";

interface AuthFromProps {
  isRegister: boolean;
}

const AuthFrom = ({ isRegister }: AuthFromProps) => {
  const [isDisabled, setDisabled] = useState(true);
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useCustomDispatch();
  const [formDate, setFromDate] = useState({});

  const validUserName = useRef(isRegister ? userNameValidator("") : '');
  const validEmail = useRef(emailValidator(""));
  const validPassword = useRef(passwordValidator(""));

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { id, value } = e.target;

    if (id === "username") {
      validUserName.current = userNameValidator(value);
    }

    if (id === "email") {
      validEmail.current = emailValidator(value);
    }

    if (id === "password") {
      validPassword.current = passwordValidator(value);
    }

    setFromDate({
      ...formDate,
      [id]: value,
    });

    if (
      !validUserName.current &&
      !validEmail.current &&
      !validPassword.current
    ) {
      setDisabled(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isRegister) {
      dispatch(fetchRegisterUser(formDate as any));
      return;
    }

    dispatch(fetchLoginUser(formDate as any));
    return;
  };

  return (
    <div className={style.container}>
      <section className={style.content}>
        <span className={style.icon}>
          <Link href="/">
            <HomeIcon />
          </Link>
        </span>
        <form className={style.from} onSubmit={handleSubmit}>
          <label>Sign in</label>
          {isRegister && (
            <CustomTextField
              id="username"
              label="Username"
              helperText=""
              onChange={handleChange}
              validator={userNameValidator}
            />
          )}
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
          <Button
            variant="contained"
            type="submit"
            disabled={isDisabled}
            sx={{
              "&.Mui-disabled": {
                color: "#f6f0f0",
                background: "#f58585",
              },
            }}
          >
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
