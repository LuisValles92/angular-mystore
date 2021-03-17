import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Phone } from "./interface";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items: Phone[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Phone) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  //Método GET
  getShippingPrices() {
    return this.http.get("../assets/shipping.json");
  }
}
