import { AssentoIndividual } from "./styledAssento"
import { useState } from "react";

export default function Assento({assento}) {
    const [assentoDisponivel, setAssentoDisponivel] = useState(assento.isAvailable);
    const [assentoSelecionado, setAssentoSelecionado] = useState(assento.isSelected);
    const [corBorda, setCorBorda] = useState(assento.isAvailable ? "#808F9D" : "#F7C52B");


    function selecionarAssento (assento) {
        if (!assento.isAvailable) {
            alert("Esse assento não está disponível!")
            return
        }
        if (assento.isSelected) {
            setAssentoSelecionado(!assentoSelecionado);
        } else {
            setAssentoSelecionado(!assentoSelecionado);
        }

    }

    return (
        <AssentoIndividual
            corAssento={assento.isAvailable ? `${!assentoSelecionado ? "#C3CFD9" : "#8DD7CF"}` : "#FBE192"} 
            onClick={() => selecionarAssento(assento)}
            >
            {assento.name}
        </AssentoIndividual>
    )
}