import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bid } from './model/bid.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url='http://localhost:8081/e-auction/api/v1/seller/';
  }

  getAllBidsByProductId(productId: string){
    console.log("calling service for prod-id: ", productId);
    return this.http.get<Bid[]>(`${this.url}/show-bids/${productId}`);
  }
}
