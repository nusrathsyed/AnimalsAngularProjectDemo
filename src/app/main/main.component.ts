import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() animal1:string | undefined;
  @Input() species :string | undefined;
  @Input() classification :string | undefined;
  @Input() appearance :string | undefined;
  @Input() animal2:string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
