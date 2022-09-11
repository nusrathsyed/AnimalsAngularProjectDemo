import { Component, OnInit, Input } from '@angular/core';
import { Syednu } from '../syedNu/syednu';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() footerInfo!: Syednu;
  constructor() { }

  ngOnInit(): void {
  }

}
