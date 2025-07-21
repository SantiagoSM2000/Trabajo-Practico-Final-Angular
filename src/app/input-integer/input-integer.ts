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

  showMaxMessage = false;

  increaseQuantity(): void {
    if (this.max > this.quantity){
      this.quantity++;
      this.showMaxMessage = false;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.showMaxMessage = true;
      this.maxReached.emit("Se llego al limite");
    }
  }
    

  decreaseQuantity(): void {
    if (this.quantity > 0){
      this.quantity--;
      this.showMaxMessage = false;
      this.quantityChange.emit(this.quantity);
    }
  }

  

  onInputChange(): void {
    this.showMaxMessage = false;
    if (this.quantity == null) this.quantity = 0;
    if (this.quantity < 0) this.quantity = 0;
    if (this.quantity > this.max) {
      this.quantity = this.max;
      this.showMaxMessage = true;
      this.maxReached.emit("Se llego al limite");
    }
    this.quantityChange.emit(this.quantity);
  }

}
