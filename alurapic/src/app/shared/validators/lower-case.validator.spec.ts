import { isLowerCase } from "./lower-case.validator";

xdescribe('A função isLowerCase', () => {
  it('Deve confirmar quando recebe um texto em cx baixa', () => {
    const valor = 'gabi';
    const resultado = isLowerCase(valor);
    expect(resultado).toBeTruthy();
  })
  it('Deve verificar quando recebe um texto sem cx baixa', () => {
    expect(isLowerCase('GabRiela')).toBeFalsy();
  })
})