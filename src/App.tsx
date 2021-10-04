// Packages
import { useState } from "react";
import Modal from "react-modal";

// Components
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

// Context
import { TransactionsProvider } from "./TransactionsContext";

// Styles
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransacionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransacionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransacionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
