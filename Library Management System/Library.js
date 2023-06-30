export class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(isbn) {
    this.books = this.books.filter((book) => book.isbn !== isbn);
  }

  findBookByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }

  listBooks() {
    this.books.forEach((book) => {
      console.log(`Title: ${book.title}`);
      console.log(`Author: ${book.author}`);
      console.log(`ISBN: ${book.isbn}`);
      console.log("---");
    });
  }

  getTotalBooks() {
    return this.books.length;
  }

  getBooksByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }
}
