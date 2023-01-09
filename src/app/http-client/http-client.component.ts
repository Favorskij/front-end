import { Component } from '@angular/core';
import {HttpClientService} from "../http-client.service";

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
})
export class HttpClientComponent {

  constructor(private clientService: HttpClientService ) { }

  shippingCosts = this.clientService.getShippingPrices()

}
