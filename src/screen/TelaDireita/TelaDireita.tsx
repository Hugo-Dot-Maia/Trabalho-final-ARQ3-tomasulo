import React from "react";
import styled from "styled-components";
import TabelaEstacaoReserva from "../../components/TabelasLeft/TabelaEstacaoReserva";
import TabelaRegistradores from "../../components/TabelasLeft/TabelaRegistradores";
import TabelaReordenamento from "../../components/TabelasLeft/TabelaReordenamento";

const TelaDireita: React.FC = () => {
  return (
    <Wrapper>
      <TabelaRegistradores />
      <WrapperInferior>
        <TabelaEstacaoReserva />
        <TabelaReordenamento />
      </WrapperInferior>
    </Wrapper>
  );
};

export default TelaDireita;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const WrapperInferior = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
