import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment.development';

import { IApiResponse, IClientProject, IEmployee, IProjectForm } from '../model/interface/role';
import { Constants } from '../constants/Constants';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAllClients(): Observable<IApiResponse<Client>> {
    return this.http.get<IApiResponse<Client>>(
      `${environment.API_URL}${Constants.API_METHOD.GET_ALL_CLIENTS}`
    );
  }

  getAllEmployees(): Observable<IApiResponse<IEmployee>> {
    return this.http.get<IApiResponse<IEmployee>>(
      `${environment.API_URL}${Constants.API_METHOD.GET_ALL_EMPLOYEES}`
    );
  }

  getAllClientProjects(): Observable<IApiResponse<IClientProject>> {
    return this.http.get<IApiResponse<IClientProject>>(
      `${environment.API_URL}${Constants.API_METHOD.GET_ALL_PROJECTS}`
    );
  }

  addClient(payload: Client): Observable<IApiResponse<Client>> {
    return this.http.post<IApiResponse<Client>>(
      `${environment.API_URL}AddUpdateClient`,
      payload
    );
  }

  addClientProject(payload: Client): Observable<IApiResponse<IProjectForm>> {
    return this.http.post<IApiResponse<IProjectForm>>(
      `${environment.API_URL}AddUpdateClientProject`,
      payload
    );
  }

  deleteClient(id: number): Observable<IApiResponse<Client>> {
    return this.http.delete<IApiResponse<Client>>(
      `${environment.API_URL}DeleteClientByClientId?clientId=${id}`
    );
  }
}
