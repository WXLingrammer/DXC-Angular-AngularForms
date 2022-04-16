import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../food-service.service';

@Component({
  selector: 'app-electronic-list',
  template: `
    <table style="margin-left:auto;margin-right:auto;">
      <p> Here is the ElectronicList! </p>
      <tr>
        <th>Electronic Name</th>
        <th>Electronic Price</th>
        <th align="right">Quantity</th>
      </tr>
      <tr *ngFor="let e of electronicList">
        <td>{{e.name}}</td>
        <td>{{e.price}}</td>
        <td style="text-align:right">{{e.stock}}</td>
      </tr>
    <table>
  `,
  styles: [
  ]
})
export class ElectronicListComponent implements OnInit {
  public electronicList =  [{ name: '', price: '', stock: '' }];
  constructor(private _electronicService:GeneralService) { }

  ngOnInit(): void {
    this.electronicList = this._electronicService.getElectronicList();
  }

}
