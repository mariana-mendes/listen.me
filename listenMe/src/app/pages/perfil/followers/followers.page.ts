import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.page.html',
  styleUrls: ['./followers.page.scss'],
})
export class FollowersPage implements OnInit {

  constructor() {
    var avatarURL = 'http://static.planetminecraft.com/files/resource_media/screenshot/1247/pip-boy_4200153_lrg.jpg';
    const data = [
      { name: 'John Doe', phone: '+33 6 12 34 56 78', avatar: avatarURL },
      { name: 'Jane Doe', avatar: avatarURL }
    ];
    const status = '';
  }
  ngOnInit() {
  }
}
