import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Phone } from "./phone";
import { Shipping } from "./shipping";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items: Phone[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Phone): void {
    this.items.push(product);
  }

  getItems(): Phone[] {
    return this.items;
  }

  clearCart(): Phone[] {
    this.items = [];
    return this.items;
  }

  //Método GET
  getShippingPrices(): Observable<Shipping[]> {
    return this.http.get<Shipping[]>("./assets/shipping.json");
  }
}
