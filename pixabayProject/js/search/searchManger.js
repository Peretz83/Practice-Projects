const createPics = (data) => {
    let iter=0;
    document.getElementById('userInput').value="";
     data.map((item)=>{
        let userSearch = new PicClass("exterDiv",item.user ,item.previewURL, item.id,iter);
        userSearch.randerPics();
        iter++;
     })
   

  }