import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) { }

    @Get('/findAll')
    getAllBooks(): Book[] {
        return this.bookService.findAllBooks();
    }

    @Post('/add')
    addBook(@Body() book: Book): string {
        return this.bookService.addBookService(book);
    }

    @Put('/update')
    updateBook(@Body() book: Book): string {
        return this.bookService.updateBookService(book);
    }

    @Delete('/delete/:id')
    deleteBook(@Param('id') bookId: string) {
        return this.bookService.deleteBookService(bookId);
    }
}
