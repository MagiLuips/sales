import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private apiUrl = 'http://localhost:8080/api/productos/listar';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<any> {
    const token = localStorage.getItem('token'); // leer token del localStorage

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }
}
