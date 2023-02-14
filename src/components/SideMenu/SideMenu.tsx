import { User } from "@/Schema/userSchema";
import { useAppSelector } from "../../hooks/store";
import { useAppDispatch } from "@/hooks/store";
import { setUser, setMenu } from "@/store/slices/user";
import Button from "@mui/material/Button";
import Bookmark from "./Bookmark/Bookmark";
import { BlurOverlay, CloseButton, Container, Menu } from "./SideMenu.styled";

const SideMenu = (props: User) => {
  const dispatch = useAppDispatch();
  const { isMenu } = useAppSelector((state) => state.user);

  const handleLogOut = () => {
    dispatch(setMenu(false));
    dispatch(setUser(null));
  };

  return (
    <Container isMenu={isMenu}>
      <BlurOverlay isMenu={isMenu}>
        <Menu isMenu={isMenu}>
          <CloseButton onClick={() => dispatch(setMenu(false))} />
          <label>Welcome {props.username}!</label>
          <Button variant="contained" onClick={handleLogOut}>
            Wanna logout?
          </Button>
          <ul>
            {props.cities.map((i) => (
              <Bookmark key={i} name={i} />
            ))}
          </ul>
        </Menu>
      </BlurOverlay>
    </Container>
  );
};

export default SideMenu;
