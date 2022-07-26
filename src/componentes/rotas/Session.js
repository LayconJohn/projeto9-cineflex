import { useParams } from "react-router-dom"

export default function Session() {
    const {idFilme} = useParams()
    
    return (
        <>
            Filme {idFilme}
        </>
    )
}