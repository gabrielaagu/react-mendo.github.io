import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://cdn.pixabay.com/photo/2016/11/21/16/08/tying-hair-1846171_960_720.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Volver = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  color: #240e4f;
  background-color: #EAEAEA;
  padding-left:1vw;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #240e4f;
  color: white;
  cursor: pointer;
  border-radius: 10px;
`;

const Register = () => {
  return (
    <>
      <Volver>
        <Title>Volver al home</Title>
      </Volver>
      <Container>
        <Wrapper>
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
