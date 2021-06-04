export const createNotesStore = () => {
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
        addNotes(text, description, productName, price, count, link, id){
            const element = this.notes.indexOf(
                this.notes.filter(item => {
                    return item.id === id
                })[0],
            )

            if (element !== -1) {
                this.notes[element].count = this.notes[element].count + count
            } else {
                this.notes.push({
                    text,
                    description,
                    productName,
                    price,
                    count,
                    link,
                    id,
                })
            }
        },
        getFilterType(isActive, type) {
            this.filter = { ...this.filter, [type]: !isActive }
        },
        removeNote(id) {
            this.notes = this.notes.filter(note => note.id !== id)
        },
    }
}
