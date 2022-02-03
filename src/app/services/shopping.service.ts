import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/models';
import { PublicService } from '../public.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(
    private publicService: PublicService 
  ) { }


  uploadProducts(formData:FormData):Observable<Product[]>{
    const url:string = "shopping/upload";
    return this.publicService.genericPost(url, formData, {  
      reportProgress: true,  
      observe: 'events',
      headers: new HttpHeaders({
        Accept: 'application/json'
      })
    }); 
  }


  getProducts():Observable<Product[]>{
    const url:string = "shopping"; 
    return this.publicService.genericGet(url);
  }

}
