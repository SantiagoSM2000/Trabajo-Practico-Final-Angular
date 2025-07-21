import { Component } from '@angular/core';
import { Vianda } from './Vianda';
import { ViandasCart } from '../viandas-cart';
import { ViandaData } from '../vianda-data';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-viandas-list',
  standalone: false,
  templateUrl: './viandas-list.html',
  styleUrl: './viandas-list.scss'
})
export class ViandasList {

  constructor(private cart: ViandasCart, private viandasDataService: ViandaData, private cdr: ChangeDetectorRef
  ){
  }

  viandas: Vianda[] = [];

  ngOnInit(): void{
    this.viandasDataService.getAll().subscribe(viandas => {
      console.log('Fetched viandas:', viandas);
      this.viandas = viandas;
      this.cdr.detectChanges();
    });
  }



  addToCart(vianda: Vianda): void {
    this.cart.addToCart(vianda);
    vianda.stock -= vianda.quantity;
    vianda.quantity = 0;
  }
  
}
