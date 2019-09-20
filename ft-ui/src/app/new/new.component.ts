import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  rForm: FormGroup;
  post:any;
  name:string = '';
  address:string = '';
  titleAlert:string = 'This field is required';

  url = 'http://localhost:3000/api/trucks';

  constructor(private fb: FormBuilder, private _http: HttpService) { 

    this.rForm = fb.group({
      'name' : [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(30)])],
      'address' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])]
    });
  }

  ngOnInit() {
  }

  addPost(post) {
  	this.name = post.name;
    this.address = post.address;
    console.log("ADD POST");
    this._http.postTruck(this.name,this.address).subscribe();
  }
}




