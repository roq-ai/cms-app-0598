import { ServiceRequestInterface } from 'interfaces/service-request';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  service_request?: ServiceRequestInterface[];
  user?: UserInterface;
  _count?: {
    service_request?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
