import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  private baseUrl = environment.host

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) { }

  genericGet(url:string):Observable<any>{
    const serviceUrl:string = this.baseUrl + url;
    return this.http.get(serviceUrl);
  }

  genericPost(url:string, payload:any, options:any):Observable<any>{
    const serviceUrl:string = this.baseUrl + url;
    return this.http.post(serviceUrl, payload, options);
  }

  showMsgSuccess(msg:string){
    return this.showMessage(msg, 'snack-success');
  }

  showMsgError(msg:string){
    return this.showMessage(msg, 'snack-error');
  }

  showMsgInfo(msg:string){
    return this.showMessage(msg, 'snack-info');
  }


  showMessage(msg:string, classname:string){
    this._snackBar.open(msg, '', {
      duration: 1500,
      panelClass : [classname]
    })
  }

}
