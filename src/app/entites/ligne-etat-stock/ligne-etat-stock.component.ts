import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ligne-etat-stock',
  templateUrl: './ligne-etat-stock.component.html',
  styleUrls: ['./ligne-etat-stock.component.css']
})
export class LigneEtatStockComponent implements OnInit {

  codeArticle: string;
  lot: string;
  emplacement: string;
  quantite: number;
  idLigneStock: number;
  unite: string;
  depot: string;

  constructor() {
    this.codeArticle = "";
    this.lot = "";
    this.emplacement = "";
    this.quantite = 0.00;
    this.idLigneStock = 0;
    this.unite = "";
    this.depot = "";
  }



  ngOnInit(): void {
  }

}
