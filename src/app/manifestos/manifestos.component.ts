import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manifestos',
  templateUrl: './manifestos.component.html',
  styleUrls: ['./manifestos.component.css']
})
export class ManifestosComponent implements OnInit {

  constructor() { }
  @Input('parentData') candi;
  ngOnInit() {
  }

}
