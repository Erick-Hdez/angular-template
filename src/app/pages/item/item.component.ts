import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { ProductoItem } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public producto!: ProductoItem;
  public id!: string;

  constructor( 
    private route: ActivatedRoute,
    public productoService: ProductoService
  ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe( params => {
      console.log(params);
      this.productoService.getProducto(params['id'])
        .subscribe( (producto: ProductoItem) => {
          this.id = params['id'];
          this.producto = producto;
          console.log(producto.producto);
        })
    });

  }

}
