import { useListaParticipantes } from "../../state/hook/useListaParticipantes"

export const Sorteio = () => {
const participantes = useListaParticipantes();

    return(
        <>
        <section>
            <form>
        <select name="participanteDaVez" id="participanteDaVez">
          {participantes.map(participante => <option key={participante}>{participante}</option>)}
        </select>
            </form>
        </section>
        </>
    )
}