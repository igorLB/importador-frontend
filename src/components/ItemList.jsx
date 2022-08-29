import React from 'react'
import Table from 'react-bootstrap/Table';
import Item from './Item'

function ItemList() {
    const myArr = Array(10)

  return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Coluna Excel</th>
                <th>Tipo do dado</th>
                <th>Mapeamento</th>
            </tr>
        </thead>
        <tbody>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
            <Item />
        </tbody>
    </Table>
  )
}

export default ItemList