export const formatCharecter = (charecter) => {
    const { name, gender, species, house, patronus, boggart, image } = charecter.attributes
    return {
        id: charecter.id,
        image: image || undefined,
        name: name || undefined,
        gender: gender || undefined,
        species: species || undefined,
        house: house || undefined,
        patronus: patronus || undefined,
        boggart: boggart || undefined,
    }
}