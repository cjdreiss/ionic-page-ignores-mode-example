import { NgModule } from '@angular/core';
import { ComponentThatNeedsIonicComponent } from './component-that-needs-ionic/component-that-needs-ionic';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [ComponentThatNeedsIonicComponent],
	imports: [IonicModule.forRoot(ComponentThatNeedsIonicComponent)],
	exports: [ComponentThatNeedsIonicComponent]
})
export class ComponentsModule {}
