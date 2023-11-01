import {
    Controller,
    Req,
    Get,
    Post,
    Put,
    Patch,
    Delete,
    Header,
    Body,
    HttpCode,
    Param,
    Query,
    Redirect,
    ParseIntPipe,
    ValidationPipe,
    BadRequestException,
    UseFilters,
    UseGuards,
    UseInterceptors,
    Res,
} from '@nestjs/common';
import { ExampleService } from '../providers/example.service';
import { ExampleDto } from '../dto/example.dto';
import { ExamplePipe, ExamplePipeBody } from '../pipes/example.pipe';
import { ExampleException } from '../exceptions/example.exception';
import { ExampleCustomExceptionFilter } from '../exceptions/example.exception.filter';
import { ExampleGuard } from '../guards/example.guard';
import { ExampleInterceptor } from '../interceptors/example.interceptor';
import { Request, Response } from "express"
import { Example2Interceptor } from './example2.controller';
@Controller('item')
export class ExampleController {

    constructor(private exampleService: ExampleService) { }

    // get all item
    @Get('/all')
    getAllItems() {
        return this.exampleService.getAllItems();
    }

    // add a item
    @Post('/add')
    addItem(): string {
        return this.exampleService.addItem();
    }

    // update a item
    @Put('update')
    updateItem(): string {
        return this.exampleService.updateItem();
    }

    // partial update
    @Patch('edit')
    updateItemValue(): string {
        return this.exampleService.updateItemValue();
    }

    // delete a item
    @Delete('delete')
    deleteBook(): string {
        return this.exampleService.deleteItem();
    }

    // redirect
    @Get('/stackers')
    @Redirect('https://thestackers.in')
    redirect(): void {
        console.log('REDIRECTED')
    }

    // redirect with query
    @Get('redirect-version')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }

    // route wildcards
    @Get('ab*cd')
    wildcard(): string {
        return 'wildcard';
    }

    // status code
    @Post('status-code')
    @HttpCode(204)
    statusCode() {
        return 'Status Code';
    }

    // add header
    @Post('header')
    @Header('Cache-Control', 'none')
    header() {
        return 'Header';
    }

    // route parameters
    @Get(':itemId')
    getItemById(@Param() params: any) {
        return this.exampleService.getItemById(params.itemId);
    }


    // PIPES

    //  pipe example
    @Get('/pipe/:id')
    pipeExample(@Param('id', ParseIntPipe) id: number): string {
        console.log(id, typeof id)
        return "item by id"
    }

    // Conditional
    @Post('/pipe/example/body')
    pipeExampleBody(@Body(new ExamplePipe()) eg: ExampleDto): string {
        return "Item";
    }

    // Class Validation
    @Post('/pipe/example/custom/class')
    pipeExampleClass(@Body(new ExamplePipeBody()) eg: ExampleDto): string {
        return "Item";
    }

    //  Inbuilt nest validation
    @Post('/pipe/example/custom/builtin')
    pipeExampleBuiltin(@Body(new ValidationPipe()) eg: ExampleDto): string {
        return "Item";
    }


    // EXCEPTIONS

    // inbuilt
    @Get('/exception/example1')
    exceptionExample01(): string {
        // throw new BadRequestException();
        throw new BadRequestException({
            status: 404,
            error: "This is custom error message"
        });
        return "Hello"
    }

    // custom class
    @Get('/exception/example2')
    exceptionExample02(): string {
        // throw new BadRequestException();
        throw new ExampleException();
        return "Hello"
    }

    // filter (more control)
    @Get('/exception/example3')
    @UseFilters(ExampleCustomExceptionFilter)
    exceptionExample03(): string {
        throw new BadRequestException();
        return "Hello"
    }


    // GUARDS

    @Get('/guard/example01')
    @UseGuards(new ExampleGuard())
    guardExample1(): string {
        return "guardExample1";
    }



    // INTERCEPTORS

    @Post('/interceptor/example')
    @UseInterceptors(ExampleInterceptor)
    interceptorExample(@Req() req: Request, @Res() res: Response): any {
        return res.send("This is a response");
    }
    @Post('/interceptor/example2')
    @UseInterceptors(Example2Interceptor)
    interceptorExample2(): any {
        return "This is a response";
    }
}
