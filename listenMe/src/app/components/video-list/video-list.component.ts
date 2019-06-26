import { Http } from "@angular/http";
import { DomSanitizer } from "@angular/platform-browser";
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { UserService } from "src/app/service/user.service";
import {
  Recommedation,
  RecommendationInput
} from "src/app/types/recommedation";

import * as firebase from "firebase";

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.scss"]
})
export class VideoListComponent implements OnInit {
  @Input() videos: any[];
  searchKey: string;
  queryText: any;
  showButton: boolean = true;
  @Input() context: any;
  @Input() type: string = '';
  success: boolean = false;
  @Input() isResultSearch: boolean = true;

  constructor(
    private http: Http,
    private sanitizer: DomSanitizer,
    private _userService: UserService
  ) {}

  ngOnInit() {}

  searchAction(event: any) {
    const searchKey: string = event.target.value;
    if (!(searchKey === undefined) && searchKey.length > 5 && this.isResultSearch) {
      this.http
        .get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchKey}
    &type=video&key=AIzaSyAqIgUkknD_s703WCGEagfeHAXYjP9C5Qo&videoEmbeddable=true&maxResult=4`
        )
        .subscribe((result: any) => {
          const jsonResult = JSON.parse(result._body);
          this.videos = jsonResult.items.map(item => {
            const url = this.sanitizer.bypassSecurityTrustResourceUrl(
              `https://www.youtube.com/embed/${item.id.videoId}`
            );
            let newItem = { safeUrl: url, title: item.snippet.title };
            return newItem;
          });
        });
    }
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      if (this.videos.length === 1000) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  recommend({ safeUrl, title }) {
    this._userService
      .getUserByEmail(firebase.auth().currentUser.email)
      .subscribe(result => {
        let recommend: RecommendationInput = {
          idTarget: this.context,
          idSource: result[0]._id,
          type: "indiquei",
          embedUrl: safeUrl.changingThisBreaksApplicationSecurity,
          title: title,
          date: new Date(),

        };
        this._userService.addRecommendation(recommend).subscribe(data => {
          this.success = true;
        });
      });
  }
}
