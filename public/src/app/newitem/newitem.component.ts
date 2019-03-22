import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.css']
})
export class NewitemComponent implements OnInit {

  newItem: Object;
  errors: any = {
    name: "",
    type: "",
    desc: "" 
  };
  dupeError: any = {
    error: "",
  };

  constructor(private _httpService: HttpService, public _router: Router) { }

  ngOnInit() {
    this.newItem = {
      name: "", 
      type: "", 
      desc: "", 
      skill1: "",
      skill2: "",
      skill3: "",
      likes: 0
    }
  }

  titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }

  createItem() {
    this.newItem['name'] = this.titleCase(this.newItem['name'])
    this.newItem['type'] = this.titleCase(this.newItem['type'])
    this._httpService.createItem(this.newItem).subscribe(data => {
      if (data['errors']) {
        console.log(data['errors'])
        this.errors = data['errors']
      } else if (data['code'] === 11000) {
        this.dupeError.error = "This is not an original name"
      } else {
        this.newItem = {name: ""}
        this._router.navigate(['/pets'])
      }
    })
  }

}
