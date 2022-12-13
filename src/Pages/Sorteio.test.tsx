import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../state/hook/useListaParticipantes";
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio";
import { Sorteio } from "./Sorteio";

jest.mock('../state/hook/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
})

jest.mock('../state/hook/useResultadoSorteio', () => {
    return {
        useResultadoSorteio: jest.fn()
    }
})

describe("na página de sorteio", () => {
    const participantes = [
        "Ana",
        "Catarina",
        "José"
    ]
    const resultado = new Map([
        ["Ana", "José"],
        ["Catarina", "Ana"],
        ["José", "Catarina"]
    ])

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
        (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
    })

    test("todos os participantes podem exibir o seu amigo secreto", () => {

        render(<RecoilRoot>
            <Sorteio />
        </RecoilRoot>
        )
        const opcoes = screen.queryAllByRole("option");
        expect(opcoes).toHaveLength(participantes.length);
    })

    test('o amigo secreto é exibido quando solicitado', () => {
        
        render(<RecoilRoot>
            <Sorteio />
        </RecoilRoot>)

        const select = screen.getByPlaceholderText("Selecione o seu nome");
        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        })

        const botao = screen.getByRole("button");
        fireEvent.click(botao);
        const amigoScreto = screen.getByRole("alert");
        expect(amigoScreto).toBeInTheDocument();
    })

})