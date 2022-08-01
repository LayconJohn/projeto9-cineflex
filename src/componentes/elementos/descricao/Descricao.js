import {DescricaoTela} from './styledDescricao';

export default function Descricao( {subtitulo, corDescricao} ) {
    return (
        <DescricaoTela corDescricao={corDescricao}>
            {subtitulo}
        </DescricaoTela>
    )
}