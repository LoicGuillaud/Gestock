import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChangementEmplacementService} from "../../services/changement-emplacement.service";
import {LigneStockService} from "../../services/ligne-stock.service";
import {LigneStockComponent} from "../ligne-stock/ligne-stock.component";
import {LignesStockComponent} from "../lignes-stock/lignes-stock.component";
import {LigneStock} from "../../interface/ligne-stock";
import {LigneEtatStockComponent} from "../ligne-etat-stock/ligne-etat-stock.component";


@Component({
  selector: 'app-etat-stock',
  templateUrl: './etat-stock.component.html',
  styleUrls: ['./etat-stock.component.css']
})
export class EtatStockComponent implements OnInit {

  codeArticle: string;
  lot: string;
  emplacement: string;
  quantite: number;
  quantiteEmplacement: number;
  designation: string;
  etat: boolean;
  unite: string;
  mdp: string;
  erreur: string;
  erreur2: string;
  lignesStock: LigneStockComponent[];

  etatStockForm: FormGroup = this.fb.group({
    codeArticleLot: ['', Validators.compose([Validators.required])],
  });

  constructor(private fb: FormBuilder, private changementEmplacementService: ChangementEmplacementService, private ligneStockService: LigneStockService) {
    this.codeArticle = "";
    this.lot = "";
    this.emplacement = "";
    this.quantite = 0.00;
    this.quantiteEmplacement = 0.00;
    this.designation = "";
    this.etat = false;
    this.unite = "";
    this.mdp = "";
    this.erreur = "";
    this.erreur2 = "";
    this.lignesStock=[];
  }

  ngOnInit(): void {

  }

  onSubmit(codeArtLot: string): void {
    if (codeArtLot != "" && codeArtLot.indexOf('.') != -1) {
      this.ligneStockService.getStockArticle(codeArtLot)
        .subscribe((data:any) => {
          this.lignesStock = [];
          this.erreur = "";
            if (data != ""){
              this.parseData(data);
            }else{
              this.erreur = "Le code article et le lot n'existe pas";
            }
        });
    } else {
      this.erreur = "La saisie doit être au format CODEARTICLE.LOT";
    }
  }

  readonly(): boolean {
    return this.etat;
  }

  parseData(jsonData: any) {
    for (let i = 0; i < jsonData.length; i++) {
      let ligne = new LigneStockComponent()
      ligne.codeArtLot = jsonData[i].codeArticle + '.' + jsonData[i].lot
      ligne.emplacement = jsonData[i].emplacement
      ligne.quantite = jsonData[i].quantite
      ligne.unite = jsonData[i].unite
      ligne.depot = jsonData[i].depot
      this.lignesStock.push(ligne);
    }
  }
}

