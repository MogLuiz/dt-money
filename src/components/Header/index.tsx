// Assets
import logoImg from "../../assets/logo.svg";

// Styles
import { Container, Content } from "./styles";

// Types
import { HeaderProps } from "./types";

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
