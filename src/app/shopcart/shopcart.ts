import { Component } from '@angular/core';
import { ViandasCart } from '../viandas-cart';
import { Vianda } from '../viandas-list/Vianda';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-shopcart',
  standalone: false,
  templateUrl: './shopcart.html',
  styleUrl: './shopcart.scss'
})
export class Shopcart {

  cartList$: Observable<Vianda[]> | undefined;
  constructor(private cart: ViandasCart){
    this.cartList$ = cart.cartList.asObservable();
  }
}
