import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ServiceRequestInterface {
  id?: string;
  issue_description: string;
  status: string;
  priority: string;
  user_id?: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface ServiceRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  issue_description?: string;
  status?: string;
  priority?: string;
  user_id?: string;
  company_id?: string;
}
