import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getAllItems();
    this.getItem('0');
  }
  getAllItems(){
      return this._http.get('/api/items');
  }
  getItem(id: String){
      return this._http.get(`/api/items/${id}`);
  }
  createItem(newItem: any){
    return this._http.post(`/api/items`, newItem)
  }
  deleteItem(id: String){
    return this._http.delete(`/api/items/${id}`)
  }
  updateItem(id: string, itemUpdate: any){
    return this._http.put(`/api/items/${id}`, itemUpdate)
  }
  //
  addLike(id: String) {
    return this._http.get(`/api/item/like/${id}`)
  }
  addThing(id: string, thingToAdd: any){
    return this._http.post(`/api/items/${id}`, thingToAdd)
  }
  updateThing(id: string, thingid: string, thingUpdate: any){
    return this._http.put(`/api/items/${id}/thing/${thingid}`, thingUpdate)
  }
  deleteThing(id: string, thingid: string){
    return this._http.delete(`/api/items/${id}/thing/${thingid}`)
  }
}
