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
    name: "", 
    type: "", 
    desc: ""
  };
  dupeError: any = {
    error: "",
  };

  constructor(private _httpService: HttpService, public _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.newItemUpdate = {
      name: "", 
      type: "", 
      desc: "", 
      skill1: "",
      skill2: "",
      skill3: "",
      likes: 0
    }
    this.id = this._activatedRoute.snapshot.paramMap.get('id')
    this._httpService.getItem(this.id).subscribe(data => {console.log(data); this.newItemUpdate = data})
  }

  titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }

  updateItem(){
    this._httpService.updateItem(this.id, this.newItemUpdate).subscribe(data => {
      if (data['errors']) {
        console.log(data['errors'])
        this.errors = data['errors']
      } else if (data['code'] === 11000) {
        this.dupeError.error = "This is not an original name"
      } else {
        console.log("updated")
        this._router.navigate(['/pets'])
      }
    })
  }

}
