import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DisposableFn } from '@angular/core/src/view';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  likeStatus: boolean = true;
  item: Object;
  itemId: string;
  newThingUpdate: any;
  newThing: any;
  errors: any = {
    content: ''
  };
  updateErrors: any = {
    content: ''
  };

  constructor(private _httpService: HttpService, public _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.newThingUpdate = {content: ""}
    this.item = {name: ""}
    this.newThing = {content: ""}
    this.itemId = this._activatedRoute.snapshot.paramMap.get('id')
    this._httpService.getItem(this.itemId).subscribe(data => this.item = data)
  }

  deleteItem(id: string){
    this._httpService.deleteItem(id).subscribe(data => {
      console.log(data)
      this._router.navigate(['/pets']);
    })
  }

  // updateThing(thingid: string) {
  //   this._httpService.updateThing(this.itemId,thingid,this.newThingUpdate).subscribe(data => { 
  //     console.log("tryingto add")
  //     console.log(data)
  //     console.log(data['errors'])
  //     if(data['errors']) {
  //       this.updateErrors = data['errors']
  //     } else {
  //       this._httpService.getItem(this.itemId).subscribe(data => this.item = data)
  //     }
  //   })
  // }

  // deleteThing(thingid: string) {
  //   this._httpService.deleteThing(this.itemId, thingid).subscribe(data => {
  //     console.log(data); 
  //     this._httpService.getItem(this.itemId).subscribe(data => this.item = data)
  //   })
  // }

  addLike(thingid: string) {
    this._httpService.addLike(this.itemId).subscribe(data => {
      console.log(data); 
      this._httpService.getItem(this.itemId).subscribe(data => this.item = data)
      this.likeStatus = false;
    })
  }

  // addThing() {
  //   this._httpService.addThing(this.itemId,this.newThing).subscribe(data => {
  //     if(data['errors']) {
  //       this.errors = data['errors']
  //     } else {
  //       this._httpService.getItem(this.itemId).subscribe(data => this.item = data)
  //       this.newThing = {content: ""}
  //     }
  //   })
  // }
}
