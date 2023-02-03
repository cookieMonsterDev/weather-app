import { useCustomDispatch } from "@/hooks/store";
import { fetchCurrentWeatherCity } from '../../store/thunks/fetchCurrentWeatherCity'
import SearchIcon from "@mui/icons-material/Search";
import { FormEvent, useRef } from "react";
import style from "./SearchBar.module.scss";

const SearchBar = () => {
  const dispatch = useCustomDispatch();
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const city = ref.current!.value.toString()
    dispatch(fetchCurrentWeatherCity(city))
  };

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <input
        type="text"
        className={style.textFeild}
        placeholder="Enter city"
        ref={ref}
      />
      <SearchIcon className={style.icon} />
    </form>
  );
};

export default SearchBar;
