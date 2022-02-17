import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.6)
    ),
    url("https://cdn.shopify.com/s/files/1/0624/2294/1947/files/mw_750x.jpg?v=1644599597")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background: $white;
  width: 25%;
  padding: 20px;
  height: 320px;
  border-radius: 20px;
  border-left: 2px solid $white;
  border-top: 1px solid $white;
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
  text-align: center;
  position: relative;
  transition: all 0.2s ease-in-out;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-left: 1px solid $white;
  
  
`;

const MenuItem = styled.h1`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: #FA9370 !important;
  flex: 1;
  display: flex;
  align-items: flex;
  justify-content: flex-end;
  `;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  &:focus {
        box-shadow: 3px 3px 10px   rgb(253, 225, 225);
      }
  
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #240E4f;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 5%;
  transition: all 0.5s ease;
  &:hover {
    background-color: #FDE1D5;
    transform: scale(1.1);
  }
`;

const MenuI = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
      <MenuItem><Link to="/">INICIO</Link></MenuItem>
        <Title>INICIAR SECCIÓN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            ACCESO
          </Button>
          {error && <Error>Algo salió mal...</Error>}
          <MenuI><Link to="/">¿NO RECUERDAS LA CONTRASEÑA?</Link></MenuI>
          <MenuI><Link to="/">Crear una nueva cuenta</Link></MenuI>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
