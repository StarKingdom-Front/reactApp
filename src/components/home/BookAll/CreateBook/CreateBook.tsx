import React, {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface ICreateBook {
    setBooks: any,
}

export default function CreateBook ({setBooks}: ICreateBook) {

    const [data, setData] = useState({
        title: '', desc1: '', category: '',
    })

    const createBook = (e) => {
        e.preventDefault()
        setBooks(prev => [...prev, {id: prev.length + 1, ...data,
        }])

        setData({
            title: '', desc1: '', category: '',
        })
    }


  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',
                height: '300px', justifyContent: 'space-between', padding: '20px 0px'
            }}>
         <TextField id="outlined-basic" label="Title" variant="outlined" 
                    onChange={e => setData(prev => ({
                        ...prev, title: e.target.value
                    }))} 
                    value={data.title}
        />
         <TextField id="outlined-basic" label="Desc" variant="outlined" 
                    onChange={e => setData(prev => ({
                        ...prev, desc1: e.target.value
                    }))} 
                    value={data.desc1}
         />
         <TextField id="outlined-basic" label="Category" variant="outlined" 
                    onChange={e => setData(prev => ({
                        ...prev, category: e.target.value
                    }))} 
                    value={data.category}
         />
         <Button onClick={e => createBook(e)} variant="contained">Contained</Button>
    </div>
  )
}
