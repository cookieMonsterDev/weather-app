import { User } from "@/Schema/userSchema";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { css } from "@mui/material";
import styled from "@emotion/styled";
import { useCustomDispatch } from "@/hooks/store";
import { resetUser, setMenu } from "@/store/slices/userSlice";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Bookmark from "./components/Bookmark";

interface SideMenuProps {
  isMenu: boolean;
}

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

const Container = styled.div<SideMenuProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(4rem + 80vh);
  overflow: hidden;
  visibility: hidden;
  color: white;

  ${({ isMenu }) =>
    isMenu &&
    css`
      visibility: visible;
    `}

  @media only screen and (max-width: 25rem) {
    height: 100vh;
  }

  @media only screen and (max-width: 56.25rem) {
    height: 100vh;
  }
`;

const BlurOverlay = styled.div<SideMenuProps>`
  position: relative;
  z-index: 50;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(0.3rem);
  visibility: hidden;

  ${({ isMenu }) =>
    isMenu &&
    css`
      visibility: visible;
    `}
`;

const Menu = styled.section<SideMenuProps>`
  top: 0;
  right: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 100%;
  padding: 2rem;
  background-color: #132f4c;
  overflow: auto;
  transform: translateX(100%);
  transition: 700ms ease-in-out;

  ${({ isMenu }) =>
    isMenu &&
    css`
      transform: translateX(0);
    `}

  > label {
    text-align: center;
    font-size: 2rem;
    margin: 1rem 0 1rem 0;
  }

  > ul {
    width: 100%;
    margin-top: 1.8rem;
    display: grid;
    gap: 0.6rem;
  }
`;

const CloseButton = styled(CloseIcon)`
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  width: 3rem;
  height: 3rem;
  color: white;

  @media only screen and (max-width: 25rem) {
    left: 0.5rem;
    top: 0.5rem;
    width: 2rem;
    height: 2rem;
  }
`;
