import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

export function TransactionTable() {

    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    },[])


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
                    <tr>
                        <td className="borderleft">Desenvolvimento de Website</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Freelancer</td>
                        <td className="borderright">19/06/2021</td>
                    </tr>

                    <tr>
                        <td className="borderleft">Faculdade</td>
                        <td className="withdraw">- R$ 570,00</td>
                        <td>Educação</td>
                        <td className="borderright">07/06/2021</td>
                    </tr>

                   
                </tbody>
            </table>
        </Container>
    )
}