import React from 'react'
import { Button } from 'react-bootstrap'

function NewLineButton({onClick}) {
  return (
    <Button 
        variant='outline-primary'
        onClick={onClick}
    >
        Adicionar Linha
    </Button>
  )
}

export default NewLineButton