import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api'


interface ITransaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// interface ITransactionInput {
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
// } //Posso fazer o tipo dos inputs assim

type ITransactionInput = Omit<ITransaction, 'id' | 'createdAt'> 

//type ItransactionInput = Pick<ITransaction, 'title' | 'amout' | 'type' | 'category'>;

interface ItransactionsProviderProps {
    children : ReactNode;
}

interface ITransactionsContextData {
    transactions: ITransaction[];
    createTransaction: (transaction: ITransactionInput) => void;
}



export const TransactionsContext = createContext<ITransactionsContextData>(
    {} as ITransactionsContextData
)



export function TransactionsProvider({ children }: ItransactionsProviderProps) {
    
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    },[])

    function createTransaction(transaction : ITransactionInput){

        api.post("/transactions",transaction)
    }

    return (
        <TransactionsContext.Provider value={{ transactions , createTransaction}}>
            { children }
        </TransactionsContext.Provider> 
    )
}