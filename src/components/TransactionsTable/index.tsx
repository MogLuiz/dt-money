// Packages
import { useContext } from "react";

// Context
import { TransactionsContext } from "../../TransactionsContext";

// Styles
import { Container } from "./styles";

export function TransactionTable() {
  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  const { transactions } = useContext(TransactionsContext);

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRl",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.type}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
