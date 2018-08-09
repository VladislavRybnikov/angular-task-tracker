import { Injectable } from '@angular/core';
import { WorkTaskUser } from '../models/work-task-user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenManagerService } from './token-manager.service';
import { HeaderCreatorService } from './helpers/header-creator.service';

@Injectable({
  providedIn: 'root'
})
export class WorkTaskUserService {

  readonly baseUrl = "";

  constructor(private http: HttpClient,
    private tokenManager: TokenManagerService,
     private headerCreator: HeaderCreatorService) { }

  public getCurrentUser()
  {
    if(!this.tokenManager.hasToken())
    {
      throw 'Access denied';
    }

    const url = `${this.baseUrl}/current/info`;

    const token = this.tokenManager.getToken();

    const authHeader = this.headerCreator
      .getAuthorizationHeaders(token);

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
      .getAuthorizationHeaders(token);

    return this.http.get<WorkTaskUser>(url, authHeader);
    
  }

}
