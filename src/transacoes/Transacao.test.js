import React from 'react';
import Transacao from './Transacao'
import {render,screen} from '@testing-library/react';


describe('Componente de transação do extrato', () =>{
    it('O snapshot do componente deve permanecer sempre o mesmo',()=>{
        //o snapshot pode ser atualizado apertando "u"
        
        const{container} = render(<Transacao
            data="04/04/2021"
            tipo="saque"
            valor="10.00"
        
        />)
        expect(container.firstChild).toMatchSnapshot()
    })
})