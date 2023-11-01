import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [AuthenticationController],
  providers: [],
})

export class AuthenticationModule { }
