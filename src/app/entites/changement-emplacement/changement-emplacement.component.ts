import { Component, OnInit } from '@angular/core';
import {ChangementEmplacementService} from "../../services/changement-emplacement.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../../services/article.service";
import {ArticleComponent} from "../article/article.component";
import {LigneStockService} from "../../services/ligne-stock.service";
import {LigneStockComponent} from "../ligne-stock/ligne-stock.component";

@Component({
  selector: 'app-changement-emplacement',
  templateUrl: './changement-emplacement.component.html',
  styleUrls: ['./changement-emplacement.component.css']
})
export class ChangementEmplacementComponent implements OnInit {

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

  changementEmplacementForm: FormGroup = this.fb.group({
    codeArticleLot: ['', Validators.compose([Validators.required])],
    emplacementOrigine: ['', Validators.compose([Validators.required])],
    quantite: ['', Validators.compose([Validators.required])],
    emplacementArrivee: ['', Validators.compose([Validators.required])],
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
  }

  ngOnInit(): void {

  }

  onSubmit(data: any): void {
    if(this.changementEmplacementForm.get('quantite')?.value <= this.quantiteEmplacement) {
      if (this.changementEmplacementForm.get('emplacementOrigine')?.value != this.changementEmplacementForm.get('emplacementArrivee')?.value){
        this.changementEmplacementService.changerEmplacement(data).subscribe();
        this.changementEmplacementForm.get('codeArticleLot')?.reset();
        this.changementEmplacementForm.get('emplacementOrigine')?.reset();
        this.changementEmplacementForm.get('emplacementArrivee')?.reset();
        this.changementEmplacementForm.get('quantite')?.reset();
        this.quantiteEmplacement = 0.00;
        this.unite = "";
        this.erreur = "";
        this.erreur2 = "";
      }else{
        this.erreur2 = "l'emplacement d'origine et l'emplacement d'arrivée ne peuvent pas êtres identiques"
      }
    }else{
      this.erreur2 = "la quantité déplacée ne peut pas être supérieur à la quantité disponible";
    }

  }

  verifArticleEmplacement(codeArtLot: string, emplacement: string): void {
    if (codeArtLot != "" && emplacement != "") {
      this.ligneStockService.verifierStockArticle(codeArtLot, emplacement)
        .subscribe((data: LigneStockComponent) => {
          console.log(data)
            if (data != null){
              this.quantiteEmplacement = data.quantite;
              this.unite = data.unite;
              this.changementEmplacementForm.get('quantite')?.setValue(data.quantite);
              this.erreur = "";
            }else{
              this.erreur = "Le code article et le lot n'existe pas à l'emplacement";
            }

        });
    } else {
      this.designation = "";
      this.unite = "";
    }
  }

  readonly(): boolean {
    return this.etat;
  }

}


