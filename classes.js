// Classes in ES6 are syntatic sugar.
// Does the same thing under the hood

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    // static - method in class does not need to be instantiated
    // do not use static if using something specific to that object instance (title, author, year)
    static topBookStore() {
        return 'Barnes & Noble';
    }
}

// instantiate object
const book1 = new Book('Book One', 'John Doe', '2013');

// console.log(book1);
// book1.revise('2018');
// console.log(book1);
console.log(Book.topBookStore());
