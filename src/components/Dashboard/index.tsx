//Utils
import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";

// Style
import { Container } from "./styles";

export function Dashboard() {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}
