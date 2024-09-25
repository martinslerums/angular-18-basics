import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IApiResponse, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  masterService = inject(MasterService);
  designationList: IDesignation[] = [];
  isLoading: boolean = true;

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe({
      next: (result: IApiResponse<IDesignation>) => {
        this.designationList = result.data;
        this.isLoading = false;
      },
      error: (error) => {
        alert('API failed / Network down');
        this.isLoading = false;
      },
      // complete callback is optional
      complete: () => {
        console.log('Request completed');
      },
    });
  }
}
