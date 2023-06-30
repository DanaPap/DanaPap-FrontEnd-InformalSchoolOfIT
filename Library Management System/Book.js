export class Book {
  constructor(title, author, isbn) {
    this._title = title;
    this._author = author;
    this._isbn = isbn;
  }

  // Getters and setters for title, author, and isbn

  get title() {
    return this._title;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get author() {
    return this._author;
  }

  set author(newAuthor) {
    this._author = newAuthor;
  }

  get isbn() {
    return this._isbn;
  }

  set isbn(newISBN) {
    this._isbn = newISBN;
  }
}
