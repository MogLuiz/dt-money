import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer } from './styles'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal( { isOpen, onRequestClose }: NewTransactionModalProps) {
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
                    <button type="button">
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </button>

                    <button type="button">
                        <img src={outcomeImg} alt="Saida"/>
                        <span>Saida</span>
                    </button>
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