import { useAppDispatch } from "@/hooks/store";
import { fetchWeatherCity } from "@/store/slices/weather/weather.thunks";
import { setMenu } from "@/store/slices/user";
import { useAppSelector } from "../../../hooks/store";
import { RootState } from "@/store/store";
import { fetchUserBookmarks } from "@/store/slices/user/user.thunks";
import { Container, Icon, Label } from "./Bookmark.styled";

const Bookmark = ({ name }: { name: string }) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state: RootState) => state.user);

  const handleBookmark = () => {
    dispatch(fetchWeatherCity(name));
    dispatch(setMenu(false));
  };

  const handleRemoveBookmark = () => {
    const array = [...user?.cities!];

    const index = array!.indexOf(name);

    if (index > -1) {
      array!.splice(index, 1);
    }

    dispatch(
      fetchUserBookmarks({
        id: user?._id!,
        cities: array!,
      })
    );
  };

  return (
    <Container>
      <Label onClick={handleBookmark}>{name}</Label>
      <Icon onClick={handleRemoveBookmark} />
    </Container>
  );
};

export default Bookmark;
