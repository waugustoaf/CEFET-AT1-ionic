import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero-secreto',
  templateUrl: './numero-secreto.page.html',
  styleUrls: ['./numero-secreto.page.scss'],
})
export class NumeroSecretoPage implements OnInit {
  keyNumbers: number[];
  keyboard = '';
  input: number;
  result: string;

  constructor() { }

  shuffleArray() {
    const array = Array.from(Array(10).keys());

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
  }

  ngOnInit() {
    this.keyNumbers = this.shuffleArray();
  }

  addKeyNumber(value: number) {
    if(!isNaN(value)) {
      this.keyboard = `${this.keyboard}${value}`;
    }
  }

  handleSubmit() {
    this.result = Number(this.input) === Number(this.keyboard)
      ? 'Os campos coincidem'
      : 'Os campos não coincidem';
  }

  clear() {
    this.result = undefined;
    this.input = undefined;
    this.keyboard = '';
    this.keyNumbers = this.shuffleArray();
  }
}
