import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { FormControl } from "@angular/forms";
import 'rxjs/Rx'

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  searchInput: FormControl = new FormControl();
  imgUrl: string = "http://placehold.it/230x120";
  value1: string = "Tom";

  constructor() {
    // Observable.from([1, 2, 3, 4])
    //   .filter(e => e % 2 == 0)
    //   .map(e => e * e)
    //   .subscribe(
    //     e => console.log(e),
    //     Error => console.error(Error),
    //     () => console.log("结束啦")
    //   )
    this.searchInput.valueChanges.debounceTime(500)
    .subscribe(
      stockCode => this.getStockInfo(stockCode)
    );


   }

  ngOnInit() {
  }

  getStockInfo(value: string){
    console.log(value);
  }

  onClick(event: any){
    console.log(event);
  }

  doOnInput(event: any){
    console.log(event.target.value);
    console.log(event.target.getAttribute('value'));
  }

  onkey(value:string){
    console.log(value);
  }

}
