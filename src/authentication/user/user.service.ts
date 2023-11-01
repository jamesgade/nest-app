import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    public users : User[] = [
        {
            username: "user1",
            password: "admin1",
            email: "user1@email.com"
        },
        {
            username: "user3",
            password: "admin2",
            email: "user2@email.com"
        },
        {
            username: "user3",
            password: "admin3",
            email: "user3@email.com"
        },
    ]

    getUserByName(userName: string): User{
        return this.users.find(user => user.username === userName);
    }
}