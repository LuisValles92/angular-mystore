import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { Phone } from "../interface";
import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})

export class CartComponent implements OnInit {
  items: Phone[] = [];
  checkoutForm: FormGroup;

  /*
  Para el proceso de pago, los usuarios deben enviar su nombre y dirección. Cuando envían su pedido, el formulario debe reiniciarse y el carrito debe limpiarse.
  */
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData: object) {
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    console.warn("Your order has been submitted", customerData);
  }
}
