import { Request } from 'express';

export type UserRole = 'Student' | 'Educator';

export interface JWTPayload {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}

export interface AuthenticatedRequest extends Request {
  user?: JWTPayload;
}
