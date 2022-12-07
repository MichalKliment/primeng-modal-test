import {
	ChangeDetectionStrategy,
	Component,
	//DoCheck,
	ViewChild,
} from "@angular/core";
import { FieldType } from "@ngx-formly/core";
import { Dropdown } from "primeng/dropdown";
@Component({
	selector: "ral-select",
	template: `
		<p-dropdown
			[class.ng-dirty]="to['showError']"
			[editable]="to['editable']"
			[placeholder]="to.placeholder || ''"
			[options]="(to.options | formlySelectOptions : field | async) || []"
			[formControl]="$any(formControl)"
			[formlyAttributes]="field"
			[showClear]="to['showClear']"
			dropdownIcon="fa fa-chevron-down"
			(onChange)="to.change && to.change(field, $event)"
			[filter]="to['filter']"
			[optionDisabled]="to['optionDisabled']"
			[appendTo]="to['appendTo']"
			[virtualScroll]="true"
			[dropdownIcon]="formControl.disabled ? '' : to['dropdownIcon']"
			[attr.data-cy]="key"
			[scrollHeight]="to['scrollHeight']"
		>
			<ng-template let-item pTemplate="item">
				<span
					[attr.data-cy-value]="item.value"
					[attr.data-cy-label]="item.label"
				>
					{{ item.label }}
				</span>
			</ng-template>
		</p-dropdown>
	`,
	styles: [
		"::ng-deep .p-dropdown{width:100%}",
		`
			::ng-deep /*.appendToBody*/ .p-dropdown-panel {
				z-index: 5000 !important;
				display: block !important;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
//implements DoCheck
export class SelectComponent extends FieldType {
	@ViewChild(Dropdown, { static: true }) dropDown: Dropdown | undefined;

	override defaultOptions = {
		templateOptions: {
			showClear: true,
			placeholder: "Choose",
			editable: false,
			filter: false,
			options: [],
			appendTo: null, // body for modal or filter
			optionDisabled: "disabled",
			virtualScroll: false,
			scrollHeight: "200px",
		},
	};
}
