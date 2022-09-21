import { Dropdown } from "./Dropdown";

import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// testar funcionalidades
// 1 - Dropdown começa fechado
// 2 - Exibir opções quando o menu é clicado
// 3 - Ao selecionar um item, fechar a lista e exibir opção selecionada

const options = [{id: 1, name:"Bulbasaur"}, {id: 2, name:"Charmander"}, {id: 3, name:"Pikachu"}]

describe('Dropdown', () => {
  it('deve iniciar fechado', () => {
    render(<Dropdown title='Selecione o pokemon' onSelect={() => {}}/>)

    expect(screen.queryByText(options[0].name)).not.toBeInTheDocument()
    expect(screen.queryByText(options[1].name)).not.toBeInTheDocument()
    expect(screen.queryByText(options[2].name)).not.toBeInTheDocument()
    // expect(screen.queryByRole('menuitem')).not.toBeInTheDocument()
  })

  it('exibir opções quando aberto', () => {
    render(<Dropdown title='Selecione o pokemon' onSelect={() => {}}/>)

    expect(screen.queryByText(options[0].name)).not.toBeInTheDocument()
    expect(screen.queryByText(options[1].name)).not.toBeInTheDocument()
    expect(screen.queryByText(options[2].name)).not.toBeInTheDocument()
    // expect(screen.queryByRole('menuitem')).not.toBeInTheDocument()

    const button = screen.getByRole('button')
    userEvent.click(button)
    
    expect(screen.getByRole('menuitem', {name: options[0].name})).toBeInTheDocument()
    expect(screen.getByRole('menuitem', {name: options[1].name})).toBeInTheDocument()
    expect(screen.getByRole('menuitem', {name: options[2].name})).toBeInTheDocument()
  }) 

  it('deve exibir a opção selecionada e fechar o dropdown', () => {
    const onSelect = jest.fn()
    render(<Dropdown title='Selecione o pokemon' onSelect={onSelect}/>)

    const button = screen.getByRole('button')
    userEvent.click(button)
    
    expect(screen.getByRole('menuitem', {name: options[0].name})).toBeInTheDocument()
    expect(screen.getByRole('menuitem', {name: options[1].name})).toBeInTheDocument()
    expect(screen.getByRole('menuitem', {name: options[2].name})).toBeInTheDocument()

    userEvent.click(screen.getByRole('menuitem', {name: options[1].name}))

    expect(onSelect).toHaveBeenCalledWith(options[1])

    expect(screen.queryByRole('menuitem')).not.toBeInTheDocument()
  })
})