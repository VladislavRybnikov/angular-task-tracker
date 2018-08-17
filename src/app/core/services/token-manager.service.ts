import { Injectable } from '@angular/core';
import { TokenModel } from '../models/token-model';

@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {

  private tokenKey:string = 'app_token';

  public hasToken()
  {
    let storedToken:string = localStorage.getItem(this.tokenKey);
    if(!storedToken)
    {
      return false;
    }

    return true;
  }

  public setToken(content:TokenModel)
  {
    localStorage.setItem(this.tokenKey, JSON.stringify(content));
  }

  public deleteToken()
  {
    localStorage.removeItem(this.tokenKey);  
  }

  public getToken():TokenModel
  {
    
    let storedToken:TokenModel = JSON.parse(localStorage.getItem(this.tokenKey));
    if(!storedToken) throw 'no token found';
    return storedToken;    
  }
}
