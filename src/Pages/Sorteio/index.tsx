import { useState } from "react";
import { Cabecalho } from "../../components/Cabecalho";
import { Card } from "../../components/Card";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes";
import { useResultadoSorteio } from "../../state/hook/useResultadoSorteio";
import styles from './Sorteio.module.css';

export const Sorteio = () => {
    const participantes = useListaParticipantes();
    const [participanteDaVez, setParticipanteDaVez] = useState("");
    const [amigoScreto, setAmigoSecreto] = useState("");
    const resultado = useResultadoSorteio();

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!);
        }
    }

    return (
        <>
            <Cabecalho />
            <Card>
                <section className={styles.sorteio}>
                    <h2>Quem vai tirar o papelzinho?</h2>
                    <form onSubmit={sortear}>
                        <select
                            required
                            name="participanteDavez"
                            id="participanteDavez"
                            placeholder="Selecione o seu nome"
                            value={participanteDaVez}
                            onChange={evento => setParticipanteDaVez(evento.target.value)}
                        >
                            {participantes.map((participante:string) => <option key={participante}>{participante}</option>)}
                        </select>
                        <p>Clique em sortear para ver quem é seu amigo secreto!</p>
                        <button type="submit" className={styles.botaoSortear}>Sortear</button>
                    </form>
                    {amigoScreto && <p className={styles.resultado} role="alert">{amigoScreto}</p>}
                    <footer className="sorteio">
                        <img src="/imagens/aviao.png" className={styles.aviao} alt="Um desenho de um avião de papel" />
                    </footer>
                </section>
            </Card>
        </>
    )
}


