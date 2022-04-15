import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ligne-liste-a-servir',
  templateUrl: './ligne-liste-a-servir.component.html',
  styleUrls: ['./ligne-liste-a-servir.component.css']
})
export class LigneListeAServirComponent implements OnInit {

  codeArtLot: string;
  emplacement: string;
  quantite: number;
  unite: string;
  etat: boolean;

  constructor() {
    this.codeArtLot = "";
    this.emplacement = "";
    this.quantite = 0.00;
    this.unite = "";
    this.etat = false;
  }

  ngOnInit(): void {
  }

}
