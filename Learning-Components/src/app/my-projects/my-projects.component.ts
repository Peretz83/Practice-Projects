import { Component } from '@angular/core';

interface intFace{
image: string
title: string
description:string
}

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent {
  myArr: Array<intFace> = [
    {
    image: 'http://fgrfgrfrfr.png',
    title: 'first carddddddddd',
    description:'111ggrf gt hth ergergergteg gtgtgrt rgrf '
  },
    {
    image: 'grgrgtr',
    title: 'second card',
    description:'2222222ggrf gt hth ergergergteg gtgtgrt rgrf '
  },
    {
    image: 'grgrgtr',
    title: 'third card',
    description:'33333ggrf gt hth ergergergteg gtgtgrt rgrf '
  },

]
}
