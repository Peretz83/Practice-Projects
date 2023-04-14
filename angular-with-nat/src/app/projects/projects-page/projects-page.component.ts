import { Component } from '@angular/core';
interface Projects{
  img:string
  title:string
  description:string
}


@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})




export class ProjectsPageComponent {
  allProjects:Array<Projects> = [
    {
      img:"https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      title:"My first project",
      description:"1"
    },
    {
      img:"https://cdn.pixabay.com/photo/2022/12/22/02/56/dog-7671355_960_720.jpg",
      title:"My second project",
      description:"2"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXuWtmFHa7_mKzc_hbamAkI0y4A68r0jbIw&usqp=CAU",
      title:"My third project",
      description:"3"
    }
  ]

}
