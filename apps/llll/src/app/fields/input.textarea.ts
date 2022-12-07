import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<textarea
			[rows]="5"
			[cols]="30"
			pInputTextarea
			[autoResize]="true"
			[class.ng-dirty]="showError"
			[formControl]="$any(formControl)"
			[formlyAttributes]="field"
			[placeholder]="to.placeholder"
			(onChange)="to.change && to.change(field, $event)"
			[attr.autocomplete]="to.attributes && to.attributes['autocomplete']"
			[attr.data-cy]="key"
		></textarea>
	`,
})
export class TextAreaComponent extends FieldType {
	override defaultOptions = {
		templateOptions: {
			options: [],
			attributes: {
				autocomplete: "",
			},
		},
	};
}
