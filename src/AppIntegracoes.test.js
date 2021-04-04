import React from "react";
import App from "./App.js";
import {
  render,
  screen,
} from "@testing-library/react";
import api from "./api";

jest.mock('./api')
describe("Requisições para API", () => {
    it('Exibir lista de transações através da Api', () =>{
        api.listaTransacoes.mockResolvedValue([
            {
                "valor": 10,
                "transacao": "saque",
                "data": "10/08/2020",
                "id": 1
              },
              {
                "transacao": "deposito",
                "valor": 20,
                "data": "26/09/2020",
                "id": 2
              }
        ])

        render(<App/>)
        expect(screen.getByTestId('transacoes').children.length).toBe(2)
    })
})