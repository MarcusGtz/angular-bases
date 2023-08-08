import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>{{counter}}</h3>
  <button (click)="increseBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public title: string = 'Hola mundo';
  public counter = 10;


  public increseBy(value: number):void{
    // this.counter = this.counter + 1; // equivalente a:
    this.counter += value;
  }
  resetCounter():void{
    // this.counter = this.counter + 1; // equivalente a:
    this.counter = 10;
  }
}
