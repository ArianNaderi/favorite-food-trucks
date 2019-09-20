import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class HttpService {
  url = 'http://localhost:3000/api/trucks';
  postData = {"name":"","address":""}

  constructor(private http: HttpClient) { }

  getTruck() {
    return this.http.get(this.url)
  }

  postTruck(name: string, address: string) {
  	this.postData.name = name;
  	this.postData.address = address;
    return this.http.post(this.url,this.postData)
  }

  deleteTruck(id: number) {
  	return this.http.delete(`${this.url}/${id}`)
  }
}
