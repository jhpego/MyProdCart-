import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/models';
import { PublicService } from '../public.service';

@Injectable({
  providedIn: 'root'
})
export class AboutService {


  constructor(private publicService: PublicService) { }

  GetPerson(id: string):Observable<Person>{
    const url:string = "about/" + id
    return this.publicService.genericGet(url);
  }

  GetPersons(id: string):Observable<Person>{
    const url:string = "about" 
    return this.publicService.genericGet(url);
  }

  GetUser():Observable<Person>{
    const url:string = "about/user" 
    return this.publicService.genericGet(url);
  }

}
