import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
	selector: "ral-input",
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<input
			pInputText
			[type]="to.type || 'text'"
			[formControl]="$any(formControl)"
			[formlyAttributes]="field"
			(onBlur)="to.change && to.change(field, $event)"
		/>
	`,
})
export class InputFieldComponent extends FieldType {}
