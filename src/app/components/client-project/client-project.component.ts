import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ClientService } from '../../services/client.service';
import {
  IApiResponse,
  IClientProject,
  IEmployee,
  IProjectForm,
} from '../../model/interface/role';
import { Client } from '../../model/class/Client';
import { DatePipe } from '@angular/common';
import { AlertComponent } from "../../reusables/alert/alert.component";

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
})
export class ClientProjectComponent implements OnInit {
  //Reactive Form
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0), // PrimaryKey normally initialize with 0
    projectName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(null),
  });

  clientService = inject(ClientService);
  employeeList: IEmployee[] = [];
  clientList: Client[] = [];

  firstName = signal("Angular 18");
  projectList = signal<IClientProject[]>([])


  ngOnInit(): void {
    const name = this.firstName()
    this.loadEmployees();
    this.loadClients();
    this.loadClientProjects()
  }

  ChangeFName() {
    this.firstName.set("ReactJS")
  }

  loadEmployees() {
    this.clientService
      .getAllEmployees()
      .subscribe((response: IApiResponse<IEmployee>) => {
        this.employeeList = response.data;
      });
  }

  loadClients() {
    this.clientService
      .getAllClients()
      .subscribe((response: IApiResponse<Client>) => {
        this.clientList = response.data;
      });
  }

  loadClientProjects() {
    this.clientService.getAllClientProjects().subscribe((response: IApiResponse<IClientProject>) => {
      this.projectList.set(response.data)
    })
  }

  onSaveProject() {
    //This way we using .value on projectForm we get an OBJECT
    const formValues = this.projectForm.value;

    if (!this.projectForm.valid) {
      alert('Please fill all required fields');
      return;
    }

    formValues.clientId = formValues.clientId || 0; 

    this.clientService
      .addClientProject(formValues)
      .subscribe((response: IApiResponse<IProjectForm>) => {
        if (response.result) {
          alert('Project Created Successfully');
        } else {
          alert(response.message);
        }
      });
  }
}
