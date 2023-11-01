import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToInstance, plainToClass } from "class-transformer";
import { ExampleDto } from "../dto/example.dto";
import { validate } from "class-validator";

export class ExamplePipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (value.id === 1) return value
        else throw new BadRequestException("VALIDATION FAILED")
    }
}

export class ExamplePipeBody implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        console.log(value, typeof value)
        // plainToClass is deprecated
        const bookClass = plainToInstance(ExampleDto, value);
        console.log(bookClass, typeof bookClass)
        const errors = await validate(bookClass);
        console.log("ERRORS", errors)
        if (errors.length > 0) {
            throw new BadRequestException("VALIDATION FAILED" + JSON.stringify(errors))
        }
        return value;
    }
}
