import { List } from "../../../store/slices/forcastWeather/forcastWeather.types";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import OpacityIcon from "@mui/icons-material/Opacity";
import { Container, Icon, Stats } from "./Card.styled";

const Card = (props: List) => {
  return (
    <Container>
      <Icon
        src={`http://openweathermap.org/img/wn/${props.weather?.[0].icon}@2x.png`}
        alt={props.weather?.[0].icon}
      />
      <span>
        {props.temp.min} &#8451; - {props.temp.max} &#8451;
      </span>
      <Stats>
        <CloudQueueIcon /> {props.clouds}%
      </Stats>
      <Stats>
        <OpacityIcon /> {props.humidity}%
      </Stats>
      <Stats>{props.weather?.[0].description}</Stats>
    </Container>
  );
};

export default Card;
