import { useAppDispatch } from "@/hooks/store";
import { fetchWeatherCity } from "@/store/slices/weather";
import { setMenu } from "@/store/slices/userSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { fetchUpdateBookmarks } from "@/store/thunks/fetchUpdateBookmarks";
import { Container, Icon, Label } from "./Bookmark.styled";

const Bookmark = ({ name }: { name: string }) => {
  const dispatch = useAppDispatch();
  const { user } = useSelector((state: RootState) => state.user);

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
      fetchUpdateBookmarks({
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
