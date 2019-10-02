import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debate-details',
  templateUrl: './debate-details.component.html',
  styleUrls: ['./debate-details.component.css']
})
export class DebateDetailsComponent implements OnInit {

  constructor() { }

  debate_links = {
    links: [
      {href: 'abc.com', desc: 'first link'},
      {href: 'abc2.com', desc: 'second link'},
      {href: 'abc3.com', desc: 'third link'},
    ],
  }
  ngOnInit() {
  }

}
