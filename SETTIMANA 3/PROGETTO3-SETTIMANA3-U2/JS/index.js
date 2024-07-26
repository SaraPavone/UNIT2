const getConfetti = function () {
    const URL = 'https://striveschool-api.herokuapp.com/api/product/'
    fetch(URL, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNGVjMGYyNjBjYzAwMTVjYzBkY2UiLCJpYXQiOjE3MjE5Nzg1NjAsImV4cCI6MTcyMzE4ODE2MH0.lPO9bA4QC0YkEcPGbR3IJp3ErnZLJzJ4AHh4CmL1PqE"
        }
    })

        .then((response) => {
            console.log(response)
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('ERRORE CHIAMATA')
            }
        })
        .then((arrayProduct) => {
            console.log('Dolcetti disponibili:', arrayProduct)


            arrayProduct.forEach((product) => {
                const newConfettiCol =`
                    <div class="col">
                        <div class="card">
                            <img
                                src="https://www.arisbar.it/wp-content/uploads/2019/05/Arisbar-confetti-colorati.jpg}"
                                class="card-img-top"
                                alt="product" />

                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <p class="card-text">
                                    ${product.description}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    `
                    const confettiRow = document.getElementById('candy-row');
                    confettiRow.innerHTML = confettiRow.innerHTML + newConfettiCol;
            })
        })

        .catch((err) => {
            console.log ('ERRORE', err)
        })

}

getConfetti()