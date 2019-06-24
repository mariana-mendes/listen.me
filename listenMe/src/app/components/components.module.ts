import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VideoListComponent } from "./video-list/video-list.component";
import { IonicModule } from "@ionic/angular";

const COMPONENTS = [VideoListComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [COMPONENTS]
})
export class ComponentsModule {}
