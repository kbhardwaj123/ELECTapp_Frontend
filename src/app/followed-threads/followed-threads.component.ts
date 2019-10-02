import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followed-threads',
  templateUrl: './followed-threads.component.html',
  styleUrls: ['./followed-threads.component.css']
})
export class FollowedThreadsComponent implements OnInit {

  constructor() { }
  followed = false
  icon_value = 'bookmark_border';
  icon_value_toggle() {
    this.followed = !this.followed
    if(this.followed) {
      this.icon_value='bookmark';
    }
    else this.icon_value='bookmark_border';
  }
  icon_value_manip() {
    return this.icon_value;
  }
  ngOnInit() {
  }

}
