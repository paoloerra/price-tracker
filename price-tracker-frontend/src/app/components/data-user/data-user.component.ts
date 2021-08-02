import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.css']
})
export class DataUserComponent implements OnInit {

  @Input()
  type: String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
