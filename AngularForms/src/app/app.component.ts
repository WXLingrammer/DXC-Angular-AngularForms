import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  countries = ['Singapore','India','Malaysia']
  userData = new User('Wen Xing','wenxing.ling@dxc.com',91234567,'Singapore','male',true);
}
