import { Component, Input, OnInit } from '@angular/core';
import { Dolphin } from '../dolphinInterface';
import { Camel } from  '../camelInterface';

@Component({
  selector: 'app-json-tabs',
  templateUrl: './json-tabs.component.html',
  styleUrls: ['./json-tabs.component.css']
})
export class JsonTabsComponent implements OnInit {


  @Input() dDolphin01 : Dolphin[] | undefined;
  @Input() dDolphin02 : Dolphin[] | undefined;
  @Input() dDolphin03 : Dolphin[] | undefined;

  outArea :string | undefined;
  cpChoice? :Dolphin[] ;
  displayJSON(term: any){
  
    switch(term){
    case 1:this.cpChoice=this.dDolphin01; break;
    case 2: this.cpChoice=this.dDolphin02; break;
    case 3: this.cpChoice=this.dDolphin03; break;
  }
  this.outArea=`<h3> List of Facts ${term}</h3>`;
  this.outArea += "<table><tr><th>Name</th><th>Species</th><th>Classification</th><th>Appearance</th></tr>  ";
  if(this.cpChoice != undefined){
  for (let cls of this.cpChoice){
    this.outArea += ` <tr><td>${cls.name}</td><td>${cls.species}</td><td>${cls.classification}</td><td>${cls.appearance}</td></td>`;
  }//end of for loop
}
this.outArea += "</table>"
}

@Input() cCamel01 : Camel[] | undefined;
@Input() cCamel02 : Camel[] | undefined;
@Input() cCamel03 : Camel[] | undefined;

outArea1 :string | undefined;
cpChoice1? :Camel[] ;
displayJSON1(term: any){

  switch(term){
  case 1:this.cpChoice1=this.cCamel01; break;
  case 2: this.cpChoice1=this.cCamel02; break;
  case 3: this.cpChoice1=this.cCamel03; break;
}
this.outArea1=`<h3> List of Facts ${term}</h3>`;
this.outArea1 += "<table><tr><th>Name</th><th>Species</th><th>Classification</th><th>Appearance</th></tr>";
if(this.cpChoice1 != undefined){
for (let cls of this.cpChoice1){
  this.outArea1 += 
 `<tr>
  <td>${cls.name}</td>
  <td>${cls.species}</td>
  <td>${cls.classification}</td>
  <td>${cls.appearance}</td>
  </tr>`;
}//end of for loop
}
this.outArea1 += "</table>"
}

  constructor() { }

  ngOnInit(): void {
  }

}
