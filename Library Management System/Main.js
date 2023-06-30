import { Book } from "./Book.js";
import { Magazine } from "./Magazine.js";
import { Library } from "./Library.js";

// Create a library instance
const myLibrary = new Library("My Library");

// Add books to the library
const book1 = new Book("Moara cu Noroc", "Ioan Slavici", "456-47484-3");
myLibrary.addBook(book1);

const book2 = new Book("Ion", "Liviu Rebreanu", "678-783893-3");
myLibrary.addBook(book2);

const magazine1 = new Magazine("Vogue", "Conde Nast", "VG123", 2023);
myLibrary.addBook(magazine1);

// Test library methods
myLibrary.listBooks();

const totalBooks = myLibrary.getTotalBooks();
console.log("Total Books:", totalBooks);

const booksByIon = myLibrary.getBooksByAuthor("Ion");
console.log("Books by Ion:", booksByIon);
