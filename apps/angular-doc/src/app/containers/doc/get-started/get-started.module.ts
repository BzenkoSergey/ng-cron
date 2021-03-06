import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { QuartzCronModule } from '@sbzen/ng-cron';

import { PrismModule } from './../../../common/prism';
import { DocGetStartedRoutingModule } from './get-started-routing.module';
import { DocGetStartedComponent } from './get-started.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,

		PrismModule,
		QuartzCronModule,
		DocGetStartedRoutingModule
	],
	declarations: [
		DocGetStartedComponent
	],
	exports: [
		DocGetStartedComponent
	]
})
export class DocGetStartedModule {}
