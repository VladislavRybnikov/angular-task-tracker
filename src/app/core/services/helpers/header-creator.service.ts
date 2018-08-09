import { Injectable } from '@angular/core';
import { HttpHeaders } from '../../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderCreatorService {

  public getAuthorizationHeaders(tokenValue: string)
  {
    let headers = new HttpHeaders({
      'Authorization' : `bearer ${tokenValue}`
    });

    return { headers: headers };
  }
}
