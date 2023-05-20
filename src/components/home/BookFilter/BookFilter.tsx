import React from 'react'

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import { IBookData } from '../../../../modals';

interface IFilterProps {
  setSearch: (search: string) => void,
  onChangeSearchType: (value: keyof IBookData) => void
}

export default function BookFilter({setSearch, onChangeSearchType}: IFilterProps) {


  return (
    <div style={{display: 'flex', justifyContent: 'center', padding: '50px'}}>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={() => onChangeSearchType('all')}>All</Button>
            <Button onClick={() => onChangeSearchType('category')}>category</Button>
            <Button onClick={() => onChangeSearchType('title')}>title</Button>
        </ButtonGroup>
        <TextField 
        id="outlined-basic" label="Outlined" variant="outlined"
        onChange={(e) => setSearch(e.target.value)}
        />
    </div>
  )
}
