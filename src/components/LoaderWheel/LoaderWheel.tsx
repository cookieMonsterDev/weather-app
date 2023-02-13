import { CircleFrag, Container, Wrapper } from "./LoaderWheel.styled";

const LoaderWheel = () => {
  return (
    <Wrapper>
      <Container>
        <CircleFrag />
        <CircleFrag />
        <CircleFrag />
      </Container>
    </Wrapper>
  );
};

export default LoaderWheel;
