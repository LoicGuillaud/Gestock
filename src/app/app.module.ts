import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './entites/article/article.component';
import { EmplacementComponent } from './entites/emplacement/emplacement.component';
import { ChangementEmplacementComponent } from './entites/changement-emplacement/changement-emplacement.component';
import { AppRoutingModule } from './app-routing.module';
import { ConnexionComponent } from './entites/connexion/connexion.component';
import { UtilisateurComponent } from './entites/utilisateur/utilisateur.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { MenuPrincipalComponent } from './entites/menu-principal/menu-principal.component';
import { TransfertStockComponent } from './entites/transfert-stock/transfert-stock.component';
import { LigneStockComponent } from './entites/ligne-stock/ligne-stock.component';
import { EtatStockComponent } from './entites/etat-stock/etat-stock.component';
import { LignesStockComponent } from './entites/lignes-stock/lignes-stock.component';
import { LigneEtatStockComponent } from './entites/ligne-etat-stock/ligne-etat-stock.component';
import { PreparationComponent } from './entites/preparation/preparation.component';
import { LigneListeAServirComponent } from './entites/ligne-liste-a-servir/ligne-liste-a-servir.component';
import { EntreeManuelleComponent } from './entites/entree-manuelle/entree-manuelle.component';
import { ChangementEmplacementPreparationComponent } from './entites/changement-emplacement-preparation/changement-emplacement-preparation.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    EmplacementComponent,
    ChangementEmplacementComponent,
    ConnexionComponent,
    UtilisateurComponent,
    MenuPrincipalComponent,
    TransfertStockComponent,
    LigneStockComponent,
    EtatStockComponent,
    LignesStockComponent,
    LigneEtatStockComponent,
    PreparationComponent,
    LigneListeAServirComponent,
    EntreeManuelleComponent,
    ChangementEmplacementPreparationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
