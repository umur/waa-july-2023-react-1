export interface User {
  id: number;
  firstName: string;
  lastName: string;
  roles: string[];
  imageUrl?: string;
  token?: string;
}
