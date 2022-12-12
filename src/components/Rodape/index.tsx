import { useListaParticipantes } from "../../state/hook/useListaParticipantes"
import {useNavigate} from "react-router-dom";
import styles from "./Rodape.module.css";

export const Rodape = () => {

    const participantes = useListaParticipantes();

    const navegarPara = useNavigate();

    const iniciar = () => {
        navegarPara('/sorteio');
    }

    return (
        <>
            <footer className={styles.rodapeConfiguracoes}>
                <button
                className={styles.botao}
                    disabled={participantes.length < 3}
                    onClick={iniciar}
                    >
                    Iniciar brincadeira
                </button>
            </footer>
        </>
    )
}