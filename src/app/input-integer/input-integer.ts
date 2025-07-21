import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vianda } from '../viandas-list/Vianda';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})
export class InputInteger {

  @Input()
  quantity!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  max!: number;

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  increaseQuantity(): void {
    if (this.max > this.quantity){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit("Se llego al limite")
    }
      
  }

  decreaseQuantity(): void {
    if (this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  /*
  changeQuantity(): void{
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }*/

}
