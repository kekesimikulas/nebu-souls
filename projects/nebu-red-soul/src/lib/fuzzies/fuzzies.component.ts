import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nbs-fuzzies',
  templateUrl: './fuzzies.component.html',
  styleUrls: ['./fuzzies.component.scss']
})
export class FuzziesComponent implements OnInit {
  @Input() fruits: string[] = 'Apple,Banana,Orange'.split(',');

  constructor() { }

  ngOnInit() {
  }

}
