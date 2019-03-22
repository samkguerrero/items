import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  allItems: any;

  constructor(private _httpService: HttpService, public router: Router) { }
  
  ngOnInit() {
    this._httpService.getAllItems().subscribe(data => {
      let arrayToSort = [];
      for (let i in data) {
        arrayToSort.push(data[i])
      }
      arrayToSort.sort((a, b) => (a.type > b.type) ? 1 : -1)
      this.allItems = arrayToSort;
    })
  }

  deleteItem(id: string){
    this._httpService.deleteItem(id).subscribe(data => {
      console.log(data)
      this._httpService.getAllItems().subscribe(data => this.allItems = data)
      this.router.navigate(['']);
    })
  }

}
