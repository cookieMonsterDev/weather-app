import styled from "@emotion/styled";

export const Container = styled.li`
  background-color: #1976d2;
  border-radius: 1rem;
  width: 4.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  > span {
    font-size: 0.7rem;

    &:nth-child(5) {
      font-size: 0.8rem;
      margin-top: 1rem;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 25rem) {
    min-width: 100%;
    padding: 0 0.5rem;
    flex-direction: row;

    > span {
      margin: 0;
      width: 20%;
      font-size: 0.8rem;

      &:nth-child(2) {
        width: 30%;
      }

      &:nth-child(5) {
        margin-top: 0;
        font-size: 0.8rem;
      }
    }
  }
`;

export const Icon = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const Stats = styled.span`
  margin-top: 0.5rem;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  @media only screen and (max-width: 25rem) {
    flex-direction: column;
  }
`;
