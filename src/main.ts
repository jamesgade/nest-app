import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response, NextFunction } from 'express';

function globalMiddleWareExampleOne(req: Request, res: Response, next: NextFunction) {
  console.log('GlobalMiddleWareExampleOne executed');
  next();
}

function globalMiddleWareExampleTwo(req: Request, res: Response, next: NextFunction) {
  console.log('GlobalMiddleWareExampleTwo executed');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(globalMiddleWareExampleOne);
  // app.use(globalMiddleWareExampleTwo);
  await app.listen(8000);
}

bootstrap();
