import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VideoListComponent } from "./video-list/video-list.component";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { IonicRatingModule } from 'ionic4-rating';
import { PipesModule } from '../pipes/pipes.module';

const COMPONENTS = [VideoListComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, IonicModule.forRoot(), FormsModule, IonicRatingModule, PipesModule],
  exports: [COMPONENTS],
  entryComponents: [COMPONENTS]
})
export class ComponentsModule {}
