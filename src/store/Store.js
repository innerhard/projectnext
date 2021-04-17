import { nanoid } from 'nanoid'

export const createNotesStore = () => {
    const clearState = { feed: false, clothes: false, medications: false, toys: false }
    return {
        filter: {
            cat: false,
            dog: false,
            feed: false,
            clothes: false,
            medications: false,
            toys: false,
        },
        notes: [],
        addNotes(text, description, productName, price, link) {
            this.notes.push({
                text,
                description,
                productName,
                price,
                link,
                id: nanoid(),
            })
        },
        getFilterType(isActive, type) {
            this.filter = { ...this.filter, [type]: !isActive }
        },
        removeNote(id) {
            this.notes = this.notes.filter(note => note.id !== id)
        },
    }
}
