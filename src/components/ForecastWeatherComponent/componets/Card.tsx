import { List } from "../../../store/types/forecastWeather";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import OpacityIcon from '@mui/icons-material/Opacity';
import style from "./Card.module.scss";

const Card = (props: List) => {
  return (
    <li className={style.container}>
      <img
        src={`http://openweathermap.org/img/wn/${props.weather?.[0].icon}@2x.png`}
        alt={props.weather?.[0].icon}
        className={style.icon}
      />
      <span>{props.temp.min} &#8451; - {props.temp.max} &#8451;</span>
      <span className={style.stats}>
        <CloudQueueIcon /> {props.clouds}%
      </span>
      <span className={style.stats}>
        <OpacityIcon /> {props.humidity}%
      </span>
      <span className={style.stats}>
        {props.weather?.[0].description}
      </span>
    </li>
  );
};

export default Card;
