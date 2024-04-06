import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private triggerFunction = new Subject<void>();
  triggerFunction$ = this.triggerFunction.asObservable();
  executeFunction() {
    this.triggerFunction.next();
  }
}
