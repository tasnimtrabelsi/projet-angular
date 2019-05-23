import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
open=true;

num=5;
client=['fawzi','ben salah','med']

  constructor() { }

  ngOnInit() {
  }

}
