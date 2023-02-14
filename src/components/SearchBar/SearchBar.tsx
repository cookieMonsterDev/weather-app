import { Container, Icon, TextFeild } from "./SearchBar.styled";
import { useAppDispatch } from "@/hooks/store";
import { fetchWeatherCity } from "../../store/slices/weather";
import { FormEvent, useRef } from "react";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const city = ref.current!.value.toString();
    dispatch(fetchWeatherCity(city));
    if (ref.current!.value) {
      ref.current!.value = "";
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <TextFeild
        type="text"
        placeholder="Enter city"
        ref={ref}
      />
      <Icon />
    </Container>
  );
};

export default SearchBar;
