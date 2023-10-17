import { Dropdown } from "./Dropdown";

import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// testar funcionalidades
// 1 - Dropdown começa fechado
// 2 - Exibir opções quando o menu é clicado
// 3 - Ao selecionar um item, fechar a lista e exibir opção selecionada

const options = [{id: 1, name:"Bulbasaur"}, {id: 2, name:"Charmander"}, {id: 3, name:"Pikachu"}]
