import React, { useContext } from 'react';
import styled from 'styled-components';
import { IntrucaoContext } from '../../App';

const InputInstrucoes: React.FC = () => {

    const {
        quantidadeInstrucoes,
        setQuantidadeInstrucoes,
    } = useContext(IntrucaoContext);

    return (
        <Wrapper>
            <div
                className='qtd-instrucoes-wrapper'
            >
                <div className='qtd-instrucoes'>
                    <button
                        className='myButtonLeft'
                        onClick={() => { if (quantidadeInstrucoes === 1) return; setQuantidadeInstrucoes(quantidadeInstrucoes - 1); }}
                    >
                        -
                    </button>
                    <label
                        className='numeroInstrucoes'
                    >
                        {quantidadeInstrucoes}
                    </label>
                    <button
                        className='myButtonRight'
                        onClick={() => setQuantidadeInstrucoes(quantidadeInstrucoes + 1)}
                    >
                        +
                    </button>

                </div>
            </div>

        </Wrapper >
    );
}

export default InputInstrucoes;

const Wrapper = styled.div`
	display: flex;
    position: relative;
	align-items: center;
    margin-left: 15px;
    margin-right: 180px;

    .qtd-instrucoes-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        .qtd-instrucoes{
            display: flex;
            flex-direction: row;
        }
    }

    .numeroInstrucoes{
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
    }
    
    .myButtonLeft {
        box-shadow: inset 0px 1px 0px 0px #ffffff;
        background: linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
        background-color: #ededed;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        border: 1px solid #dcdcdc;
        display: inline-block;
        cursor: pointer;
        color: #777777;
        font-family: Arial;
        font-size: 15px;
        font-weight: bold;
        padding: 6px 24px;
        text-decoration: none;
        text-shadow: 0px 1px 0px #ffffff;
    }
    .myButtonLeft:hover{
	    background: linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
	    background-color: #dfdfdf;
    }
    .myButtonLeft:active{
	    position: relative;
	    top: 1px;
    }
    .myButtonRight {
        box-shadow: inset 0px 1px 0px 0px #ffffff;
        background: linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
        background-color: #ededed;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        border: 1px solid #dcdcdc;
        display: inline-block;
        cursor: pointer;
        color: #777777;
        font-family: Arial;
        font-size: 15px;
        font-weight: bold;
        padding: 6px 24px;
        text-decoration: none;
        text-shadow: 0px 1px 0px #ffffff;
    }
    .myButtonRight:hover{
	    background: linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
	    background-color: #dfdfdf;
    }
    .myButtonRight:active{
	    position: relative;
	    top: 1px;
    }
`;
