import { AssentoIndividual } from "./styledAssento"
import { useState } from "react";

export default function Assento({assento}) {
    const [assentoDisponivel, setAssentoDisponivel] = useState(assento.isAvailable)

    return (
        <AssentoIndividual disponivel={assentoDisponivel}>
            {assento.name}
        </AssentoIndividual>
    )
}