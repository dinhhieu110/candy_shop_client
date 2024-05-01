import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
  height: 60px;
  background-color: teal;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
`;

const MenuList = styled.ul`
  font-size: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
`;
const MenuItem = styled.li`
  text-align: center;
  display: flex;
  align-items: center;
  margin-right: 100px;
  height: 100%;
  padding: 0 4px;
  &:hover {
    cursor: pointer;
    background-color: #1a9696;
  }
`;

const Menu = () => {
  return (
    <Container>
      <MenuList>
        <MenuItem>Birthday</MenuItem>
        <MenuItem>Love & Romance</MenuItem>
        <MenuItem>Graduation</MenuItem>
        <MenuItem>New Baby</MenuItem>
        <MenuItem>Thank You</MenuItem>
      </MenuList>
    </Container>
  );
};

export default Menu;
