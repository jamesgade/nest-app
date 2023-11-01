import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { Request } from "express";

export class ExampleInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();

        request.body.name = "This name is added from Interceptor";
        request.body.age = 22;

        return next.handle().pipe(map(data => {
            data = "from interceptor"
            return data;
        }));
    }
}
