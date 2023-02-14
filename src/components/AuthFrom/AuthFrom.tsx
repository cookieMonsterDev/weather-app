import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/store";
import { fetchRegisterUser } from "../../store/thunks/fetchRegisterUser";
import { fetchLoginUser } from "../../store/thunks/fetchLoginUser";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import { resetUserError } from "@/store/slices/userSlice";
import { useFormik } from "formik";
import {
  initialValuesLogin,
  initialValuesRegister,
  validationSchemaLogin,
  validationSchemaRegister,
} from "./components/validator";

import { Container, Icon, Form, StyledTextField, Error } from "./AuthForm.styled";

const AuthFrom = ({ isRegister }: { isRegister: boolean }) => {
  const router = useRouter();
  const { user, error } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetUserError());
  }, []);

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const formik = useFormik({
    initialValues: isRegister ? initialValuesRegister : initialValuesLogin,
    validationSchema: isRegister
      ? validationSchemaRegister
      : validationSchemaLogin,
    onSubmit: (values: any) => {
      console.log(values);

      if (isRegister) {
        dispatch(fetchRegisterUser(values));
        return;
      }

      dispatch(fetchLoginUser(values));
      return;
    },
  });

  return (
    <Container>
      <section>
        <Icon>
          <Link href="/">
            <HomeIcon />
          </Link>
        </Icon>
        <Form onSubmit={formik.handleSubmit}>
          <label>Sign in</label>
          {isRegister && (
            <StyledTextField
              id="username"
              name="username"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          )}
          <StyledTextField
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <StyledTextField
            id="password"
            name="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {error && <Error>{error}</Error>}
          <Button variant="contained" type="submit">
            {isRegister ? "Sign up" : "Sign in"}
          </Button>
          <Link href={isRegister ? "/login" : "/register"}>
            {isRegister ? "Login to accout?" : "Create an account?"}
          </Link>
        </Form>
      </section>
    </Container>
  );
};

export default AuthFrom;
