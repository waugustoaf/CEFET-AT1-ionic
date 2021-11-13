import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public appPages = [
    { title: 'App. Financeira', url: '../app-financeiro', icon: 'cash', color:'success' },
    { title: 'Nº Secreto', url: '../numero-secreto', icon: 'ban', color:'success' },
    { title: 'Sobre', url: '../sobre', icon: 'alert', color:'success' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
