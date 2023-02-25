import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-test';

  name = "Nati is the man"

 myArr:string [] = []
 

 addName(newName:string){
this.myArr.push(newName)
console.log(this.myArr);


 }

}

//  class UserName{
//   constructor(public title:string){

//   }

  
//  }
