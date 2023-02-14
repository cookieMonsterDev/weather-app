import { useRouter } from "next/router";
import SearchBar from "../SearchBar/SearchBar";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppSelector } from "../../hooks/store";
import SideMenu from "../SideMenu/SideMenu";
import { useAppDispatch } from "@/hooks/store";
import { setMenu } from "@/store/slices/user";
import { Container } from "./NavBar.styled";

const Navbar = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.user);

  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  return (
    <Container>
      <section>
        <SearchBar />
      </section>
      <section>
        {user ? (
          <MenuIcon
            style={{ color: "white", width: "2.5rem", height: "3rem" }}
            onClick={() => dispatch(setMenu(true))}
          />
        ) : (
          <Button variant="contained" onClick={handleClick}>
            Sign in
          </Button>
        )}
      </section>
      {user && <SideMenu {...user} />}
    </Container>
  );
};

export default Navbar;
