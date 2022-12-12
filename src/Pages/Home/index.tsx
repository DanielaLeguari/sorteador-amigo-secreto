import { Cabecalho } from "../../components/Cabecalho"
import { Card } from "../../components/Card"
import { Formulario } from "../../components/Formulario"
import { ListaParticipantes } from "../../components/ListaParticipantes.tsx"
import { Rodape } from "../../components/Rodape"


export const Home = () => {
    return (
        <>
            <Cabecalho />
            <Card>
                <section>
                    <h2>
                        Vamos começar!
                    </h2>
                    <Formulario />
                    <ListaParticipantes />
                    <Rodape />
                </section>
            </Card>
        </>
    )
}