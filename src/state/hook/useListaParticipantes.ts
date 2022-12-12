import {useRecoilValue} from "recoil";
import { listaParticipantesState } from "../atom";

export const useListaParticipantes = () => {
    return useRecoilValue(listaParticipantesState);
}