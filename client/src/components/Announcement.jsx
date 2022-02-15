import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #EAEAEA;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
`

const Announcement = () => {
  return (
    <Container>Envio gratis para pedidos superiores a los 50€!</Container>
  )
}

export default Announcement
