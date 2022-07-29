import { AssentoIndividual } from "./styledAssento"
import { useState } from "react";

export default function Assento({assento}) {
    //const [assentoDisponivel, setAssentoDisponivel] = useState(assento.isAvailable);
    const [assentoSelecionado, setAssentoSelecionado] = useState(assento.isSelected);


    function selecionarAssento (assento) {
        if (!assento.isAvailable) {
            alert("Esse assento não está disponível!")
            return
        }
        setAssentoSelecionado(!assentoSelecionado);
        assento.isSelected = !assento.isSelected;
    }

    return (
        <AssentoIndividual
            corAssento={assento.isAvailable ? `${!assentoSelecionado ? "#C3CFD9" : "#8DD7CF"}` : "#FBE192"}
            corBorda={assento.isAvailable ? `${!assentoSelecionado ? "#808F9D" : "#1AAE9E"}` : "#F7C52B"} 
            onClick={() => selecionarAssento(assento)}
            >
            {assento.name}
        </AssentoIndividual>
    )
}