import { nanoid } from 'nanoid'

export const createNotesStore = () => {
    return {
        notes: [],
        addNotes(text, description, productName, price, link, id) {
            this.notes.push({
                text,
                description,
                productName,
                price,
                link,
                id: nanoid(),
            })
        },
        removeNote(id) {
            this.notes = this.notes.filter(note => note.id !== id)
        },
    }
}
