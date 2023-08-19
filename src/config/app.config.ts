interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['System Administrator'],
  tenantName: 'Company',
  applicationName: 'CMS App',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
