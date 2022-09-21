import math from "./math";

const { sum, sub } = math()

describe('funções math', () => {
  const a = 1
  const b = 2
  it('somar dois números', () => {
    expect(sum(a,b)).toBe(3)
  })
  
  it('subtrair dois números', () => {
    expect(sub(b,a)).toBe(1)
  })

  it('somar valores inválido deve retornar mensagem de erro', () => {
    expect(sum(a, 'a')).toEqual({error: 'parâmetro(s) inválido(s)'})
  })
  it('subtrair valores inválido deve retornar mensagem de erro', () => {
    expect(sub(a, 'a')).toEqual({error: 'parâmetro(s) inválido(s)'})
  })
})
