import axios from 'axios'
import { IBook, IBookData } from '../../modals'

export const services = {
    async getAll() {
        const response = await axios.get<IBook[]>('http://localhost:4200/books')

        return response.data
    },

    async getById(id: string) {
        const response = await axios.get<IBook[]>(`http://localhost:4200/books?id=${id}`)

        return response.data[0]
    },


}