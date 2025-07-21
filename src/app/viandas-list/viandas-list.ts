import { Component } from '@angular/core';
import { Vianda } from './Vianda';
import { ViandasCart } from '../viandas-cart';
import { ViandaData } from '../vianda-data';



@Component({
  selector: 'app-viandas-list',
  standalone: false,
  templateUrl: './viandas-list.html',
  styleUrl: './viandas-list.scss'
})
export class ViandasList {

  constructor(private cart: ViandasCart, private viandasDataService: ViandaData
  ){
  }

  viandas: Vianda[] = [];

  ngOnInit(): void{
    this.viandasDataService.getAll().subscribe(viandas => {
      console.log('Fetched viandas:', viandas);
      this.viandas = viandas;
    });
  }

  maxReached(mensaje: string){
    alert(mensaje);
  }

  addToCart(vianda: Vianda): void {
    this.cart.addToCart(vianda);
    vianda.stock -= vianda.quantity;
    vianda.quantity = 0;
  }
  

  /*
  changeQuantity(event, vianda: Vianda): void {
    console.log(event.target);
  }*/

}


/*[
    {
    name: 'Ensalada de pollo',
    description: 'Deliciosa ensalada con pollo a la parrilla',
    price: 5.99,
    stock: 10,
    image: '/pasta-pesto.jpg',
    promotion: false,
    quantity: 0,
  },
  {
    name: 'Bife de vaca',
    description: '	Jugoso bife de vaca a la parrilla',
    price: 12.99,
    stock: 	10,
    image: '/pasta-pesto.jpg',
    promotion: true,
    quantity: 0,
  },
  {
    name: 'Pasta al pesto',
    description: 'Deliciosa pasta con salsa pesto',
    price: 8.99,
    stock: 0,
    image: '/pasta-pesto.jpg',
    promotion: false,
    quantity: 0,
  }
  ]*/