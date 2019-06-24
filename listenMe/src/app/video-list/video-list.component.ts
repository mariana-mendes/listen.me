import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.scss"]
})
export class VideoListComponent implements OnInit {
  videos: [];
  searchKey: string;
  constructor(private http: Http, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getVideoList("bad romance" || this.searchKey).subscribe((result: any) => {
      this.videos = JSON.parse(result._body).items.map(item => {
        return this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${item.id.videoId}?autoplay=1`
        );
      });
    });
  }

  getVideoList(searchKey: string) {
    return this.http
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchKey}
    &type=video&key=AIzaSyDT-bo5k2sflzuQ206OE1882mdeukTdTXs&videoEmbeddable=true`);
  }
}
