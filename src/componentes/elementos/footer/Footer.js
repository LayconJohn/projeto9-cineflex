import { EspacoFooter, PosterFooter, TituloFilme } from "./styledFooter"

export default function Footer( {informacoesFilme}) {
    return (
        <EspacoFooter>
            <PosterFooter>
                <img src={informacoesFilme.urlFilme} alt={informacoesFilme.nomeFilme} />
            </PosterFooter>
            <TituloFilme> {informacoesFilme.nomeFilme} </TituloFilme>
        </EspacoFooter>
    )
}