import style from "./ErrorMessage.module.scss";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <section className={style.container}>
      <div className={style.modal}>{message}</div>
    </section>
  );
};

export default ErrorMessage;
