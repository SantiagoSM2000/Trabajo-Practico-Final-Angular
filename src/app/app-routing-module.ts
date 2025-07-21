import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViandasshopViandas } from './viandasshop-viandas/viandasshop-viandas';
import { ViandasshopAbout } from './viandasshop-about/viandasshop-about';
import { AddVianda } from './add-vianda/add-vianda';

const routes: Routes = [
  { path: '', redirectTo: 'viandas', pathMatch: 'full'},
  { path: 'viandas', component: ViandasshopViandas},
  { path: 'about', component: ViandasshopAbout},
  { path: 'add-vianda', component: AddVianda },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
