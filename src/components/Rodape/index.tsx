import { useListaParticipantes } from "../../state/hook/useListaParticipantes"
import {useNavigate} from "react-router-dom";
import styles from "./Rodape.module.css";
import { useSorteador } from "../../state/hook/useSorteador";

export const Rodape = () => {

    const participantes = useListaParticipantes();

    const navegarPara = useNavigate();

    const sortear= useSorteador();

    const iniciar = () => {
        sortear();
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
                <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
            </footer>
        </>
    )
}