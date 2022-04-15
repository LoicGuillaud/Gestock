import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  dataUser: any;
  user: string;

  constructor() {
    this.dataUser = localStorage.getItem("user")
    this.user = JSON.parse(this.dataUser)
  }

  ngOnInit(): void {
  }

}
