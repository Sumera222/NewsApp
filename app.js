// by default function tesla is fetched
fetch('https://newsapi.org/v2/everything?q=tesla&apiKey=7ec766c53ec74987be172580505e00ce'). then( function (response){
  console.log(response, 'Response');
  return  response.json();/*printing the data in form of json*/
}).then(myArray)
.catch(function (err) {
  console.log(err);
});;
function myArray(obj){
  let Array = obj.articles;
  console.log(Array);
  console.log(typeof Array);
  

  document.querySelector("#main").innerHTML =(Array.map(articles => 
      `
      <div class="card" >
         <img src="${articles.urlToImage}" class="card-img-top" alt="..."/>
         <div class="card-body">
         <h5 class="card-title">${articles.title}</h5>
         <p class="card-details">${articles.description}</p>
         <a href="#" class="btn btn-primary" onclick= "getElementbyId('moreInfo').innerHTML = 'URL:${articles.url}<br> Published:${articles.publishedAt}' ">Show More!</a>
         </div>
      </div>`
).join(''));}

// this is function of tesla button plus default also
// most of the time data is not fetching by browser
function cars(){

fetch('https://newsapi.org/v2/everything?q=tesla&apiKey=7ec766c53ec74987be172580505e00ce'). then( function (response){
  console.log(response, 'Response');
  return  response.json();
}).then(myArray)
.catch(function (err) {
  console.log(err);
});;
function myArray(obj){
  let Array = obj.articles;
  console.log(Array);
  console.log(typeof Array);
  document.querySelector("#main").innerHTML =(Array.map(articles => 
    `
      <div class="card" >
         <img src="${articles.urlToImage}" class="card-img-top" alt="..."/>
         <div class="card-body">
         <h5 class="card-title">${articles.title}</h5>
         <p class="card-details">${articles.description}</p>
         <a href="#" class="btn btn-primary" onclick= "getElementbyId('moreInfo').innerHTML = 'URL:${articles.url}<br> Published:${articles.publishedAt}' ">Show More!</a>
         </div>
      </div>`
).join(''));}}

// business button
function usNews() {
  fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7ec766c53ec74987be172580505e00ce')
  .then(function(response){
    return response.json();
  }).then(newsArray)
  .catch(function(err){
      console.log(err);
  });
  function newsArray(obj){
    let business = obj.articles;
    console.log(business);
    console.log(typeof business);
    document.querySelector('#main').innerHTML= (business.map(articles =>
     `
     
     <div class="card">
         <img src="${articles.urlToImage}" class="card-img-top" alt="..."/>
        <div class="card-body">
         <h5 class="card-title">${articles.title}</h5>
         <p class="card-details">${articles.description}</p><br>
         <a href="#" class="btn btn-primary" onclick= "getElementById('moreInfo').innerHTML = 'URL:${articles.url}<br> Published:${articles.publishedAt}' ">Show More!</a>
        </div>
      </div>
     
     `
      ).join(''));
    }}

//live links are not working, all the buttons were not working as well. API Technical mistake