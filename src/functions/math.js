const math = () => {
  const sum = (a, b) => {
    if (typeof a !== 'number' || typeof b !== "number")
      return {error: 'parâmetro(s) inválido(s)'}
    return a + b
  }

  const sub = (a, b) => {
    if (typeof a !== 'number' || typeof b !== "number")
      return {error: 'parâmetro(s) inválido(s)'}
    return a - b
  }

  return {sum, sub}
}

export default math