// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((axiosData) => {

//         console.log('axiosData.data', axiosData); 
//to review data

const tabData = axiosData.data.topics;
tabData.forEach(function(item){
    topics.append(tab(item));

})


})
.catch((err) => {
console.log('error:', err)

})

// make tab function
function tab(array){

//create tab element
const tab = document.createElement('div')

//nest elements



//create classes
tab.classList.add('tab')


//add content to element
tab.textContext = array;


    return tab;
}

