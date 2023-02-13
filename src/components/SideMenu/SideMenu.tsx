import { User } from "@/Schema/userSchema";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useCustomDispatch } from "@/hooks/store";
import { resetUser, setMenu } from "@/store/slices/userSlice";
import Button from "@mui/material/Button";
import Bookmark from "./Bookmark/Bookmark";
import { BlurOverlay, CloseButton, Container, Menu } from "./SideMenu.styled";

const SideMenu = (props: User) => {
  const dispatch = useCustomDispatch();
  const { isMenu } = useSelector((state: RootState) => state.user);

  const handleLogOut = () => {
    dispatch(setMenu(false));
    dispatch(resetUser());
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
