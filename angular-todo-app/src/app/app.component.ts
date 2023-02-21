import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do-List';

 tasks: Task[] = [
    new Task('Get Laundry'),
    new Task('Take out trash'),
    new Task('Wash the dishes')
  ]

  

  add(newTask:string){
    this.tasks.push(new Task(newTask))
  }

  remove(removed: Task){
var userConfirmed = confirm(`Are you sure you want to remove the following task? \n "${removed}"`)

   if(userConfirmed){
    this.tasks = this.tasks.filter(task => task != removed)

   }


  }

    markAsDone(task:Task){
    // alert("marking " + task + " as done!!!")
    task.isDone = true
}

}

 class Task{
  constructor(public title:string){

  }

  public isDone = false
 }