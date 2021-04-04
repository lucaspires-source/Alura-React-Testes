import React from "react";
import App, { calcularNovoSaldo } from "./App.js";
import {
  fireEvent,
  getByLabelText,
  getByText,
  render,
  screen,
} from "@testing-library/react";
describe("Componente Principal", () => {
  describe("Quando eu abro o app do banco", () => {
    it("o nome é exibido", () => {
      render(<App />);
      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });
    it("o saldo é exibido", () => {
      render(<App />);
      expect(screen.getByText("Saldo:")).toBeInTheDocument();
    });

    it("o botão de transação é exibido", () => {
      render(<App />);
      expect(screen.getByText("Realizar operação")).toBeInTheDocument();
    });
  });
  describe("Quando realizo uma transação", () => {
    it("um saque,o valor irá diminuir", () => {
      const valores = {
        transacao: "saque",
        valor: 50,
      };
      const novoSaldo = calcularNovoSaldo(valores, 150);
      expect(novoSaldo).toBe(100);
    });
  });

  it("um saque, a transação será realizada", () => {
    const { getByText, getByTestId, getByLabelText } = render(<App />);
    const saldo = getByText("R$ 1000");
    const transacao = getByLabelText("Saque");
    const valor = getByTestId("valor");
    const botaoTransacao = getByText("Realizar operação");
    expect(saldo.textContent).toBe("R$ 1000");
    fireEvent.click(transacao, { target: { value: "saque" } });
    fireEvent.change(valor, { target: { value: 10 } });
    fireEvent.click(botaoTransacao);
    expect(saldo.textContent).toBe('R$ 990');
  });

  it("um depósito,o valor irá aumentar", () => {
    const valores = {
      transacao: "deposito",
      valor: 50,
    };
    const novoSaldo = calcularNovoSaldo(valores, 150);
    expect(novoSaldo).toBe(200);
  });
});
