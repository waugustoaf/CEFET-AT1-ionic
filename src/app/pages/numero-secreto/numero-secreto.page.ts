import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero-secreto',
  templateUrl: './numero-secreto.page.html',
  styleUrls: ['./numero-secreto.page.scss'],
})
export class NumeroSecretoPage implements OnInit {
  keyNumbers: number[] = Array.from(Array(10).keys());

  constructor() { }

  shuffleArray(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
  }

  ngOnInit() {
    this.keyNumbers = this.shuffleArray(this.keyNumbers);
  }

  addKeyNumber(value: number) {
    console.log(value);
  }

}
