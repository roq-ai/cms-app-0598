const mapping: Record<string, string> = {
  companies: 'company',
  'service-requests': 'service_request',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
