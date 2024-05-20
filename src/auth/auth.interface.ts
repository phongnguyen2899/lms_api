export interface JwtSign {
  access_token: string;
  refresh_token: string;
}

export interface JwtPayload {
  sub: number;
  username: string;
  roles: string[];
}

export interface Payload {
  userId: number;
  username: string;
  roles: string[];
}
