import { useState } from "react"
// import './Dropdown.css'

// 1 - Dropdown começa fechado
// 2 - Exibir opções quando o menu é clicado
// 3 - Ao selecionar um item, fechar a lista e exibir opção selecionada

const POKES = [{id: 1, name:"Bulbasaur"}, {id: 2, name:"Charmander"}, {id: 3, name:"Pikachu"}]

export const Dropdown = ({title, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [options] = useState(POKES)

  const handleSelection = (option) => {
    onSelect(option)
    setIsOpen(false)
  }
  return (
    <div className="c-dropdown">
      <button onClick={() => setIsOpen(true)}>{title}</button>
      {isOpen && (
        <ul role="menu">
          {options.map((op) => {
            return (
              <li
                key={op.id}
                role="menuitem"
                onClick={() => handleSelection(op)}
              >
                {op.name}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}