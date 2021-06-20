import { useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal( { isOpen, onRequestClose }: NewTransactionModalProps) {
    
    
    const [type, setType] = useState('deposit')

    
    return (
        <Modal isOpen={isOpen}
               onRequestClose={onRequestClose}
               overlayClassName="react-modal-overlay"
               className="react-modal-content" //Essas classes estão estilizadas no estilo global da aplicação 
         >
             <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close" //Estilo desse botão está no global
             >
                 <img src={closeImg} alt="Fechar Modal"/>
             </button>


               <Container>

                 <h2>Cadastrar Transação</h2>

                 <input 
                    placeholder="Título" 
                 />

                 <input 
                    type="number"
                    placeholder="Valor" 
                 />

                 <TransactionTypeContainer>
                    <RadioBox
                        type="button" 
                        isActive={type === 'deposit'}
                        onClick={ () => { setType('deposit') }}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button" 
                        isActive={type === 'withdraw'}
                        onClick={ () => { setType('withdraw') }}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saida"/>
                        <span>Saida</span>
                    </RadioBox>
                 </TransactionTypeContainer>

                 <input 
                    placeholder="Categoria" 
                 />

                 <button type="submit">
                     Cadastrar
                 </button>

               </Container>
        </Modal>
    )   
}