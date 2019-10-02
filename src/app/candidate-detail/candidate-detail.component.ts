import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _candidateService: CandidateService, private router: Router ) { }
  Candidate_ID;
  current_candidate = [];
  ngOnInit() {
    // this.Candidate_ID = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.Candidate_ID  = parseInt(params.get('id'))
    });
    this._candidateService.getcandidatesdetail(this.Candidate_ID)
      .subscribe(data => this.current_candidate = data);
  }

  goPrev() {
    let pervID = this.Candidate_ID - 1;
    this.router.navigate(['/candidates', pervID]);
  }
  goNext() {
    let nextID = this.Candidate_ID + 1;
    this.router.navigate(['/candidates', nextID]);
  }

}
