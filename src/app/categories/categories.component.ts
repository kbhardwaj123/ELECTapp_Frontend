import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  value = 1;

  constructor() { }
 list = [
   'person1',
   'person2',
   'person3',
   'person4',
   'person5',
 ];
  ngOnInit() {
  }

}
