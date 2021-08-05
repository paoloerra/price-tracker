import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/_service/auth.service';
import { TokenStorageService } from 'src/app/_service/token-storage.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  //Per la visualizzazione dei form
  @Input()
  type: String = "data";

  @Input()
  user!: User;

  @Input()
  modal_type: String =  "register";

  show: boolean = false;
  //Form dati utente
  signupForm!: FormGroup;
  
  //Form per gli interessi dell'utente
  interestsForm!: FormGroup;

  //Messaggi
  errorMessage = '';
  successMessage = '';

  //Controllo registrazione
  control_signup: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { 
  }

  ngOnChanges() {    
  }


  ngOnInit(): void {
    this.user = new User(-1, "wwww", "xxx", "guest", -1);
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      checked: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      verify_password: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      //id: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]]
    });

    this.interestsForm = this.formBuilder.group({
      tecnologia:[''],
      vestiti:[''],
      animali:[''],
      auto:[''],
    });
  }

  //Registrazione utente
  registerUser(){    
    if(this.signupForm.controls['password'].value != this.signupForm.controls['verify_password'].value) {
      this.errorMessage = "Le password non coincidono";
    }
    if(this.signupForm.controls['checked'].value != true) {
      this.errorMessage = "Non hai accettato i termini e le condizioni";
    }
    if(this.signupForm.controls['password'].value ==  this.signupForm.controls['verify_password'].value && this.signupForm.controls['checked'].value == true) {
      this.authService.register(this.signupForm.value).subscribe(
        data => {          
          this.errorMessage = "";
          this.successMessage = "Registrazione effettuata con successo!";
        },
        err => {
          this.errorMessage = err.error.message;          
        }
      );
    }

  }

  showStep() {    
    this.show = !this.show;
  }

  //Metodo per salvare gli interessi dell'utente
  SaveInterests() {    
  }

  //Visualizza form utente
  showData() {
    this.type = "data";
  }

  //Visualizza form interessi
  showPreferences() {
    this.type = "preferences";
  }

}
