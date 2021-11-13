import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface AlertProps {
  title: string;
  subHeader?: string;
  message: string;
}

@Component({
  selector: 'app-app-financeiro',
  templateUrl: './app-financeiro.page.html',
  styleUrls: ['./app-financeiro.page.scss'],
})
export class AppFinanceiroPage implements OnInit {
  value: number;
  tax: number;
  months: number;
  result: number;

  constructor(public alertController: AlertController) { }

  async presentAlert({title, message, subHeader}: AlertProps) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: title,
      subHeader,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

  handleSubmit() {
    if(this.value === null || this.value === undefined) {
      return this.presentAlert({
        message: 'Preencha o valor da aplicação',
        title: 'Preencha todos os campos'
      });
    }
    if(this.tax === null || this.tax === undefined) {
      return this.presentAlert({
        message: 'Preencha a taxa de juros',
        title: 'Preencha todos os campos'
      });
    }
    if(this.months === null || this.months === undefined) {
      return this.presentAlert({
        message: 'Preencha a quantidade de meses',
        title: 'Preencha todos os campos'
      });
    }

    const formattedTax = this.tax / 100;

    this.result = Array(this.months)
      .fill('a')
      .reduce((prevValue) =>
        prevValue + (prevValue * formattedTax)
      , this.value).toFixed(2);
  }

  clear() {
    this.months = undefined;
    this.value = undefined;
    this.tax = undefined;
    this.result = undefined;
  }
}
