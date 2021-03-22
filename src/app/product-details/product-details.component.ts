import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Phone } from "../phone";
import { PRODUCTS } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product!: Phone;

  /*
  ActivatedRoute es específico para cada componente enrutado que carga el enrutador angular. Contiene información sobre la ruta, sus parámetros y datos adicionales asociados con la ruta.
  Al inyectar ActivatedRoute, está configurando el componente para usar un service.
  */
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  /*
  Los parámetros de la ruta corresponden a las variables de ruta que define en la ruta. La URL que coincide con la ruta proporciona el productId. Angular usa productIdpara mostrar los detalles de cada producto único.
  */
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = PRODUCTS[+Number(params.get("productId"))];
    });
  }

  addToCart(product: Phone): void {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }
}
