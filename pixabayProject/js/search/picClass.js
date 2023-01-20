class PicClass{
    constructor(_parent, _user, _img, _id,_iter){
        this.parent = _parent,
        this.user =_user,
        this.img = _img,
        this.id =_id,
        this.iter =_iter,
        this.flag = 0,
        this.rowId =0,
        this.parentId =[]
    }



    randerPics(){
// adding Div for pics with id = data.id


    let exterDiv = document.getElementById(this.parent);
    if(this.iter % 10===0){
        exterDiv.innerHTML+=`<div class="wrap-boxes" id="row${this.rowId}"></div>`
    }
        let exterRow= document.getElementById(`row${this.rowId}`);
        exterRow.innerHTML+=`
    <div class="exDiv">
    <div class="wrapImg" id="${this.id}"></div>
    </div>
    ` ; 
let addDiv =document.getElementById(this.id);
addDiv.style.backgroundImage= `url(${this.img})`;


// // adding btn && badge

let elems = document.getElementsByClassName('wrapImg')
for(let x =0; x<elems.length;x++){
    elems[x].addEventListener("mouseover",(evt)=>{
        let item = evt.target;
        if(this.flag===1){return}
        let disable = (this.parentId.indexOf(item.id)===-1)? "":"disabled";
        item.innerHTML+=`
        <span class="badge bg-dark nameSpan" id="mySpan">${arr[x].user}</span>
        <button type="button" class="boxBtn" id="myBtn" ${disable}>+</button>
        `
        this.flag=1;
        document.getElementById("myBtn").addEventListener('click',(evt)=>{
           this.parentId.push(evt.target.parentNode.id) 
           evt.target.parentNode.innerHTML+=`<div class="selected">Selected</div>`
           cont++
          let contElem = document.getElementById("counter")
          contElem.innerHTML = `You have ${cont} pictures in your favourites`
          contElem.style.background = "lightgreen";
          setTimeout(()=>{
            contElem.style.background = ""
          },1000)
            let name=arr[x].user
            let image=arr[x].previewURL
            let idNum = arr[x].id

            addToChoice(name,image, idNum)

        })
    })

}


//removing btn && badge

for(let x=0;x<elems.length;x++){
    elems[x].addEventListener('mouseleave',  ()=>{
        document.getElementById("myBtn").remove();
        document.getElementById("mySpan").remove();
        this.flag=0
        
            } ) 
}
}

}
