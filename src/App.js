import React from "react";
import { Phrase, Title } from "./components/TitleAndPhrase";
import { GlobalStyle } from "./global/GlobalStyle";
import { ReactComponent as DividerDesktop } from "./images/pattern-divider-desktop.svg";
import * as S from "./styled";
import Dice from "./images/icon-dice.svg";

function App() {
  return (
    <S.Wrapper>
      <GlobalStyle />
      <S.Section>
        <Title />
        <Phrase />
        <S.ImageDivider>
          <DividerDesktop />
        </S.ImageDivider>
        <S.ImageDice>
          <img src={Dice} className="dice" alt="dice" />
        </S.ImageDice>
      </S.Section>
    </S.Wrapper>
  );
}

export default App;
