import React, { useState } from "react";

function Books() {
  const [bookname, setBookname] = useState("");
  const [bookposter, setBookposter] = useState("");
  const [books, setBooks] = useState([]);

  function handleAdd(e) {
    e.preventDefault();
    if (bookname && bookposter) {
      const newBook = { name: bookname, poster: bookposter, isClicked: false };
      setBooks([...books, newBook]);
      setBookname("");
      setBookposter("");
    }
  }

  function handleClick(index) {
    const updatedBooks = books.map((book, i) =>
      i === index ? { ...book, isClicked: true } : book
    );
    setBooks(updatedBooks);
  }

  return (
    <div className="border w-[350px] p-[10px] mx-auto rounded-md mt-[50px]">
      <h1 className="text-center">Add books</h1>
      <form className="flex flex-col gap-[20px]">
        <input
          type="text"
          value={bookname}
          onChange={(e) => setBookname(e.target.value)}
          placeholder="Enter book name"
          className="border p-[12px] rounded-md"
        />
        <input
          type="text"
          value={bookposter}
          className="border p-[12px] rounded-md"
          onChange={(e) => setBookposter(e.target.value)}
          placeholder="Enter book poster"
        />
        <button
          className="w-full bg-blue-600 p-[12px] text-white rounded-md"
          onClick={handleAdd}
        >
          Add book
        </button>
      </form>

      <h2 className="text-center mt-20px">Books List</h2>
      <div className=" gap-2 grid-rows-2">
        {books.length > 0 &&
          books.map((book, index) => (
            <div className="w-full border p-[10px] rounded-md" key={index}>
              <h1>Name: {book.name}</h1>
              <h1>Poster: {book.poster}</h1>
              <button
                onClick={() => handleClick(index)}
                className="w-full mt-[20px] p-[12px] text-white rounded-md bg-blue-600"
              >
                Read
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Books;
