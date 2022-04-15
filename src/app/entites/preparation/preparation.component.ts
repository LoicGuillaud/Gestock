import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LigneStockService} from "../../services/ligne-stock.service";
import {LigneStockComponent} from "../ligne-stock/ligne-stock.component";
import {PreparationService} from "../../services/preparation.service";
import {LigneListeAServirComponent} from "../ligne-liste-a-servir/ligne-liste-a-servir.component";

@Component({
  selector: 'app-preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.css']
})
export class PreparationComponent implements OnInit {

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
  lignesListeAServir: LigneListeAServirComponent[];
  ligneSelectionee: LigneListeAServirComponent;

  saisieForm: FormGroup = this.fb.group({
    codeArtLot: ['', Validators.compose([Validators.required])],
    emplacement: ['', Validators.compose([Validators.required])],
    quantite: ['', Validators.compose([Validators.required])],
  });

  preparationForm: FormGroup = this.fb.group({
    of: ['', Validators.compose([Validators.required])],
    emplacementOrigine: ['', Validators.compose([Validators.required])],
    quantite: ['', Validators.compose([Validators.required])],
    emplacementArrivee: ['', Validators.compose([Validators.required])],
  });

  constructor(private fb: FormBuilder, private preparationService: PreparationService, private ligneStockService: LigneStockService) {
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
    this.lignesListeAServir=[];
    this.ligneSelectionee= new LigneListeAServirComponent();
  }

  ngOnInit(): void {

  }

  onSubmit(data: any): void {
    if(this.preparationForm.get('quantite')?.value <= this.quantiteEmplacement) {
      if (this.preparationForm.get('emplacementOrigine')?.value != this.preparationForm.get('emplacementArrivee')?.value){
        //this.preparationService.changerEmplacement(data).subscribe();
        this.preparationForm.get('codeArticleLot')?.reset();
        this.preparationForm.get('emplacementOrigine')?.reset();
        this.preparationForm.get('emplacementArrivee')?.reset();
        this.preparationForm.get('quantite')?.reset();
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

  afficherListeAServir(of: string): void {
    let numof = parseInt(of)
    if (numof != null && numof != 0) {
      this.preparationService.getListeAServir(numof)
        .subscribe((data:any) => {
          this.lignesListeAServir = [];
          this.erreur = "";
          if (data != ""){
            this.parseData(data);
          }else{
            this.erreur = "L'OF n'est pas lancé";
          }
        });
    } else {
      this.erreur = "Le numéro d'OF ne peux pas être vide";
    }
  }

  readonly(): boolean {
    return this.etat;
  }

  parseData(jsonData: any) {
    for (let i = 0; i < jsonData.length; i++) {
      let ligne = new LigneListeAServirComponent()
      ligne.codeArtLot = jsonData[i].codeArticle + '.' + jsonData[i].lot
      ligne.emplacement = jsonData[i].emplacementLot
      ligne.quantite = jsonData[i].quantiteLot
      ligne.unite = jsonData[i].unite
      ligne.etat = false
      this.lignesListeAServir.push(ligne);
    }
  }

  validerSaisie(){
    const ligne = this.lignesListeAServir.find(x => x.codeArtLot === this.saisieForm.get('codeArtLot')?.value && x.emplacement === this.saisieForm.get('emplacement')?.value);
    if (ligne != undefined){
      this.ligneSelectionee = ligne;
    }
    this.ligneSelectionee.etat = true;
    this.saisieForm.get('codeArtLot')?.reset();
    this.saisieForm.get('emplacement')?.reset();
    this.saisieForm.get('quantite')?.reset();
  }

  selectLigne(ligneStock: LigneListeAServirComponent){
    this.ligneSelectionee = ligneStock

  }
}
