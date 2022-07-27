import { EspacoFooter, PosterFooter, TituloFilme } from "./styledFooter"

export default function Footer( {informacoesFilme, children}) {
    return (
        <EspacoFooter>
            <PosterFooter>
                <img src={informacoesFilme.urlFilme} alt={informacoesFilme.nomeFilme} />
            </PosterFooter>
            <div>
                <TituloFilme> {informacoesFilme.nomeFilme} </TituloFilme>
                {children}
            </div>
        </EspacoFooter>
    )
}