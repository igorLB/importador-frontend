import React from 'react'
import { Form } from 'react-bootstrap'

function Item() {
  return (
    <tr>
        <td>
            <Form.Control type="text" placeholder='Nome da coluna' />
        </td>
        <td>
            <Form.Select>
                <option value="">Nomes</option>
                <option value="">Número Inteiro</option>
                <option value="">Email</option>
                <option value="">Moeda</option>
            </Form.Select>
        </td>
        <td>
            <Form.Select>
                <option value="">Nº do processo</option>
                <option value="">Nome do Autor</option>
                <option value="">CPF do autor</option>
                <option value="">Vara</option>
                <option value="">Cormaca</option>
                <option value="">Valor da provisão</option>
            </Form.Select>
        </td>
        
    </tr>
  )
}

export default Item