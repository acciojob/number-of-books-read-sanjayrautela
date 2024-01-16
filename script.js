const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // Count the number of books with readingStatus set to true
  const count = library.reduce((acc, book) => {
    if (book.readingStatus === true) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return count;
};

// Do not change the code below

alert(numberOfBooksRead());
