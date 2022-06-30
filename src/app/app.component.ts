import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public infoPageService: InfoPageService,
    public productoService: ProductoService) {}

}
