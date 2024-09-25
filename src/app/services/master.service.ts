import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse, IDesignation } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})

export class MasterService {

  constructor(private http: HttpClient) { }

  getDesignations (): Observable<IApiResponse<IDesignation>>  {
    return this.http.get<IApiResponse<IDesignation>>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation")
  }
}
