import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private http: HttpClient) { }

  search(query:string=''){
    return this.http.get(`${environment.apiUrl}/restaurants?query=${query}`);
  }

  getDetail(restaurantId: string){
    return this.http.get(`${environment.apiUrl}/restaurants/${restaurantId}`);
  }

}
