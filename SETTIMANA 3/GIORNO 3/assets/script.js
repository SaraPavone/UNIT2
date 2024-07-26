const getBooks = function () {
    fetch(
        'https://striveschool-api.herokuapp.com/books'
    )
.then ((response) => {
console.log(response)
if (response.ok) {
    return response.json()
}else {
    throw new Error ('Qualcosa è andato storto!')
}
})
.then((booksData) => {
    console.log(booksData)
const title = booksData.title


const titleDiv = document.getElementById('bookTitle')

titleDiv.innerText = title

})
.catch((err) => {
    console.log('ERRORE', err)
})
}
getBooks()