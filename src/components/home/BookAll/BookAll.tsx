import React, {useState, useEffect, useMemo} from 'react'
import BookItem from '../BookItem/BookItem'


import CreateBook from './CreateBook/CreateBook'
import { services } from '../../../services/services'
import BookFilter from '../BookFilter/BookFilter'
import { IBook, IBookData } from '../../../../modals'



export default function BookAll() {

  const [books, setBooks] = useState<IBook[]>([])
  const [search, setSearch] = useState<string>('')
  const [searchType, setSearchType] = useState<keyof IBookData>('title')

  const handleChangeSearchType = (value: keyof IBookData) => {
    setSearchType(value)
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await services.getAll()

      setBooks(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <div style={{display: 'flex', padding: '20px 40px', justifyContent: 'space-around', flexWrap: 'wrap'}}>
        {books.length ? books
            .filter((item) => {
            return search.toLowerCase() === '' ? item : item[searchType]?.toLowerCase().includes(search)})
            .map(book => (
          <BookItem key={book.id} book={book}/>
        ))
        : <p>There are no books</p>
      }
      </div>
      <BookFilter setSearch={setSearch} onChangeSearchType={handleChangeSearchType}/>
      <CreateBook setBooks={setBooks}/>
    </div>
  )
}
