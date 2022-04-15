import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changement-emplacement-preparation',
  templateUrl: './changement-emplacement-preparation.component.html',
  styleUrls: ['./changement-emplacement-preparation.component.css']
})
export class ChangementEmplacementPreparationComponent implements OnInit {

  of: number;
  codeArticle: string;
  lot: string;
  emplacement: string;
  quantite: number;
  quantiteEmplacement: number;
  designation: string;
  etat: boolean;
  unite: string;

  constructor() {
    this.of = 0;
    this.codeArticle = "";
    this.lot = "";
    this.emplacement = "";
    this.quantite = 0.00;
    this.quantiteEmplacement = 0.00;
    this.designation = "";
    this.etat = false;
    this.unite = "";
  }

  ngOnInit(): void {
  }

}
