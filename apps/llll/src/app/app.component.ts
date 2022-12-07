import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'llll-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'test',
      type: 'input',
      wrappers: ['modal', 'form-field'],
      templateOptions: {
        label: 'Test',
        required: true,
      },
    },
    {
      key: 'test2',
      type: 'input',
      wrappers: ['form-field'],
      templateOptions: {
        label: 'test2',
        required: true,
      },
    },
  ];

  onFormSubmit(model: unknown) {
    console.log(model);
  }
}
