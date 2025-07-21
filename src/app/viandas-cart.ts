import { Injectable } from '@angular/core';
import { Vianda } from './viandas-list/Vianda';
import { BehaviorSubject } from 'rxjs';


/**
 * Servicio que maneja la logica del carrito
 * 
 */


@Injectable({
  providedIn: 'root'
})
export class ViandasCart {

  private _cartList: Vianda[] = [];
  cartList: BehaviorSubject<Vianda[]> = new BehaviorSubject(this._cartList);

  addToCart(vianda: Vianda) {
    let item: Vianda | undefined = this._cartList.find((v1) => v1.name == vianda.name)
    if (!item){
      this._cartList.push({... vianda});
    } else {
      item.quantity += vianda.quantity;
    }
    this.cartList.next(this._cartList);
  }
  
}
