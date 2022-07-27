import  {TituloForm, InputForm, BotaoForm, AreaForms} from './styledForm';

export default function Form(  ) {

    return (
        <AreaForms>
            <form>
                <TituloForm> Nome do comprador </TituloForm>
                <InputForm
                    type="text" 
                    placeholder='Digite seu nome '
                /> 

                <TituloForm> CPF do comprador </TituloForm>
                <InputForm 
                    type="text" 
                    placeholder='Digite seu CPF... '
                />

                <BotaoForm>Reservar Assento(s)</BotaoForm>
            </form>
        </AreaForms>
    )
}