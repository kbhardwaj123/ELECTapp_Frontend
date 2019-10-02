import { Component, OnInit, Input } from '@angular/core';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private _candidateService: CandidateService) { }
  @Input('parentData') candi;

  aboutString = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra orci sagittis eu volutpat odio facilisis mauris sit. Lacus sed turpis tincidunt id aliquet risus feugiat in. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Dictum fusce ut placerat orci nulla. Nunc sed velit dignissim sodales ut.</p><p>A lacus vestibulum sed arcu. Blandit turpis cursus in hac habitasse platea. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Donec ultrices tincidunt arcu non sodales. Nulla pharetra diam sit amet nisl. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Vel elit scelerisque mauris pellentesque. Sit amet risus nullam eget felis. Risus viverra adipiscing at in. Sit amet massa vitae tortor condimentum lacinia.</p><p>A lacus vestibulum sed arcu. Blandit turpis cursus in hac habitasse platea. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Donec ultrices tincidunt arcu non sodales. Nulla pharetra diam sit amet nisl. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Vel elit scelerisque mauris pellentesque. Sit amet risus nullam eget felis. Risus viverra adipiscing at in. Sit amet massa vitae tortor condimentum lacinia.</p>';
  ngOnInit() {
    
    
  }

}
