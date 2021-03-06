import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Mode } from '@sbzen/cron-core';

@Component({
	selector: 'quartz-cron-increment',
	templateUrl: './increment.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuartzCronIncrementComponent {
	@Output() selected = new EventEmitter<void>();
	@Output() primaryValueChanged = new EventEmitter<string>();
	@Output() secondaryValueChanged = new EventEmitter<string>();
	@Input() cssClassPrefix = '';
	@Input() segmentId = '';
	@Input() checked = false;
	@Input() disabled = false;
	@Input() disabledControls = false;
	@Input() label = '';
	@Input() label2 = '';
	@Input() primaryValue = '';
	@Input() primaryOptions: {
		label: string|number,
		value: string
	}[] = [];
	@Input() secondaryValue = '';
	@Input() secondaryOptions: {
		label: string|number,
		value: string
	}[] = [];
	mode = Mode.INCREMENT;
}
