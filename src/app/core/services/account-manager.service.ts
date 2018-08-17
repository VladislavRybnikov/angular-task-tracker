import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '../models/login-model';
import { RegistrationModel } from '../models/registration-model';
import { TokenManagerService } from './token-manager.service';
import { HeaderCreatorService } from './helpers/header-creator.service'; 
import { Observable } from '../../../../node_modules/rxjs';
import { TokenModel } from '../models/token-model';

@Injectable({
  providedIn: 'root'
})
export class AccountManagerService {

  readonly baseUrl = "http://localhost:6850/api/account";

  constructor(private http: HttpClient,
     private tokenManager: TokenManagerService,
      private headerCreator: HeaderCreatorService) { }

  login(model: LoginModel): Observable<TokenModel>
  {
    const url = `${this.baseUrl}/login`;

    return this.http.post<TokenModel>(url, model);
  }

  register(model: RegistrationModel) : Observable<TokenModel>
  { 
    const url = `${this.baseUrl}/register`;

    return this.http.post<TokenModel>(url, model);
  }

  logout()
  {
    if(!this.tokenManager.hasToken())
    {
      throw 'empty token.';
    }
    this.tokenManager.deleteToken();
  }

  isAuthorized()
  {
    return this.tokenManager.hasToken();
  }

}
