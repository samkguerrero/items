import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { InitialStylingValues } from '@angular/core/src/render3/interfaces/styling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private _httpService: HttpService) {
  }

  ngOnInit(){
  }

}
