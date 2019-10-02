import { Component, OnInit, Input } from '@angular/core';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(private _candidateService: CandidateService) { }
  forums = [];

  @Input('parentData') candi;
  @Input('candiID') canID;

  ngOnInit() {
    this._candidateService.getforums(this.canID)
      .subscribe(data => this.forums = data);
  }

}
