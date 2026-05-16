export interface Book {
  id: number;
  name: string;
  isbn: number;
  author: string;
}

const generateData = (amount: number = 5): Book[] => {
  const books = [];
  for (let i = 0; i < amount; i++) {
    const book = {
      id: i + 1,
      name: `Book NO: ${i + 1}`,
      isbn: Math.floor(Math.random() * 9000000000000) + 1000000000000,
      author: `Author NO: ${Math.floor(Math.random() * amount) + 1}`,
    };
    books.push(book);
  }

  return books;
};

export default generateData;
