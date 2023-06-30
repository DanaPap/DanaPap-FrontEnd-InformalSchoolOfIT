import { Book } from "./Book.js";

export class Magazine extends Book {
  constructor(title, author, isbn, issueNumber) {
    super(title, author, isbn);
    this._issueNumber = issueNumber;
  }

  // Getter and setter for issueNumber

  get issueNumber() {
    return this._issueNumber;
  }

  set issueNumber(newIssueNumber) {
    this._issueNumber = newIssueNumber;
  }
}
