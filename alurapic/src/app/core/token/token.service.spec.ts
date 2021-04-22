import { TokenService } from "./token.service"

xdescribe('O serviço TokenService', () => {
  let token;
  let service;

  it ('Deve ser instanciado', () => {
    // const service = new TokenService();
    expect(service).toBeTruthy();
  })
  it ('Deve guardar um token', () => {
    // const token = 'testetoken';
    // const service = new TokenService();
    service.setToken(token);
    expect(service.hasToken()).toBeTruthy();
    expect(service.getToken()).toBe('testetoken')
  });
  it ('Deve remover um token', () => {
    // const token = 'testetoken';
    // const service = new TokenService();
    service.setToken(token);
    service.removeToken()
    expect(service.hasToken()).toBeFalsy();
    expect(service.getToken()).toBeFalsy();
  })

  afterEach(() => {
    localStorage.clear()
  })
  beforeEach(() => {
    token = 'testetoken';
    service = new TokenService();
  })
})