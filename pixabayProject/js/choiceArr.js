let choiceArr =[];

// adding Array to localSrorage
let addToChoice=(name,img,id,iter)=>{
let pic={
    name:name,
    img:img,
    id:id,
    iter:iter
}
choiceArr.push(pic)
localStorage.setItem('picArrs', JSON.stringify(choiceArr));
}


// moving window
let displayPics=()=>{
    window.location.href ="index.html"
}