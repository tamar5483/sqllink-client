import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserssService {
    constructor(private _http: HttpClient) {   
    }
getUsers(excelFile:any){
return this._http.post<user[]>('https://localhost:7074/swagger/index.html',excelFile)
}
}