export type UserRole = 'Student' | 'Educator';

export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  role: UserRole;
  createdAt?: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  phoneNumber?: string;
  password: string;
  role: UserRole;
  otp: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user: User;
  errors?: Array<{ field: string; message: string }>;
}