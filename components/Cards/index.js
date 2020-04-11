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
.then((response)=> {
    console.log(response);
    const cardsContainer = document.querySelector('.cards-container');
    const arrayValues = Object.values(response.data.articles)
    arrayValues.forEach(element => {
        element.forEach(article => {
            cardsContainer.append(createCard(article));
            
        })
    })
})
.catch((error) => {

})

function createCard(object){

// create elements
const divOne = document.createElement('div')
const divTwo = document.createElement('div')
const divThree = document.createElement('div')
const divFour = document.createElement('div')
const img = document.createElement('img')
const span = document.createElement('span')

//nest elements
divOne.append(divThree)
divOne.append(divTwo)
divThree.append(divFour)
divFour.append(img)
divThree.append(span)

//create classes
divOne.classList.add('.card')
divTwo.classList.add('.headline')
divThree.classList.add('author')
divFour.classList.add('img-container')

//add content
divTwo.innerHTML = object.headline
img.src = object.authorPhoto;
span.innerHTML = 'By' + object.authorName
 

return divOne

}