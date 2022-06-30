import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage, Equipo } from '../interfaces/info-page.interface';
// import { Equipo } from '../interfaces/info-equipo.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  public info: InfoPage = {}
  public equipo!: Equipo[];
  public cargada: boolean = false;

  constructor(private http: HttpClient) { 
    // console.log('Servicio de infoPage listo');

    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    // Leer el archivo json
    this.http.get('assets/data/data-pages.json')
      .subscribe( (resp: InfoPage) => {

        this.cargada = true;
        this.info = resp;
        // console.log(resp);

      })
  }

  private cargarEquipo() {

    this.http.get<Equipo[]>('https://angular-portfolio-7418f-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( (resp: any) => {
        this.equipo = resp;
        // console.log(this.equipo);
      })
  }


}
