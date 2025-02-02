import React, { useContext } from "react";
import styled from "styled-components";
import { IntrucaoContext } from "../../App";
import { TipoInstrucao } from "../../Enums/TipoInstrucao";
import { TipoRegistrador } from "../../Enums/TipoRegistrador";

const BotoesConfimarResetar: React.FC = () => {
  const {
    ArrayDeInstrucoes: arrInstrucoes,
    ArrayDeCiclodeInstrucao: arrCicloPorInstrucao,
    ArrayTipoRegistrador: arrTipoRegistrador,
    ArrayDeRegistrador: arrRegistrador,
    setQuantidadeInstrucoes,
    ArrayDeEstacaoReserva: arrEstacaoReserva,
    setConfirmado,
    setCicloAtual,
    ArrayDeReordenamentoDeBuffer: arrBufferReordenamento,
  } = useContext(IntrucaoContext);

  const onCliqueConfirmar = () => {
    if (arrInstrucoes.value.length <= 0) {
      alert("Não existe nenhuma instrução");
      return;
    }

    let ehValido = true;

    arrInstrucoes.value.forEach((i) => {
      if (
        (i.nome === TipoInstrucao.Add ||
          i.nome === TipoInstrucao.Sub ||
          i.nome === TipoInstrucao.Mult ||
          i.nome === TipoInstrucao.Ld ||
          i.nome === TipoInstrucao.Ld) &&
        (!i.input1 || !i.input2 || !i.input3)
      ) {
        ehValido = false;
      }
    });

    if (!ehValido) {
      alert(`Preencha todas as instruções!`);
      return;
    }

    arrInstrucoes.setValue([
      ...arrInstrucoes.value.map((i) => {
        i.enviada = false;
        i.escrita = false;
        i.resultado = false;
        i.commitada = false;
        i.lixo = false;
        return i;
      }),
    ]);
    arrRegistrador.setValue([
      ...new Array(16)
        .fill({ nome: "", valor: "" })
        .map((i, ind) => ({ nome: `F${ind}`, valor: "" })),
    ]);
    arrEstacaoReserva.setValue([
      ...arrEstacaoReserva.value.map((er) => {
        er.A = undefined;
        er.Ciclos = undefined;
        er.busy = false;
        er.operacao = undefined;
        er.registradorSendoUtilizado = undefined;
        er.VJ = undefined;
        er.VK = undefined;
        er.destino = undefined;
        er.QJ = undefined;
        er.QK = undefined;
        er.idInstrucao = undefined;
        return er;
      }),
    ]);
    setCicloAtual(0);
    arrBufferReordenamento.setValue([]);
    setConfirmado(true);
  };

  const onCliqueResetar = () => {
    setConfirmado(false);
    setCicloAtual(0);
    setQuantidadeInstrucoes(1);
    arrRegistrador.setValue([
      ...new Array(16)
        .fill({ nome: "", valor: "" })
        .map((i, ind) => ({ nome: `F${ind}`, valor: "" })),
    ]);
    arrTipoRegistrador.setValue(
      Object.keys(TipoRegistrador).map((i: any) => {
        return {
          quantidade: 1,
          TipoRegistrador: i,
        };
      })
    );
    arrCicloPorInstrucao.setValue(
      Object.keys(TipoInstrucao).map((i: any) => {
        return {
          quantidade: 1,
          TipoInstrucao: i,
        };
      })
    );
    const instrucaoDefault = arrInstrucoes.value[0];
    instrucaoDefault.nome = "Add";
    instrucaoDefault.input1 = "";
    instrucaoDefault.input2 = "";
    instrucaoDefault.input3 = undefined;
    instrucaoDefault.enviada = false;
    instrucaoDefault.resultado = false;
    instrucaoDefault.escrita = false;
    arrInstrucoes.setValue([...[instrucaoDefault]]);
    arrBufferReordenamento.setValue([]);
  };

  return (
    <Wrapper>
      <Container>
        <WrapperButton>
          <button
            className="myButton"
            style={{ marginRight: "15px" }}
            onClick={() => onCliqueConfirmar()}
          >
            Confirmar
          </button>
        </WrapperButton>
        <div>
          <button className="myButton" onClick={() => onCliqueResetar()}>
            Resetar
          </button>
        </div>
      </Container>
    </Wrapper>
  );
};

export default BotoesConfimarResetar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  .myButton {
    background:  #dfdfdf;
    background-color: #ededed;
    border-radius: 8px;
    border: 0;
    display: inline-block;
    cursor: pointer;
    color: #777777;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
  }
  .myButton:active {
    background: #a1a1aa;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 15px;
`;

const WrapperButton = styled.div`
  margin-right: 10px;
`;
