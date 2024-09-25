import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IApiResponse, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  // firstName: string = 'Angular Tutorial';
  // version: number = 18;
  // angularVersion = `Version ${this.version}`;
  // isActive: boolean = false;
  // currentDate: Date = new Date();
  // inputType: string = 'checkbox';
  // selectedState: string = '';
  // showWelcomeAlert () {
  //   alert("Welcome to Angular 18 Tutorual")
  // }
  // showMessage(message: string) {
  //   alert(message)
  // }

  //   THIS IS OLD WAY
  // constructor(private http: HttpClient) {
  // }

  // Angular 18 way
  http = inject(HttpClient);
  apiUrl: string =
    'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles';
  roleList: IRole[] = [];

  ngOnInit(): void {
    this.getAllRoles()
  }

  getAllRoles() {
    this.http.get<IApiResponse<IRole>>(this.apiUrl).subscribe((result: IApiResponse<IRole>) => {
      this.roleList = result.data;
    });
  }
}
