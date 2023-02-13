import { Container, Icon, TextFeild } from "./SearchBar.styled";
import { useCustomDispatch } from "@/hooks/store";
import { fetchCurrentWeatherCity } from "../../store/thunks/fetchCurrentWeatherCity";
import { FormEvent, useRef } from "react";

const SearchBar = () => {
  const dispatch = useCustomDispatch();
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const city = ref.current!.value.toString();
    dispatch(fetchCurrentWeatherCity(city));
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
