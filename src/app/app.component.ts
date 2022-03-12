import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eauction';
  productId!: string;
  empData!: string;

  constructor(private api: ApiService) { }

  getBidList() {
    console.log("for product id - ", this.productId);
    // call service to make api call to get list of bid
    this.api.getAllEmployees().subscribe((data) => {
      console.log("received from api: ", data);
    });
  }

}
