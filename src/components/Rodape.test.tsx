import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../state/hook/useListaParticipantes";
import { Rodape } from "./Rodape";

jest.mock("../state/hook/useListaParticipantes", () => {
    return {
        useListaParticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

describe("quando não existe participantes suficientes", () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    })
    test("a brincadeira não pode ser iniciada", () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>)
        const botao = screen.getByRole("button");

        expect(botao).toBeDisabled();
    })
})

describe("quando existem participantes suficientes", () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(["Ana", "Beatriz", "Carlos"])
    })
    test("a brincadeira pode ser iniciada", () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>)

        const botao = screen.getByRole("button");
        expect(botao).not.toBeDisabled();
    })

    test("A brincadeira foi iniciada", () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>)
        const botao = screen.getByRole("button");
        fireEvent.click(botao)
        expect(mockNavegacao).toHaveBeenCalledTimes(1);
        expect(mockNavegacao).toHaveBeenCalledWith("/sorteio");
    })
})