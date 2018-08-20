import { Injectable } from '@angular/core';
import { WorkTask } from '../models/work-task';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { TokenManagerService } from './token-manager.service';
import { HeaderCreatorService } from './helpers/header-creator.service';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkTaskService {
  
  readonly baseUrl = "http://localhost:6850/api";
  readonly taskUrl = `${this.baseUrl}/task`;
  readonly userTasksUrl = `${this.baseUrl}/user/tasks`;

  constructor(private http: HttpClient,
    private tokenManager: TokenManagerService,
     private headerCreator: HeaderCreatorService) { }

  createWorkTask(model: WorkTask) : Observable<any>
  {
    if(!this.tokenManager.hasToken())
    {
      throw 'Access denied';
    }

    const url = this.taskUrl;

    const token = this.tokenManager.getToken();

    const authHeader = this.headerCreator
      .getAuthorizationHeaders(token.access_token);

    return this.http.post(url, model, authHeader);
  }

  updateWorkTask(model: WorkTask) : Observable<any>
  {
    if(!this.tokenManager.hasToken())
    {
      throw 'Access denied';
    }

    const url = `${this.taskUrl}/${model.Id}/info`;

    const token = this.tokenManager.getToken();

    const authHeader = this.headerCreator
      .getAuthorizationHeaders(token.access_token);

    return this.http.post(url, model, authHeader);
  }

  updateWorkTaskProgress(model: WorkTask) : Observable<any>
  {
    if(!this.tokenManager.hasToken())
    {
      throw 'Access denied';
    }

    const url = `${this.taskUrl}/${model.Id}/progress`;

    const token = this.tokenManager.getToken();

    const authHeader = this.headerCreator
      .getAuthorizationHeaders(token.access_token);

    return this.http.post(url, model, authHeader);
  }

  addPerformer(id: number, performerName: string) 
  : Observable<any>
  {
    if(!this.tokenManager.hasToken())
    {
      throw 'Access denied';
    }

    const url = `${this.taskUrl}/${id}/performers/${performerName}`;

    const token = this.tokenManager.getToken();

    const authHeader = this.headerCreator
      .getAuthorizationHeaders(token.access_token);

    return this.http.post(url, null, authHeader);
  }

  getAllPerformedTasks() : Observable<WorkTask[]>
  {
    if(!this.tokenManager.hasToken())
    {
      throw 'Access denied';
    }

    const url = `${this.userTasksUrl}/performed`;

    const token = this.tokenManager.getToken();

    const authHeader = this.headerCreator
      .getAuthorizationHeaders(token.access_token);

    return this.http.get<WorkTask[]>(url, authHeader);
  }

  getAllManagedTasks(): Observable<WorkTask[]>
  {
    if(!this.tokenManager.hasToken())
    {
      throw 'Access denied';
    }

    const url = `${this.userTasksUrl}/managed`;

    const token = this.tokenManager.getToken();

    const authHeader = this.headerCreator
      .getAuthorizationHeaders(token.access_token);

    return this.http.get<WorkTask[]>(url, authHeader);
  }

  delete(id: number): Observable<any>
  {
    if(!this.tokenManager.hasToken())
    {
      throw 'Access denied';
    }

    const url = `${this.taskUrl}/${id}`;

    const token = this.tokenManager.getToken();

    const authHeader = this.headerCreator
      .getAuthorizationHeaders(token.access_token);

    return this.http.post(url, null, authHeader);
  }

}
