import { CanActivate, Injectable } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common/interfaces/features/execution-context.interface";
import { Request } from "express";

@Injectable()
export class ExampleGuard implements CanActivate {
    public key = "007REPORTINGFORDUTY"
    canActivate(context: ExecutionContext): boolean {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();

        if(request.header("key") == undefined) return false;

        return request.header("key") == this.key;
    };
}
