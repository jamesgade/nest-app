import { Catch, HttpException, ExceptionFilter, ArgumentsHost } from "@nestjs/common";
import {Request, Response} from 'express';

@Catch(HttpException)
export class ExampleCustomExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const request = context.getRequest<Request>();
        const response = context.getResponse<Response>();
        const status = exception.getStatus();

        response.status(status).json({
            statusCode: status,
            timeStamp: new Date().toISOString(),
            path: request.url,
            host: request.get('host'),
        })
    }
}
