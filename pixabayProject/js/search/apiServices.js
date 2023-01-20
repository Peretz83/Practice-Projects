"use strict"
let arr=[]

const doApi = async(_url) => {
  let url =_url;
  let resp = await fetch(url);
  let data = await resp.json();
  makeArr(data);
  createPics(data.hits);
  return data
}

//setting  arr is a global array. 
let makeArr =(_arr)=>{
 arr =_arr.hits;
}
