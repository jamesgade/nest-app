import { IsInt, IsString } from "class-validator";

export class ExampleDto {
    @IsInt()
    id: number;

    @IsString()
    name: string;
}
