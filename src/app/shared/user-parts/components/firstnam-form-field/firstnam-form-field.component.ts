import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-firstnam-form-field',
  templateUrl: './firstnam-form-field.component.html',
  styleUrls: ['./firstnam-form-field.component.scss']
})
export class FirstnamFormFieldComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
  get firstNameControl() {
    return this.parentFormGroup.get('userForm');
  }
w
}
