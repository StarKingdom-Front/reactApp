import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import BookAll from './BookAll/BookAll'
import SingleBook from './BookItem/SingleBook/SingleBook'

import { Route, Routes, BrowserRouter } from 'react-router-dom'



export default function Home() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<BookAll />} path='/'/>
          <Route element={<SingleBook />} path='/book/:id'/>

          <Route path='*' element={<div> Not Found</div>}/>
        </Routes>

        <Footer />
    </BrowserRouter>
  )
}
