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
        .then((arrayConfetti) => {
            console.log('Dolcetti disponibili:', arrayConfetti)


        // //     arrayConfetti.forEach((confetto) => {
        //         const confettiCol =
        //             <div class="col">
        //                 <div class="card">
        //                     <img
        //                         src="${}"
        //                         class="card-img-top"
        //                         alt="product" />

        //                     <div class="card-body">
        //                         <h5 class="card-title">${confetto.title}</h5>
        //                         <p class="card-text">
        //                             ${ }</p>
        //                             <a href="#" class="btn btn-primary">Go somewhere</a>
        //                     </div>
        //                 </div>
        //             </div>

        //         const row = document.getElementById('candy-row')
        //         row.innerHTML = row.innerHTML + candycol
        //     })
        })

        .catch((err) => {
            console.log ('ERRORE', err)
        })

}

getConfetti()