import { Component, OnInit } from '@angular/core';
import {LigneStockComponent} from "../ligne-stock/ligne-stock.component";

@Component({
  selector: 'app-lignes-stock',
  templateUrl: './lignes-stock.component.html',
  styleUrls: ['./lignes-stock.component.css']
})
export class LignesStockComponent implements OnInit {

  lignesStock: LigneStockComponent[];

  constructor() {
    this.lignesStock = [];
  }

  ngOnInit(): void {
  }

}
