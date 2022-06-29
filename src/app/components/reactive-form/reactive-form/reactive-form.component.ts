import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  genders : string[] = ['male', 'female', 'not defined'];

  registerForm: FormGroup;
  nameController: FormControl;
  emailController: FormControl;
  passwordController: FormControl;
  genderController: FormControl;

  

  constructor() {
    this.nameController = new FormControl('',[Validators.required]);
    this.emailController = new FormControl('', [Validators.required, Validators.email]);
    this.passwordController = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(22)]);
    this.genderController = new FormControl('', [Validators.required]);
    this.registerForm = new FormGroup({
      name: this.nameController,
      email: this.emailController,
      password: this.passwordController,
      gender: this.genderController,
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm);
    var user = new User(this.nameController.value.name, this.registerForm.value.email, this.registerForm.value.password);

    
  }

}
