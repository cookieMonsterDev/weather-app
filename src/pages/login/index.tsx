import AuthFrom from "@/components/AuthFrom/AuthFrom";
import { MainContainer } from "@/styles/containers";
import Head from "next/head";

const login = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <AuthFrom isRegister={false} />
      </MainContainer>
    </>
  );
};

export default login;
