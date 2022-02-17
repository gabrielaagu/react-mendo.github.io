import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import logo from '../assets/img/logo.svg'
import { Link } from 'react-router-dom';
import { red } from "@material-ui/core/colors";


const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 15vw;
  height: 10vh;
  display: flex;
  align-items: center;
  
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Navbar = () => {

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ES</Language>
          <SearchContainer>
            <Input></Input>
            <Search style={{color:"grey", fontSize:16}}></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo><img src={logo} style={{height:40, width:300}}></img></Logo>
        </Center>
        <Right>
          <MenuItem><Link to="/register" style={{color:red}}>REGISTRATE</Link></MenuItem>
          <MenuItem><Link to="/login">INICIA SESIÓN</Link></MenuItem>
          <MenuItem>
            <Link to="/cart"></Link>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined></ShoppingCartOutlined>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

