import { useEffect, useState } from "react";
import { CurrentWeather } from "@/store/types/currentWeather";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import style from "./CurentWeatherCard.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const CurentWeatherCard = (props: CurrentWeather) => {
  const { user } = useSelector(
    (state: RootState) => state.user
  );
  
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

  const handleBookmark = () => {
    const has = user?.cities.includes(props.name)

    if(has) {
      return <BookmarkIcon className={style.icon}/>
    }

    return <BookmarkBorderIcon className={style.icon}/>
  }

  return (
    <section className={style.container}>
      {user && handleBookmark()}
      <div className={style.location}>
        <h2>{props.name}</h2>
        <span>{date}</span>
      </div>
      <div className={style.weather}>
        <img src={`http://openweathermap.org/img/wn/${props.weather?.[0].icon}@2x.png`} alt={props.weather?.[0].icon}/>
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
