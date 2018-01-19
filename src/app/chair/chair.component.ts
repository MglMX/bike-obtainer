import { Component, OnInit } from '@angular/core';
import { ChairService } from '../chair.service'
import { Chair } from '../chair'

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.css']
})
export class ChairComponent implements OnInit {

  chairs: Chair[];

  constructor(private chairService: ChairService) { }

  ngOnInit() {
    this.getChairs();
  }
  getChairs():void{
    this.chairService.getChairs().
      subscribe(chairs => this.chairs = chairs);
  }

}
