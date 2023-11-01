import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UsersModule } from './users/users.module';
import { ExampleModule } from './example/modules/example.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    ExampleModule,
    BookModule,
    UsersModule,

    // for authentication
    AuthenticationModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
