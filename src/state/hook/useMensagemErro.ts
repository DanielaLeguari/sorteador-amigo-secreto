import {useRecoilValue} from "recoil";
import { erroState } from "../atom"

export const useMensagemErro =() => {
    const mensagem = useRecoilValue(erroState)
    return mensagem;
}