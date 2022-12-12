import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Formulario } from "./Formulario";

describe('O comportamento do formulario.tsx', () => {
    test('quando input está vazio, novos participantes não podem ser chamados', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const botao = screen.getByRole('button');
        expect(input).toBeInTheDocument();
        expect(botao).toBeDisabled();
    })

    test('adicionar um participante caso exista um nome preenchido', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const botao = screen.getByRole('button');
        //inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Daniela Leguari'
            }
        })
        //clicar no botão de submeter
        fireEvent.click(botao);
        //garantir que o input esteja com o foco ativo
        expect(input).toHaveFocus();
        //garantir que o input não tenha um valor
        expect(input).toHaveValue("");
    })

    test('nomes duplicados não podem ser adicionados na lista', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const botao = screen.getByRole('button');

        fireEvent.change(input, {
            target: {
                value: 'Daniela Leguari'
            }
        });
        fireEvent.click(botao);
        fireEvent.change(input, {
            target: {
                value: 'Daniela Leguari'
            }
        });
        fireEvent.click(botao);

        const mensagemErro = screen.getByRole('alert');

        expect(mensagemErro.textContent).toBe('Nomes duplicados não são permitidos!');
    })

    test('a mensagem de erro deve sumir após os timers', () => {
        jest.useFakeTimers()
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const botao = screen.getByRole('button');

        fireEvent.change(input, {
            target: {
                value: 'Daniela Leguari'
            }
        });
        fireEvent.click(botao);
        fireEvent.change(input, {
            target: {
                value: 'Daniela Leguari'
            }
        });
        fireEvent.click(botao);

        let mensagemErro = screen.queryByRole('alert');
        expect(mensagemErro).toBeInTheDocument();
        //esperar N segundos

        act(() => {
            jest.runAllTimers();
        });

        mensagemErro = screen.queryByRole('alert');
        expect(mensagemErro).toBeNull();
    })
})

