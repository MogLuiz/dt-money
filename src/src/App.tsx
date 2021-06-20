import React, { useState } from "react";
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {


  const [isNewTransactionModalOpen, setIsNewTransacionModalOpen] = useState(false)

    function handleOpenNewTransactionModal() {
        setIsNewTransacionModalOpen(true)
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransacionModalOpen(false)
    } 


  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}


