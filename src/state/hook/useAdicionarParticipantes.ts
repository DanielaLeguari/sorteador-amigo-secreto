import { useSetRecoilState, useRecoilValue } from "recoil";
import { erroState, listaParticipantesState } from "../atom";

//hook customizado
export const useAdicionarParticipante = () => {

    const setLista = useSetRecoilState(listaParticipantesState);

    const list = useRecoilValue(listaParticipantesState);

    const setErro = useSetRecoilState(erroState);

    return (nomeDoParticipante: string) => {
        if (list.includes(nomeDoParticipante)) {
            setErro('Nomes duplicados não são permitidos!');
            setTimeout(() => {
                setErro("");
            }, 5000)
            return
        }
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}