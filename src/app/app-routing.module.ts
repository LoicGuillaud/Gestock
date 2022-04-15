import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnexionComponent} from "./entites/connexion/connexion.component";
import {EmplacementComponent} from "./entites/emplacement/emplacement.component";
import {MenuPrincipalComponent} from "./entites/menu-principal/menu-principal.component";
import {ChangementEmplacementComponent} from "./entites/changement-emplacement/changement-emplacement.component";
import {EtatStockComponent} from "./entites/etat-stock/etat-stock.component";
import {PreparationComponent} from "./entites/preparation/preparation.component";


const routes: Routes = [
  { path: 'emplacement', component: EmplacementComponent },
  { path: 'changement-emplacement', component: ChangementEmplacementComponent },
  { path: 'etat-stock', component: EtatStockComponent },
  { path: 'reception', component: EmplacementComponent },
  { path: 'preparation', component: PreparationComponent },
  { path: 'reception', component: EmplacementComponent },
  { path: 'menu', component: MenuPrincipalComponent },
  { path: '', component: ConnexionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
