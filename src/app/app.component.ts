import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'App. Financeira', url: 'app-financeiro', icon: 'cash' },
    { title: 'Nº Secreto', url: 'numero-secreto', icon: 'ban' },
    { title: 'Sobre', url: 'sobre', icon: 'alert' }
  ];

  constructor() {}
}
