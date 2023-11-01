import { Controller, Get, UseGuards, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller('authentication')
export class AuthenticationController {

    @Get('')
    @UseGuards(AuthGuard('local'))
    getUser(@Request() req) {
        return req.user;
    }
}
