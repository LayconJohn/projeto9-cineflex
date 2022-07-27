import { useNavigate } from "react-router-dom";
import {DetalheSessao, DiaSessao, Horarios, Horario} from './styledSessaoInfo';

export default function SessaoInfo( {dia } ) {
    const navigate = useNavigate();

    return (
        <DetalheSessao>
            <DiaSessao>{dia.weekday} - {dia.date}</DiaSessao>
            <Horarios>
                {dia.showtimes.map(session => 
                <Horario 
                    key={session.id} 
                    onClick={() => navigate(`/assentos/${session.id}`)}>
                        {session.name}
                </Horario>)}
            </Horarios>
        </DetalheSessao>
    )
}