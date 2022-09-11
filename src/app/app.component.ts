import { Component } from '@angular/core';
import { Syednu } from './syedNu/syednu';
import { Dolphin } from './dolphinInterface';
import { Camel } from './camelInterface';
import  aDolphin  from '../assets/data/dolphin.json';
import aCamel from '../assets/data/camel.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'syedNu-A4';
  //First Animal 
  myanimal1:string="Dolphin";
  myspecies:string="Mammal";
  myclassification:string="Carnivore";
  myappearance:string="Blue";

  //Second Animal
  myanimal2:string="Camel";
  myspecies2:string="Mammal";
  myclassification2:string="Herbivore";
  myappearance2:string="brown";
  
  d01 :Dolphin[] =aDolphin.dolphin01;
  d02 :Dolphin[] =aDolphin.dolphin02;
  d03 :Dolphin[] =aDolphin.dolphin03;

  c01 :Camel[] =aCamel.camel01;
  c02 :Camel[] =aCamel.camel02;
  c03 :Camel[] =aCamel.camel03;

  bio:Syednu = { sid:991627519, 
    sname: "Nusrath Syed", 
    slogin: "syednu",
    scampus: "Davis", 
    stitle: "Assignment 4"};
}
