import React from 'react';
import App from './App.js';
import {render,screen} from '@testing-library/react';
describe('Componente Principal', () =>{
  it('Mostrar o Nome do Banco',() =>{
    render(<App/>)
    expect(screen.getByText('ByteBank')).toBeInTheDocument();
  })
})