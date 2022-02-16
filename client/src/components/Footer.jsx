import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube
} from "@material-ui/icons";
import styled from "styled-components";
import logo from '../assets/img/logo.svg'
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
 align-items: center;
 display: flex;
 padding: 30px;
 
  
`;


const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 70%;
  color: #240E4F;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #FDE1D5;
    transform: scale(1.1);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: #240E4F;
  text-align: center; 
  
`;

const List = styled.ul`
  margin: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  text-align: center; 
  
`;

const ListItem = styled.li`
  margin-bottom: 30px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  color: #240E4F;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  transition: all 0.5s ease;
  &:hover {
    color: #FDE1D5;
    transform: scale(1.1);
  }
  
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo><img src={logo} style={{height:60}}></img></Logo>
        
        <SocialContainer>
          <SocialIcon src="https://www.facebook.com/MendoWeddings.es">
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon >
            <YouTube />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
      <Title>ÚNETE A NUESTRA COMUNIDAD</Title>
      <Title>#WearYourDream</Title>
        <List>
          <ListItem>INICIO</ListItem>
          <ListItem>CATÁLOGO</ListItem> 
          <ListItem>CONÓCENOS</ListItem>
          <ListItem>PIDE CITA</ListItem>
           <ListItem>MI CUENTA</ListItem>
        </List>
      </Center>
    </Container>
  );
};

export default Footer;
