import React, { useContext } from "react";
import styled from "styled-components";
import { IntrucaoContext } from "../../App";

const InputInstrucoes: React.FC = () => {
  const {
    quantidadeInstrucoes,
    setQuantidadeInstrucoes,
  } = useContext(IntrucaoContext);

  return (
    <Wrapper>
      <Container>
        <Instrucoes>
          <button
            className="myButtonLeft"
            onClick={() => {
              if (quantidadeInstrucoes === 1) return;
              setQuantidadeInstrucoes(quantidadeInstrucoes - 1);
            }}
          >
            -
          </button>
          <Label>{quantidadeInstrucoes}</Label>
          <button
            className="myButtonRight"
            onClick={() => setQuantidadeInstrucoes(quantidadeInstrucoes + 1)}
          >
            +
          </button>
        </Instrucoes>
      </Container>
    </Wrapper>
  );
};

export default InputInstrucoes;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: center;
  margin-left: 42px;
  margin-right: 22px;

  .myButtonLeft {
    background:  #dfdfdf;
    background-color: #ededed;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border: 0;
    display: inline-block;
    cursor: pointer;
    color: #777777;
    font-family: Arial;
    font-size: 25px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
  }
  .myButtonLeft:active {
    background: #a1a1aa;
  }
  .myButtonRight {
    background:  #dfdfdf;
    background-color: #ededed;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border: 0;
    display: inline-block;
    cursor: pointer;
    color: #777777;
    font-family: Arial;
    font-size: 25px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
  }
  .myButtonRight:active {
    background: #a1a1aa;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Instrucoes = styled.div`
  display: flex;
  flex-direction: row;
`;

const Label = styled.label`
  display: flex;
  flex: 1;
  font-family: impact;
  font-size: 25px;
  color: #dfdfdf;
  padding: 0 15px 0 25px;
  width: 25px;
  border-style: solid;
  border-width: 2px;
  border-color: linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
`;
