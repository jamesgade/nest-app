import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "../user/user.entity";
import { UserService } from "../user/user.service";

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UserService) {
        super();
    }

    validate(username: string, password: string): User {
        const user: User = this.userService.getUserByName(username);

        if(user === undefined) throw new UnauthorizedException();

        if(user.password === password) return user;
    }
}