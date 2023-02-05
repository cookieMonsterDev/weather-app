import style from "./LoaderWheel.module.scss";

const LoaderWheel = () => {
  return (
    <section className={style.wrapper}>
    <div className={style.container}>
      <div className={style.circle} />
      <div className={style.circle} />
      <div className={style.circle} />
    </div>
    </section>
  );
};

export default LoaderWheel;
