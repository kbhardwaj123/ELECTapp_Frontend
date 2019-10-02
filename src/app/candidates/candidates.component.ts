import { Component, OnInit, Input} from '@angular/core';
import { CandidateService } from '../candidate.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidates',
  host: {
    class: 'max_height_wanted'
  },
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  constructor(private _candidateService: CandidateService,private router: Router, private route: ActivatedRoute) { }
  candidates = [];
  // @Input() parent_data;

  ngOnInit() {
    this._candidateService.getcandidates()
      .subscribe(data => this.candidates = data);
  }

  sendID(candi) {
    this.router.navigate([candi.id], { relativeTo: this.route })
  }

}
