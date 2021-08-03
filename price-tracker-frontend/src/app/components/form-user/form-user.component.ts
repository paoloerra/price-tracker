import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  show: boolean = false;

  signupForm!: FormGroup;

  interestsForm!: FormGroup;

  @Input()
  type: String = "data";

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      surname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      checked: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      verify_password: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      id: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]]
    });

    this.interestsForm = this.formBuilder.group({
      tecnologia:[''],
      vestiti:[''],
      animali:[''],
      auto:[''],
    });
  }

  showPreferences() {
    console.log(this.signupForm.value);
    this.type = "preferences";
  }

  showData() {
    this.type = "data";
  }


  SaveInterests() {
    console.log(this.interestsForm.value);
  }
}
