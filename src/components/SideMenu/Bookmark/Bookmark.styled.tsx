import styled from "@emotion/styled";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";

export const Container = styled.li`
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  background-color: rgb(174, 167, 163);
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  border-radius: 1rem;
`;

export const Label = styled.label`
  position: absolute;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 2rem;
  width: 70%;
`;

export const Icon = styled(BookmarkRemoveIcon)`
  position: absolute;
  right: 1rem;
`;
