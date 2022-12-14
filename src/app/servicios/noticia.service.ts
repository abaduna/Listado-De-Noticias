import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
key = "847fda00d5814813bb357c277cb883b5"
url = ""
  constructor(private http:HttpClient) { }


  getNoticias(parametros: any):Observable<any>
  {
const URL = 'https://newsapi.org/v2/top-headlines?country='+ parametros.pais+'&category='+ parametros.categoria+'&apiKey=847fda00d5814813bb357c277cb883b5'
    return this.http.get(URL)
}
}
