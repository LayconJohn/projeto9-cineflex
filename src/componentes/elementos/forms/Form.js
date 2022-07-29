import axios from 'axios';
import { useNavigate } from 'react-router';

import  {TituloForm, InputForm, BotaoForm, AreaForms} from './styledForm';

export default function Form( { 
    assentos, 
    nomeComprador, 
    setNomeComprador, 
    cpfComprador, 
    setCpfComprador
} ) {

    const navigate = useNavigate();

    function reservarAssentos(e) {
        e.preventDefault();
        
        const listaIds = assentos.map( (value, index) => {
            if (value.isSelected) {
                return value.id
            } 
        })
        const info = {name: nomeComprador, cpf: cpfComprador, ids: listaIds.filter( id => id !== undefined)}
        console.log(info);

        const promisse = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", info);
        promisse.then( (res) => {
            console.log(res)
            alert("Pedido reservado com sucesso!");
            navigate("/sucesso");
        })
    }

    return (
        <AreaForms>
            <form onSubmit={(e) => reservarAssentos(e)}>
                <TituloForm> Nome do comprador </TituloForm>
                <InputForm
                    type="text" 
                    placeholder='Digite seu nome '
                    value={nomeComprador}
                    onChange={(e) => setNomeComprador(e.target.value)}
                    required
                /> 

                <TituloForm> CPF do comprador </TituloForm>
                <InputForm 
                    type="text" 
                    placeholder='Digite seu CPF... '
                    value={cpfComprador}
                    onChange={(e) => setCpfComprador(e.target.value)}
                    required 
                />

                <BotaoForm type="submit">Reservar Assento(s)</BotaoForm>
            </form>
        </AreaForms>
    )
}