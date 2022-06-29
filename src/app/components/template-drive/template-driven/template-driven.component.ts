import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  user: User;
  users: User[] = [];

  @ViewChild('form')
  form! : NgForm;

  constructor() {
    this.user = new User('', '', '');
  
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.users.push(this.user);
    console.log(this.users);
    //console.log(this.user);
   this.form.reset();

  }

}
