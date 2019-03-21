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
    name: ''
  };

  constructor(private _httpService: HttpService, public _router: Router) { }

  ngOnInit() {
    this.newItem = {name: ""}
  }

  createItem() {
    this._httpService.createItem(this.newItem).subscribe(data => {
      if (data['errors']) {
        this.errors = data['errors']
      } else {
        this.newItem = {name: ""}
        this._router.navigate([''])
      }
    })
  }

}
