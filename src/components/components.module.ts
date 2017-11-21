import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs/tabs';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [TabsComponent],
	imports: [IonicPageModule],
	exports: [TabsComponent]
})
export class ComponentsModule {
}
