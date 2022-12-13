import { useRecoilValue } from "recoil";
import { resultadoAmigoSecreto } from "../atom";

export const useResultadoSorteio = (): Map<string, string> => {
    return useRecoilValue(resultadoAmigoSecreto);
}