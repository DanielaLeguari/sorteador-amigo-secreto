import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../../state/hook/useAdicionarParticipantes";
import { useMensagemErro } from "../../state/hook/useMensagemErro";
import styles from './Formulario.module.css';

export const Formulario = () => {
    const [nome, setNome] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const adicionarNaLista = useAdicionarParticipante();

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        adicionarNaLista(nome);
        setNome('');
        inputRef.current?.focus();
    }

    const mensagemErro = useMensagemErro();

    return (
        <>
            <form onSubmit={adicionarParticipante}>
                <div className={styles.grupoInputBtn}>
                <input
                    ref={inputRef}
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                    type='text'
                    placeholder='Insira os nomes dos participantes'
                />
                <button
                    disabled={!nome}
                >
                    Adicionar
                </button>
                </div>
                {mensagemErro && <p className={`${styles.alerta} ${styles.erro}`} role="alert">{mensagemErro}</p>}
            </form>
        </>

    )
}