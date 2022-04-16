import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicListComponent } from './electronic-list/electronic-list.component';
import { FoodListComponent } from './food-list/food-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', component: FoodListComponent}, //default route
  {path:'food', component: FoodListComponent},
  {path:'electronics', component: ElectronicListComponent},
  {path:'**', component: PageNotFoundComponent}, //other routes not create
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  FoodListComponent, 
  ElectronicListComponent,
  PageNotFoundComponent
];
