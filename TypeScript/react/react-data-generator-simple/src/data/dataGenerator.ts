interface Book {
  id: number;
  name: string;
  isbn: number;
  author: string;
}

const generateData = (): Book[] => {
  const books = [];
  for (let i = 0; i < 10; i++) {
    const book = {
      id: i + 1,
      name: `Book NO: ${i + 1}`,
      isbn: Math.floor(Math.random() * 9000000000000) + 1000000000000,
      author: `Author NO: ${Math.floor(Math.random() * 10) + 1}`,
    };
    books.push(book);
  }

  return books;
};

export default generateData;
