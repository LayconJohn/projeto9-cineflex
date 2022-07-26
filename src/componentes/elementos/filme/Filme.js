import { PosterFilme } from "./styledFilme";

export default function Filme( {filme} ) {
    return (
        <PosterFilme key={filme.id}>
            <img src={filme.posterURL} alt={filme.title}/>
        </PosterFilme>
    )
}

