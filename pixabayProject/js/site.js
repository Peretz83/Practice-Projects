let data =[];

//Receiving data from storage
let jsonData = localStorage.getItem('picArrs')
if(jsonData){
    data = JSON.parse(jsonData)
}

// Adding an obj to the end of arr for "search new pictures"
data.push({index:17})
//Adding flags
let iterFlag=true;
let flagnum =-1;
let flagBtn =true;
// Rendering page
let elem = document.getElementById('innerDiv');

let render =(_arr)=>{
    elem.innerHTML = "";
    let picData =_arr
  for(let x=0;x<picData.length;x++){
    let item =picData[x];
    if(x % 10===0){
        elem.innerHTML+=`<div class="wrap-boxes" id="row"></div>`;
        flagnum++;

    }
    let newElem = document.getElementsByClassName(`wrap-boxes`)

    if(item.index!==17){
        newElem[flagnum].innerHTML+=`
        <div class="exDiv">
        <div class="wrapImg" id="wrap${item.id}"></div>
        </div>
       `
       let addDiv =document.getElementById(`wrap${item.id}`);
       addDiv.style.backgroundImage = `url(${item.img})`;    
    }else{
        // adding in the search button (button will be added only once.)
        if(iterFlag){
            newElem[flagnum].innerHTML+=`
            <div id="serchDiv" onClick="directSerch()">+</div>
            ` 
            iterFlag=false;
        }
    }
   
  }
  addListners()

}

// adding the functionality needed on hover. 
let addListners=()=>{
    let elems = document.getElementsByClassName('wrapImg');
    for(let x=0;x<elems.length;x++){
        elems[x].addEventListener('mouseover',(evt)=>{
            let item =evt.target;
            if(!flagBtn || x> elems.length-1){return}
            item.innerHTML+=`
            <button type="button" class="boxBtn btn btn-danger" id="${data[x].id}" onclick="removePic(this.id)">Remove</button>
            `
            flagBtn=false;
        })
        elems[x].addEventListener('mouseleave',(evt)=>{
            let item =evt.target
            let id = item.children[0].id;
          document.getElementById(id).remove();
           flagBtn=true;
        })
    }
}


let removePic=(_id)=>{
let newData = data.filter(item=>{return item.id!=_id})
data = newData;
flagBtn=true;
iter=0;
flagnum=-1;
iterFlag=true;
render(data);

localStorage.removeItem('picArrs');
localStorage.setItem('picArrs', JSON.stringify(data));
}

const directSerch=()=>{
    window.location.href ="search.html"
}

render(data);

const removeFromLocal=()=>{
localStorage.removeItem('picArrs')
let removeElem = document.getElementById('removeItem');
removeElem.innerHTML+= `<div id="removeMsg" style="background-color:red;">
Items have been removed from your local storage
</div>`
setTimeout(()=>{
    document.getElementById('removeMsg').remove();
},2000)

}