import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  background-color: #323A49;
`;

export const Section = styled.section`
  border: 10px solid none;
  border-radius: 25px;
  background-color: #48556a;

  padding: 30px;
  width: 500px;
`;

export const ImageDice = styled.div`
  position: relative;
  left: 187px;
  top: 60px;
  padding: 0;

  border: 1px solid none;
  border-radius: 50%;
  background-color: #52ffa8;
  width: 70px;
  height: 70px;
  
  .dice {
    width: 40%;
    position: relative;
    left: 21px;
    top: 21px;
  }
`;

export const ImageDivider = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 30px;
`;