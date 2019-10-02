import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {

  constructor() { } 
  @Input('parentData') candi;
  ngOnInit() {
  }

}
