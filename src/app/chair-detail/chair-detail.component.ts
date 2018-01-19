import { Component, OnInit } from '@angular/core';
import { Chair } from '../chair'

@Component({
  selector: 'app-chair-detail',
  templateUrl: './chair-detail.component.html',
  styleUrls: ['./chair-detail.component.css']
})
export class ChairDetailComponent implements OnInit {
  chair: Chair = {
    name: "Huehue chair",
    legs: 4,
    id: '3'
  }

  constructor() { }

  ngOnInit() {
  }

}
