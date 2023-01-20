let picQuan =30;
let cont = 0
window.onload=()=>{
init()
}
let init=()=>{
  let elem = document.getElementById("root")
  elem.innerHTML=`
  <div class="container" id="topDiv">
  <h1>Your search page </h1>
  <small id="counter"></small>
  <div class="row">
  <label for="userInput">What are you searching for? </label>
  <input type="text" class="text col-lg-6" id="userInput" placeholder="What pictures are you looking for?">
  <button type="button" class="btn btn-primary col-lg-1" onclick="doSearch()">Submit</button>
  <button type="button" class="btn btn-warning col-lg-1" onclick="refreshSearch()">Refresh </button>
  <button type="button" class="btn btn-success col-lg-1" onclick="displayPics()">Display</button>

  </div>
</div>
  `
}

const doSearch=()=>{
refreshSearch();
let userQ = document.getElementById("userInput").value;
let myUrl = `https://pixabay.com/api/?key=23011542-78612858e99933583cc04d2e0&q=${userQ}&image_type=photo&pretty=true&per_page=${picQuan}`
let data = doApi(myUrl) 

}

const refreshSearch=()=>{
  document.getElementById('exterDiv').innerHTML="";
}


