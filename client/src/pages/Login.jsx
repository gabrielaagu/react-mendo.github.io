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
      rgba(255, 255, 255, 0.5)
    ),
    url("https://cdn.shopify.com/s/files/1/0624/2294/1947/files/mw_750x.jpg?v=1644599597")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-left: 1px solid $white;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  
`;

const Button = styled.button`
  width: 40%;
  border-radius: 5%;
  padding: 15px 20px;
  background-color: #240E4F;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
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
