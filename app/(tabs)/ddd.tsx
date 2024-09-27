import styled from 'styled-components/native'


export default function TabTwoScreens() {
    const Container = styled.View`
        width: 100vw;
        height: 100vh;
    `
    const Header = styled.View`
    width: 100%;
    height: 50px;
    background-color: black;
`
  return (
    <Container>
        <Header/>

    </Container>    
  );
}


