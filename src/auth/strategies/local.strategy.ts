import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import type { Payload } from '../auth.interface';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private auth: AuthService) {
    super();
  }

  public async validate(username: string, password: string): Promise<Payload> {
    const user = await this.auth.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('NotFoundUser');
    }
    if (user.roles == null) {
      throw new ForbiddenException('Forbiden');
    }
    const roleString: string[] = user.roles.map((x) => x.role);
    return { userId: user.id, username: user.username, roles: roleString };
  }
}
