import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data.js";
import { mobile } from "../responsive"; 

const Container = styled.div`
  margin-top: 1%;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #eaeaea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:${props=>props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  margin-top: 20px;
  height: 100%;
  width: 100%;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center;
  padding: 1%;
`;

const Title = styled.h1`
    color: white;
    font-size: 40px;
    padding-right: 20vw;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 3px;
    color: white;
`;
const Button = styled.button`
    font-size: 20px;
    background-color: #FA9370;
    cursor: pointer;
    color: white;
    width: 10vw;
    border: #FA9370;
    border-radius: 8px;
    height: 6vh;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
          } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
          }
    };

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                      <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>Pide tu cita</Button>
                    </InfoContainer>
                </Slide>
                ))}
        </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
