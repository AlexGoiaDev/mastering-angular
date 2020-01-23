import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, this.customValidator]),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // Sending all values from the form.
    console.log(this.myForm.value);
  }

  // Custom validators
  customValidator(c: FormControl) {
    return c.value.includes('a') ? null : {
      valid: false
    };
  }

}
