import { useParams } from "react-router-dom";

export default function Assentos(){
    const {idSessao} = useParams();

    return (
        <>
            Assentos {idSessao}
        </>
    )
}