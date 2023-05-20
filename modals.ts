export interface IBook {
    id: number
    title: string
    desc1: string
    category: string
    img: string
    all: string
}

export interface IBookData extends Omit<IBook, 'id'> {}