import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  getFoodList(){
    return [{"id":1,"name":"Food A","price":"$1","stock":"1 Box"},
            {"id":2,"name":"Food B","price":"$2","stock":"2 Box"},
            {"id":3,"name":"Food C","price":"$3","stock":"3 Box"},
            {"id":4,"name":"Food D","price":"$4","stock":"4 Box"},
            {"id":5,"name":"Food E","price":"$5","stock":"5 Box"}
    ];
  }
  getElectronicList(){
    return [{"id":1,"name":"Electronic A","price":"$1","stock":"1 Box"},
            {"id":2,"name":"Electronic B","price":"$2","stock":"2 Box"},
            {"id":3,"name":"Electronic C","price":"$3","stock":"3 Box"},
            {"id":4,"name":"Electronic D","price":"$4","stock":"4 Box"},
            {"id":5,"name":"Electronic E","price":"$5","stock":"5 Box"}
    ];
  }
}
