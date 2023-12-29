import React from 'react'

// Child 
function BookInfo({book, idx}) {

  function getDiscount() {
    return  book.price > 500 ? book.price * .20 : book.price * .10;
  }

  return (
    <div>
      <h3 className="text-primary">{book.title}</h3>
      <h4 className="text-danger">{book.price}</h4>
      <h4 className="text-success">{getDiscount()}</h4>
      <hr />
    </div>
  )
}

//Parent 
export default function BooksCatalog(props) {
  return (
    <>
      <h1>Books</h1>
      {
        props.books.map((book, idx) =>
          <BookInfo book={book} idx={idx} key={idx} />)
      }
    </>
  )
}
