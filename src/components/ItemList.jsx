import React from 'react'
import Table from 'react-bootstrap/Table';
import Item from './Item'
import NewLineButton from './NewLineButton';

function ItemList() {
    const [itemsCount, setItemsCount] = React.useState(1);

    function handleAddNewItem() {
        setItemsCount(itemsCount + 1);
    }

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
        {[...Array(itemsCount)].map((e, i) => <Item key={i} />)}
        </tbody>
        <tfoot>
            <tr>
                <td 
                    colSpan={3}
                    style={{textAlign: 'center'}}
                >
                    <NewLineButton onClick={handleAddNewItem} />
                </td>
            </tr>
        </tfoot>
    </Table>
  )
}

export default ItemList