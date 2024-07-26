const URL = 'https://striveschool-api.herokuapp.com/api/product/'
    fetch(URL, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNGVjMGYyNjBjYzAwMTVjYzBkY2UiLCJpYXQiOjE3MjE5Nzg1NjAsImV4cCI6MTcyMzE4ODE2MH0.lPO9bA4QC0YkEcPGbR3IJp3ErnZLJzJ4AHh4CmL1PqE"
        }
    })


const productId = new URLSearchParams(location.search).get("productId");
console.log("PRODUCTID", productId);



if (productId) {
    fetch('https://striveschool-api.herokuapp.com/api/product/' + productId)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('errore nella FETCH!')
        }
      })

      .then((oneConfetto => {
        console.log('ONE CONFETTO', oneConfetto)
        document.getElementById('name').value = oneConfetto.name
        document.getElementById('description').value = oneConfetto.description
        document.getElementById('price').value = oneConfetto.price
        document.getElementById('brand').value = oneConfetto.brand
        document.getElementById('imageURL').value = oneConfetto.imageURL
        
      })
      .catch((err) => {
        console.log(err)
      })
 )}


class Confetto {
  constructor(_name, _description, _price, _brand, _imageURL) {
    this.name = _name;
    this.description = _description;
    this.price = _price;
    this._brand = _brand;
    this._imageURL = _imageURL;
  }
}

const confettiForm = document.getElementById("confetti-form");
confettiForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("description");
  const priceInput = document.getElementById("price");
  const brandInput = document.getElementById("brand");
  const imageURLInput = document.getElementById("imageURL");

  console.log("nameInput", nameInput);

  const nameValue = nameInput.value;
  const descriptionValue = descriptionInput.value;
  const priceValue = priceInput.value;
  const brandValue = brandInput.value;
  const imageURLValue = imageURLInput.value;

  const newConfetto = new Confetto(
    nameValue,
    descriptionValue,
    priceValue,
    brandValue,
    imageURLValue
  );

  let methodToUse;
  if (productId) {
    methodToUse = "PUT";
  } else {
    methodToUse = "POST";
  }

  let URLToUse;
  if (productId) {
    URLToUse = URL + productId;
  } else {
    URLToUse = URL;
  }
});


fetch(URLToUse, {
    method: methodToUse,
    body: JSON.stringify(newConfetto),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        alert('NUOVA SCHEDA PRODOTTO SALVATA!')
      } else {
        alert('ERRORE NEL SALVATAGGIO!')
        throw new Error('Errore nel salvataggio della scheda prodotto')
      }
    })
    .catch((err) => {
      console.log('ERRORE', err)
    })