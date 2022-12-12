import { render, screen } from "@testing-library/react";
import React from "module";
import { Formulario } from "./Formulario";

test('quando input está vazio, novos participantes não podem ser chamados', () =>{
    render(<Formulario />)
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const botao = screen.getByRole('button')
    expect(input).toBeInTheDocument()
    expect(botao).toBeDisabled()
})