import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// This is class based middleware implemented for book module
@Injectable()
export class ExampleMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        let { protocol, url, method } = req;
        let host = req.get('host');
        let date = new Date().toDateString();

        console.log(protocol + "://" + host + url + '  ' + method + '  ' + date);

        // console.log('This is class based middleware implemented for book module')
        next();
    }
}
