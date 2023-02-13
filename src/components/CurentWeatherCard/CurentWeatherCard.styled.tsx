import styled from "@emotion/styled";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const Container = styled.section`
  width: 100%;
  height: 20rem;
  border-radius: 0.6rem;
  background-color: $primaryBackgroundColor;
  color: white;
  display: grid;
  position: relative;
  grid-template-rows: 0.4fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "location  location"
    "weather  temp"
    "weather temp";
`;

export const Location = styled.div`
  grid-area: location;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Weather = styled.div`
  grid-area: weather;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  scale: 1.9;
`;

export const Temp = styled.div`
  grid-area: temp;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;

  > h1 {
    font-size: 3rem;
  }

  > span {
    margin-top: 0.6rem;
  }
`;

export const Icon = styled(BookmarkIcon)`
  width: 2rem;
  height: 2rem;
  color: white;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;

  @media only screen and (max-width: 25rem) {
    right: 0.5rem;
    top: 0.5rem;
  }
`;

export const IconBorder = styled(BookmarkBorderIcon)`
  width: 2rem;
  height: 2rem;
  color: white;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;

  @media only screen and (max-width: 25rem) {
    right: 0.5rem;
    top: 0.5rem;
  }
`;
