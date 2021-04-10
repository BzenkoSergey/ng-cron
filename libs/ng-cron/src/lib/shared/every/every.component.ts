import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Mode } from '@sbzen/cron-core';

@Component({
	selector: 'cron-every',
	templateUrl: './every.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CronEveryComponent {
	@Output() selected = new EventEmitter<void>();
	@Input() cssClassPrefix = '';
	@Input() checked = false;
	@Input() disabled = false;
	@Input() label = '';
	@Input() segmentId = '';
	mode = Mode.EVERY;
}
