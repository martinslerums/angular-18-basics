export interface IRole {
  roleId: number;
  role: string;
}

export interface IDesignation {
  designationId: number;
  designation: string;
}

export interface IApiResponse<T> {
  message: string;
  result: boolean;
  data: T[];
}

export interface IEmployee {
  empName: string;
  empId: number;
  empCode: string;
  empEmailId: string;
  empDesignation: string;
  role: string;
}

export interface IProjectForm {
  clientProjectId: string
  projectName: string
  startDate: string
  expectedEndDate: string
  leadByEmpId: number
  completedDate: string
  contactPerson: string
  contactPersonContactNo: string
  totalEmpWorking: number
  projectCost: number
  projectDetails: string
  contactPersonEmailId: string
  clientId: number
}

export interface IClientProject {
  empName: string
  empId: number
  empCode: string
  empEmailId: string
  empDesignation: string
  projectName: string
  startDate: Date
  expectedEndDate: Date
  clientName: string
  clientProjectId: number
}
