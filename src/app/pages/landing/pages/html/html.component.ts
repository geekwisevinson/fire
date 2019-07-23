import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../services/api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'geekwise-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0, fontSize: '.1em'})),
      transition('void => *', [
        animate(2000)
      ]),
      transition('* => void', [
        animate(2000)
      ]),
    ])
  ],
})
export class HtmlComponent implements OnInit {
  public form: FormGroup;
  public users = [];
  constructor(private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
    this.getAllUsers()
  }

  public signUp() {
    const value = this.form.value;
    console.log(value, this.form.valid);
    this.apiService.post('users', value).subscribe( res => {
      console.log('res', res);
    });
  }

  public getAllUsers() {
    this.users = [];
    this.apiService.get('users').subscribe( res => {
      console.log('res', res);
      for(let user in res) {
        res[user].id = user;
        this.users.push(res[user]);
      }

    })
  }

}
