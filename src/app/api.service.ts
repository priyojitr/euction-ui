import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bid } from './model/bid.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url='https://7ys8uh3o09.execute-api.us-east-1.amazonaws.com/test/seller';
  }

  getAllBidsByProductId(productId: string){
    console.log("calling service for prod-id: ", productId);
    return this.http.get<Bid[]>(`${this.url}/show-bids/${productId}`);
  }
}
