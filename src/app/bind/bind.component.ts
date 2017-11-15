import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  imgUrl: string = "http://placehold.it/230x120";
  value1: string = "Tom";

  constructor() {
    Observable.from([1, 2, 3, 4])
      .filter(e => e % 2 == 0)
      .map(e => e * e)
      .subscribe(
        e => console.log(e),
        Error => console.error(Error),
        () => console.log("结束啦")
      )
   }

  ngOnInit() {
  }

  onClick(event: any){
    console.log(event);
  }

  doOnInput(event: any){
    console.log(event.target.value);
    console.log(event.target.getAttribute('value'));
  }

}
