import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs/tabs';
import { IonicPageModule } from 'ionic-angular';
import { CardTimerComponent } from './card-timer/card-timer';
import { DisplayCardTimerComponent } from './display-card-timer/display-card-timer';

@NgModule({
	declarations: [TabsComponent,
    CardTimerComponent,
    DisplayCardTimerComponent],
	imports: [IonicPageModule],
	exports: [TabsComponent,
    CardTimerComponent,
    DisplayCardTimerComponent]
})
export class ComponentsModule {
}
