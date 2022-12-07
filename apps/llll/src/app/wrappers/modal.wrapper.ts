import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ral-modal-wrapper',
  template: `
    <p-dialog
      header="Header"
      [visible]="temp$ | async"
      (onHide)="hide()"
      [modal]="true"
      [style]="{ width: '50vw' }"
    >
      <ng-container #fieldComponent></ng-container>
      <ng-template pTemplate="footer">
        <p-button
          icon="pi pi-check"
          type="button"
          (click)="cancel()"
          label="Cancel"
          styleClass="p-button-text"
        ></p-button>
        <p-button
          icon="pi pi-times"
          type="button"
          (click)="submit()"
          label="submit"
        ></p-button>
      </ng-template>
    </p-dialog>

    <!-- area for display value -->
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
    <div
      (click)="open()"
      class="p-inputtext p-component p-element ng-pristine ng-valid ng-touched"
    >
      {{ formControl.value }}&nbsp;
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalWrapperComponent extends FieldWrapper {
  _temp = new BehaviorSubject<boolean>(false);
  temp$ = this._temp.asObservable();
  tempValue = null;

  open() {
    this._temp.next(true);
    this.tempValue = this.formControl.value;
  }

  hide() {
    this._temp.next(false);
  }

  cancel() {
    this.formControl.setValue(this.tempValue);
    this.hide();
  }

  submit() {
    console.log('submit');
    this.hide();
  }
}
