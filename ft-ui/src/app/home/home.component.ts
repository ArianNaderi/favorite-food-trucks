import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  trucks;
  url = 'http://localhost:3000/api/trucks';

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getTruck().subscribe(data => {
    	this.trucks = data;
      this.trucks = this.trucks.data;
    });
  }

  delete(id: number) {
    this._http.deleteTruck(id).subscribe();
    window.location.reload();
  }

}
