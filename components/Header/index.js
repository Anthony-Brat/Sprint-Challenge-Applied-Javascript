// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
// create elements
const hdrDiv = document.createElement('div');
const hdrDate = document.createElement('span');
const title = document.createElement('h1');
const hdrTemp = document.createElement('span');


// nest
hdrDiv.append(hdrDate);
hdrDiv.append(title);
hdrDiv.append(hdrTemp);


// create classes
hdrDiv.classList.add('header')
hdrDate.classList.add('date')
hdrTemp.classList.add('temp')


// add content
hdrDate.textContent = 'MARCH 28, 2019';
title.textContent = 'Lambda Times';
hdrTemp.textContent = '98°';




return hdrDiv
}
const headerContainer = document.querySelector('.header-container');
//         console.log('.header-container') to see if header-container div was selected

const menu = new Header();

headerContainer.append(menu);
