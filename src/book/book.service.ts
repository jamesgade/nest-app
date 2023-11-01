import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
    public books: Book[] = [];

    addBookService(book: Book): string {
        book.id = uuidv4();
        this.books.push(book);
        return "Book has been successfully added";
    }

    updateBookService(book: Book): string {
        let index = this.books.findIndex(currentBook => currentBook.id === book.id)
        this.books[index] = book;
        return `Book successfully updated`;
    }

    deleteBookService(bookId: string): string {
        this.books = this.books.filter(book => book.id !== bookId)
        return `Book deleted`;
    }

    findAllBooks(): Book[] {
        return this.books;
    }
}
