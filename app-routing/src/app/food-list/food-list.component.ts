import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../food-service.service';

@Component({
  selector: 'app-food-list',
  template: `
    <table style="margin-left:auto;margin-right:auto;">
      <p> Here is the FoodList! </p>
      <tr>
        <th>Food Name</th>
        <th>Food Price</th>
        <th align="right">Quantity</th>
      </tr>
      <tr *ngFor="let f of foodList">
        <td>{{f.name}}</td>
        <td>{{f.price}}</td>
        <td style="text-align:right">{{f.stock}}</td>
      </tr>
    <table>
  `,
  styles: [
  ]
})
export class FoodListComponent implements OnInit {
  public foodList =  [{ name: '', price: '', stock: '' }];
  constructor(private _foodService:GeneralService) { }

  ngOnInit(): void {
    this.foodList = this._foodService.getFoodList();
  }

}
