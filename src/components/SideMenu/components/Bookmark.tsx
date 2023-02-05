import style from "./Bookmark.module.scss";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import { useCustomDispatch } from "@/hooks/store";
import { fetchCurrentWeatherCity } from "@/store/thunks/fetchCurrentWeatherCity";
import { setMenu } from "@/store/slices/userSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { fetchUpdateBookmarks } from "@/store/thunks/fetchUpdateBookmarks";

interface BookmarkProps {
  name: string;
}

const Bookmark = ({ name }: BookmarkProps) => {
  const dispatch = useCustomDispatch();
  const { user } = useSelector((state: RootState) => state.user);

  const handleBookmark = () => {
    dispatch(fetchCurrentWeatherCity(name));
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
    <li className={style.container}>
      <label className={style.lable} onClick={handleBookmark}>
        {name}
      </label>
      <BookmarkRemoveIcon
        className={style.icon}
        onClick={handleRemoveBookmark}
      />
    </li>
  );
};

export default Bookmark;
