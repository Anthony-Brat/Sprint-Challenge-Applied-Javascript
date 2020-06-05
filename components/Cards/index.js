// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
    let cardsContainer = document.querySelector('.cards-container');
    let arrayValues = Object.values(response.data.articles)
    arrayValues.forEach(element => {
    element.forEach(article => {
    cardsContainer.appendChild(createCard(article));

    })
    })
    })
    .catch((error)=>{
        console.log(error);
    })


    function createCard(object){

        let card = document.createElement('div')
        let headline = document.createElement('div')
        let authorInfo = document.createElement('div')
        let imageContainer = document.createElement('div')
        let image = document.createElement('img')
        let authorName = document.createElement('span')

        card.appendChild(authorInfo)
        card.appendChild(headline)
        authorInfo.appendChild(imageContainer)
        authorInfo.appendChild(authorName)
        imageContainer.appendChild(image)



        card.classList.add('card')
        headline.classList.add('headline')
        authorInfo.classList.add('author')
        imageContainer.classList.add('img-container')
        

        headline.innerHTML = object.headline
        image.src =  object.authorPhoto
        authorName.innerHTML = 'By' + object.authorName


        return card


    
    }   

