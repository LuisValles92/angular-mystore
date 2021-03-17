import { Component } from "@angular/core";
//Input Output
import { Input } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";
/*
@Component - Proporciona metadatos sobre el componente, incluido su selector, plantillas y estilos.
class - Maneja la funcionalidad del componente.
*/

import { Phone } from "../interface";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent {
  // https://docs.angular.lat/api/core/Input
  @Input() product: Phone = {
    name: "",
    price: 0,
    description: ""
  };
  /*
  Define a property named notify with an @Output() decorator and an instance of EventEmitter(). This allows the product alert component to emit an event when the value of the notify property changes.
  https://docs.angular.lat/api/core/Output
  https://docs.angular.lat/api/core/EventEmitter
  */
  @Output() notify = new EventEmitter();
}
