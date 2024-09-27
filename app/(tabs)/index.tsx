import {  Image,StyleSheet, Platform,Text } from 'react-native';
import styled from 'styled-components/native'


export default function HomeScreen() {
  const Views = styled.View`
    width: 100vw;
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: silver;

  `;
  const I = styled.Image` 
    width: 200px;
    height: 200px;
    background-color: white;
  `;



  return (
    <Views
    >

        <I/>
          <Text>dddsfdsfdsfsdfdsfdsf</Text>
        
    </Views>
  );
}
