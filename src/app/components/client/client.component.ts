import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { IApiResponse } from '../../model/interface/role';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { AlertComponent } from "../../reusables/alert/alert.component";
import { ButtonComponent } from "../../reusables/button/button.component";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, DatePipe, AlertComponent, ButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  clientObject: Client = new Client();
  clientList: Client[] = [];

  currentDate: Date = new Date()

  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService
      .getAllClients()
      .subscribe((response: IApiResponse<Client>) => {
        console.log(response.data)
        this.clientList = response.data;
      });
  }

  onSaveClient() {
    this.clientService
      .addClient(this.clientObject)
      .subscribe((response: IApiResponse<Client>) => {
        if (response.result) {
          alert('Client created successfully');
          this.clientObject = new Client();
          this.loadClients();
        } else {
          alert(response.message);
        }
      });
  }

  onDeleteClient(id: number) {
    const isDeleted = confirm('Are you sure you want to perform this action?');

    if (isDeleted) {
      this.clientService
        .deleteClient(id)
        .subscribe((response: IApiResponse<Client>) => {
          if (response.result) {
            alert('Client deleted successfully');
            this.clientObject = new Client();
            this.loadClients();
          } else {
            alert(response.message);
          }
        });
    }
  }

  onEditClient(client: Client) {
    this.clientObject = client
  }

  onResetClientForm() {
    this.clientObject = new Client()
  }
}
