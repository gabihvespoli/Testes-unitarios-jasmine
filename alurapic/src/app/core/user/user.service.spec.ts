import { TokenService } from "../token/token.service";
import { UserService } from "./user.service"

fdescribe('O serviço UserService', () => {
  it('Deve ser instanciado', () => {
    const tokenService = new TokenService()
    const service = new UserService(tokenService);
    expect(service).toBeTruthy();
  });
  it('Deve através de um token, recuperar as informações do usuário', () => {
    const token ='tokenenormedobackendquenaofunfa';
    const service = new UserService(new TokenService());
    service.setToken(token);
    expect(service.isLogged()).toBeTruthy();
    expect(service.getUserName()).toBe('flavio');
  })
})