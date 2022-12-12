import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../state/hook/useListaParticipantes";
import { Sorteio } from "./Sorteio";

jest.mock('../state/hook/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
})

describe("na página de sorteio", () => {
    const participantes = [
        "Ana",
        "Catarina",
        "José"
    ]
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test("todos os participantes podem exibir o seu amigo secreto", () => {

        render(<RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )
        const opcoes = screen.queryAllByRole("option");
        expect(opcoes).toHaveLength(participantes.length);
    })
})