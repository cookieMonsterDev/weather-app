import { useEffect, useState } from "react";
import { CurrentWeather } from "@/store/slices/weather/weather.types";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { fetchUpdateBookmarks } from "@/store/thunks/fetchUpdateBookmarks";
import { useAppDispatch } from "@/hooks/store";
import {
  Container,
  Location,
  Weather,
  Img,
  Temp,
  Icon,
  IconBorder,
} from "./CurentWeatherCard.styled";

const CurentWeatherCard = (props: CurrentWeather) => {
  const dispatch = useAppDispatch();

  const { user } = useSelector((state: RootState) => state.user);

  const currentDate = new Date();
  const formaterDate = new Intl.DateTimeFormat("en-GB", { dateStyle: "full" });
  const formaterTime = new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    hour12: true,
  });

  const [date, setDate] = useState(
    `${formaterDate.format(currentDate)} | Loacl time: ${formaterTime.format(
      currentDate
    )}`
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

  const handleRemoveBookmark = () => {
    const array = [...user?.cities!];

    const index = array!.indexOf(props.name);

    if (index > -1) {
      array!.splice(index, 1);
    }

    dispatch(
      fetchUpdateBookmarks({
        id: user?._id!,
        cities: array!,
      })
    );
  };

  const handleAddBookmark = () => {
    const array = [...user?.cities!];

    array.push(props.name);

    dispatch(
      fetchUpdateBookmarks({
        id: user?._id!,
        cities: array!,
      })
    );
  };

  const handleBookmark = () => {
    const has = user?.cities.includes(props.name);

    if (has) {
      return <Icon onClick={handleRemoveBookmark} />;
    }

    return <IconBorder onClick={handleAddBookmark} />;
  };

  return (
    <Container>
      {user && handleBookmark()}
      <Location>
        <h2>{props.name}</h2>
        <span>{date}</span>
      </Location>
      <Weather>
        <Img
          src={`http://openweathermap.org/img/wn/${props.weather?.[0].icon}@2x.png`}
          alt={props.weather?.[0].icon}
        />
        <span>{props.weather?.[0].main}</span>
      </Weather>
      <Temp>
        <h1>{`${props.main?.temp}`}&#8451;</h1>
        <span>Feels like {props.main?.feels_like} &#8451;</span>
      </Temp>
    </Container>
  );
};

export default CurentWeatherCard;
