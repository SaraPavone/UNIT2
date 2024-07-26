const URL = "https://striveschool-api.herokuapp.com/api/product/";
fetch(URL, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNGVjMGYyNjBjYzAwMTVjYzBkY2UiLCJpYXQiOjE3MjE5Nzg1NjAsImV4cCI6MTcyMzE4ODE2MH0.lPO9bA4QC0YkEcPGbR3IJp3ErnZLJzJ4AHh4CmL1PqE",
  },
});

const productId = new URLSearchParams(location.search).get("productId");
console.log("PRODUCTID", productId);

fetch(URL + productId)
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('ERRORE NELLA FETCH')
    }
  })
  .then((oneConfetto) => {
    console.log(oneConfetto)


    const detailRow = document.getElementById('detail-row')
    detailRow.innerHTML = `
     <div class="col-12 col-md-8 text-center">
            <div class="card pb-4">
            <img src="" class="card-img-top" alt="https://www.arisbar.it/wp-content/uploads/2019/05/Arisbar-confetti-colorati.jpg">
            <div class="card-body">
                <h5 class="card-title">${oneConfetto.name}</h5>
                <p class="card-text">${oneConfetto.description}</p>
                <p class="card-text">${oneConfetto.brand}</p>
                <a href="#" class="btn btn-primary">${oneConfetto.price}€ COMPRA</a>

    `
  })
  .catch((err) => {
    console.log(err)
  })
