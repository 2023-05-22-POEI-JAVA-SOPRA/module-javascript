class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  }

  findBooksByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }

  findBooksByGenre(genre) {
    return this.books.filter((book) => book.genre === genre);
  }

  lendBook(title) {
    const book = this.findBookByTitle(title);
    if (book) {
      book.lent = true;
    }
  }
}
