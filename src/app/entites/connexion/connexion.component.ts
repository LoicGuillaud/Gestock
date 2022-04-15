import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UtilisateurComponent} from "../utilisateur/utilisateur.component";
import {UtilisateurService} from "../../services/utilisateur.service";

// @ts-ignore
import * as bcrypt from 'bcryptjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexionForm: FormGroup = this.form.group({
    identifiant: ['', Validators.compose([Validators.required])],
    motDePasse: ['', Validators.compose([Validators.required])],
  });
  salt: string;
  identifiant: string;
  motDePasse: string;
  etat: boolean;
  uti: UtilisateurComponent;

  constructor(private form: FormBuilder, private utilisateurService: UtilisateurService, private router: Router) {
    this.identifiant = "";
    this.motDePasse = "";
    this.etat = true;
    this.uti = new UtilisateurComponent();
    this.salt = bcrypt.genSaltSync(10);
  }

  onSubmit(identifiant: string, mdp: string): void {
    this.utilisateurService.verifierUtilisateur(identifiant).subscribe((data: UtilisateurComponent) => {
      if (data != null){
        if ((data.identifiant == identifiant) && (data.motDePasse == mdp)) {
          this.identifiant = data.identifiant, this.motDePasse = data.motDePasse
          this.setSettings(data.identifiant,data.motDePasse)
          this.etat = true
          this.router.navigate(["/menu"])
        }else{
          this.etat = false;
        }
      }
    });
  }

  addUser(datas:any): void {
    datas.motDePasse = bcrypt.hashSync(datas.motDePasse, this.salt);
    this.utilisateurService.ajouterUtilisateur(datas).subscribe();
  }

  setSettings(user: string, mdp: string){
    localStorage.clear()
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("mdp", JSON.stringify(mdp));
  }

  ngOnInit(): void {
  }

}
