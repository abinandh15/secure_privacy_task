import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor(private http: HttpClient) { }
  
  public getCookieBannerData(){
    return this.http.get('https://fast-lowlands-95849.herokuapp.com/api/common/getBanner')
  }
}
