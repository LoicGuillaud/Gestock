import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ligne-stock',
  templateUrl: './ligne-stock.component.html',
  styleUrls: ['./ligne-stock.component.css']
})
export class LigneStockComponent implements OnInit {

  codeArtLot: string;
  emplacement: string;
  quantite: number;
  unite: string;
  depot: string;

  constructor() {
    this.codeArtLot = "";
    this.emplacement = "";
    this.quantite = 0.00;
    this.unite = "";
    this.depot = "";
  }

  ngOnInit(): void {
  }

}
