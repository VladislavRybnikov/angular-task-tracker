import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '../models/login-model';
import { RegistrationModel } from '../models/registration-model';
import { TokenManagerService } from './token-manager.service';
import { HeaderCreatorService } from './helpers/header-creator.service'; 

@Injectable({
  providedIn: 'root'
})
export class AccountManagerService {

  readonly baseUrl = "";

  constructor(private http: HttpClient,
     private tokenManager: TokenManagerService,
      private headerCreator: HeaderCreatorService) { }

  login(model: LoginModel)
  {
    const url = `${this.baseUrl}/login`;

    let token = this.http.post<string>(url, model);

    this.tokenManager.setToken(token);
  }

  register(model: RegistrationModel)
  { 
    const url = `${this.baseUrl}/register`;

    let token = this.http.post<string>(url, model);

    this.tokenManager.setToken(token);
  }

  logout()
  {
    if(!this.tokenManager.hasToken())
    {
      throw 'empty token.';
    }

    const url = `${this.baseUrl}/logout`;

    let header = this.headerCreator.getAuthorizationHeaders
      (this.tokenManager.getToken());

    this.http.post(url, null, header);

    this.tokenManager.deleteToken();
  }

  isAuthorized()
  {
    this.tokenManager.hasToken();
  }

}
