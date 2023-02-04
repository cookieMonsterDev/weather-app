import { useEffect, useState } from "react";
import { CurrentWeather } from "@/store/types/currentWeather";
import style from "./CurentWeatherCard.module.scss";

const CurentWeatherCard = (props: CurrentWeather) => {
  const icon = props.weather?.[0].icon;
  
  const currentDate = new Date();
  const formaterDate = new Intl.DateTimeFormat("en-GB", { dateStyle: "full" });
  const formaterTime = new Intl.DateTimeFormat("en-GB", { hour: 'numeric', hour12: true });

  const [date, setDate] = useState(
    `${formaterDate.format(currentDate)} | Loacl time: ${formaterTime.format(currentDate)}`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const date = formaterDate.format(currentDate);
      const time = formaterTime.format(currentDate);

      setDate(`${date} | Loacl time: ${time}`);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <section className={style.container}>
      <div className={style.location}>
        <h2>{props.name}</h2>
        <span>{date}</span>
      </div>
      <div className={style.weather}>
        <img src={`http://openweathermap.org/img/wn/${props.weather?.[0].icon}@2x.png`}></img>
        <span>{props.weather?.[0].main}</span>
      </div>
      <div className={style.temp}>
        <h1>{`${props.main?.temp}`}&#8451;</h1>
        <span>Feels like {props.main?.feels_like} &#8451;</span>
      </div>
    </section>
  );
};

export default CurentWeatherCard;
