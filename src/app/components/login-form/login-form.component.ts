import { Component, Input, OnInit }  from '@angular/core';
import { QuestionBase } from '../../core/models/questions/question-base';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import {Router} from "@angular/router";
import { AccountManagerService } from '../../core/services/account-manager.service';
import { TokenManagerService } from '../../core/services/token-manager.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../../../assets/scss/styles.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router, 
    private accountService: AccountManagerService,
     private tokenManager: TokenManagerService) { }
  
  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  apiError = false;
  loading = false;

  ngOnInit() {
    this.form = this.toFormGroup(this.questions);
  }

  
  onSubmit() {
    this.apiError = false;
    this.loading = true;

    this.accountService.login(this.form.value).subscribe
    (x => {this.tokenManager.setToken(x); 
      this.router.navigate(['/user-profile']);},
    err => {
      this.apiError = true;
      this.loading = false;
    });

  }

  
  private toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl
      (question.value || '', Validators.required)                                       
      : new FormControl(question.value || '');
    });

    return new FormGroup(group);
  }
}
