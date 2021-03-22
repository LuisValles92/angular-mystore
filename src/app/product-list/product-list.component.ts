import { Component } from "@angular/core";
import { Phone } from "../phone";

import { PRODUCTS } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products: Phone[] = PRODUCTS;

  share(product_name: string): void {
    window.alert("The product '" + product_name + "' has been shared!");
  }

  onNotify(): void {
    window.alert("You will be notified when the product price exceeds 700$");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
