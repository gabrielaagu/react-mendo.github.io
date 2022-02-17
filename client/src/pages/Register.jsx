import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.6)
    ),
    url("https://cdn.pixabay.com/photo/2016/11/21/16/08/tying-hair-1846171_960_720.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ width: "75%" })}
`;

const Wrapper = styled.div`
  background: $white;
  width: 40%;
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
  color: #240E4F;
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

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  border-left: 1px solid $white;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  &:focus {
        box-shadow: 3px 3px 10px   rgb(253, 225, 225);
      }
      ${mobile({ width: "75%" })}
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  color: #240E4F;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #240e4f;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  align-items: center;
  transition: all 0.5s ease;
  &:hover {
    background-color: #FDE1D5;
    transform: scale(1.1);
  }
  ${mobile({ width: "75%" })}
`;

const Register = () => {
  return (
    <>
      <Container>
        <Wrapper>
         <MenuItem><Link to="/">INICIO</Link></MenuItem>
          <Title>REGISTRATE</Title>
          <Form>
            <Input placeholder="Nombre" />
            <Input placeholder="Apellidos" />
            <Input placeholder="Email" />
            <Input placeholder="Contraseña" />
            <Input placeholder="Confirmar contraseña" />
            <Agreement>
              Al crear una cuenta, doy mi consentimiento para el procesamiento
              de mis datos personales. datos de acuerdo con la{" "}
              <b>POLÍTICA DE PRIVACIDAD</b>
            </Agreement>
            <Button>CREAR</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
