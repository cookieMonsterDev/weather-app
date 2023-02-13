import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";

export const Container = styled.form`
  position: relative;
  height: 2.2rem;

  @media only screen and (max-width: 56.25rem) {
    width: 100%;
  }
`;

export const TextFeild = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  padding-left: 2.5rem;
  border: 0.1rem solid #ffffff;
  font-size: 1.2rem;
  outline-color: #2f83c7;
`;

export const Icon = styled(SearchIcon)`
  width: 2rem;
  height: 2rem;
  position: absolute;
  left: 0.3rem;
  top: 50%;
  transform: translateY(-50%);
`;
