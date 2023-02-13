import { Container, Modal } from "./ErrorMessage.styled";
import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <Container>
      <Modal>{message}</Modal>
    </Container>
  );
};

export default ErrorMessage;
