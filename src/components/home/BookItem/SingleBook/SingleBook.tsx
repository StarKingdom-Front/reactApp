import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookItem from '../BookItem'
import { services } from '../../../../services/services'

import {IBook} from '../../../../../modals'



export default function SingleBook() {

    const {id} = useParams()
    const [book, setBook] = useState<IBook>({} as IBook)

    useEffect(() => {
        if(!id) return
        const fetchData = async () => {
          const data = await services.getById(id)
    
          setBook(data)
        }
    
        fetchData()
      }, [id])

      if(!book?.title) return <p>Loading...</p>

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%'}}>
        <BookItem book={book}/>
    </div>
  )
}
