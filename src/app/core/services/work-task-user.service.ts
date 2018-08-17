import { Injectable } from '@angular/core';
import { WorkTaskUser } from '../models/work-task-user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenManagerService } from './token-manager.service';
import { HeaderCreatorService } from './helpers/header-creator.service';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkTaskUserService {

  readonly baseUrl = "http://localhost:6850/api";

  constructor(private http: HttpClient,
    private tokenManager: TokenManagerService,
     private headerCreator: HeaderCreatorService) { }

  public getCurrentUser():Observable<WorkTaskUser>
  {
    if(!this.tokenManager.hasToken())
    {
      throw 'Access denied';
    }

    const url = `${this.baseUrl}/user/info`;

    const token = this.tokenManager.getToken();

    const authHeader = this.headerCreator
      .getAuthorizationHeaders(token.access_token);

    return this.http.get<WorkTaskUser>(url, authHeader);
  }

  public getUser(id: number)
  {
    if(!this.tokenManager.hasToken())
    {
      throw 'Access denied';
    }

    const url = `${this.baseUrl}/${id}/info`;

    const token = this.tokenManager.getToken();

    const authHeader = this.headerCreator
      .getAuthorizationHeaders(token.access_token);

    return this.http.get<WorkTaskUser>(url, authHeader);
    
  }

  public updateUser(model: WorkTaskUser):Observable<string>
  {
    if(!this.tokenManager.hasToken())
    {
      throw 'Access denied';
    }

    const url = `${this.baseUrl}/user/info`;

    const token = this.tokenManager.getToken();

    const authHeader = this.headerCreator
      .getAuthorizationHeaders(token.access_token);

    return this.http.post<string>(url, model, authHeader);
      
  }

}
