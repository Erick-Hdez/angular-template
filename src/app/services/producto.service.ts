import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public cargando: boolean = true;
  public productos: Producto[] = [];
  public productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise<void>( (resolve, reject) => {

      this.http.get<Producto[]>('https://angular-portfolio-7418f-default-rtdb.firebaseio.com/productos_idx.json')
       .subscribe( ( resp: Producto[] ) => {
         
         this.productos = resp;
         this.cargando = false;

         resolve();

        });
    })
     
  }

  getProducto( id: string ) : Observable<Producto> {
    return this.http.get<Producto>(`https://angular-portfolio-7418f-default-rtdb.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto( termino: string ): void {

    if ( this.productos.length === 0 ) {
      // Cargar productos 
      this.cargarProductos().then( () => {
        // despues de tener los productos
        this.filtrarProductos( termino );
      });
    } else {
      // Aplicar el filtro
      this.filtrarProductos( termino );
    }

  }

  
  private filtrarProductos( termino: string ): void {    
    termino = termino.toLowerCase();
    
    this.productosFiltrado = [];

    this.productos.forEach( ( producto: Producto ) => {
      const tituloLower = producto.titulo.toLowerCase();

      if ( producto.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0 ) {
        this.productosFiltrado.push( producto );
      }
    });

  }
  
}
