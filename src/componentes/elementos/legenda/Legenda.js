import {EspacoLegenda, DescricaoLegenda, AssentoLegenda} from './styledLegenda';

function DescricaoAssento( {corLegenda, bordaLegenda, tituloLegenda}) {
    return (
        <DescricaoLegenda>
            <AssentoLegenda corLegenda={corLegenda} bordaLegenda={bordaLegenda}></AssentoLegenda>
            <p>{tituloLegenda}</p>
        </DescricaoLegenda>
    )
}

export default function Legenda() {
    return(
        <EspacoLegenda>
            <DescricaoAssento corLegenda="#8DD7CF" bordaLegenda="#1AAE9E" tituloLegenda="Selecionado"/>
            <DescricaoAssento corLegenda="#C3CFD9" bordaLegenda="#7B8B99" tituloLegenda="Disponível"/>
            <DescricaoAssento corLegenda="#FBE192" bordaLegenda="#F7C52B" tituloLegenda="Indisponível"/>
        </EspacoLegenda>
    )
}