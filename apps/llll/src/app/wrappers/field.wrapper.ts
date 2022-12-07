import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'form-field-wrapper',
  template: `
    <div
      *ngIf="to.label && to['hideLabel'] !== true"
      class="ui-widget label-wrapper"
    >
      <label [for]="id" [class]="to['labelClass']">
        <div class="flex justify-between">
          <div class="p-fixed">
            {{ to.label }}
            <span *ngIf="to.required">*</span>
          </div>
        </div>
      </label>
      <p *ngIf="to.description" class="description">{{ to.description }}</p>
    </div>

    <ng-container #fieldComponent></ng-container>

    <div *ngIf="showError">
      <formly-validation-message
        class="p-error"
        [field]="field"
      ></formly-validation-message>
    </div>
  `,
  styles: [
    `
      .tooltip {
        vertical-align: baseline;
        cursor: pointer;
      }
      .description {
        opacity: 0.5;
      }

      .label-wrapper {
        position: relative;
        padding-bottom: 6px; // can be 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldWrapperWrapperComponent extends FieldWrapper {}
