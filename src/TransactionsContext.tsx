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

interface ItransactionsProviderProps {
    children : ReactNode;
}

export const TransactionsContext = createContext<ITransaction[]>([])



export function TransactionsProvider({ children }: ItransactionsProviderProps) {
    
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    },[])

    return (
        <TransactionsContext.Provider value={transactions}>
            { children }
        </TransactionsContext.Provider> 
    )
}