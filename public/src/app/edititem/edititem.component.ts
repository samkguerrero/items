import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {

  newItemUpdate: object;
  id: string;
  errors: any = {
    name: ''
  };

  constructor(private _httpService: HttpService, public _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.newItemUpdate = {name: ""}
    this.id = this._activatedRoute.snapshot.paramMap.get('id')
    this._httpService.getItem(this.id).subscribe(data => this.newItemUpdate = data)
  }

  updateItem(){
    this._httpService.updateItem(this.id, this.newItemUpdate).subscribe(data => {
      if (data['errors']) {
        this.errors = data['errors']
      } else {
        this._router.navigate([''])
      }
    })
  }

}
