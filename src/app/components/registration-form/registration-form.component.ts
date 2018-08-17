import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup, FormControl, Validators }    from '@angular/forms';

import { QuestionBase }  from '../../core/models/questions/question-base';
import { AccountManagerService } from '../../core/services/account-manager.service';
import { RegistrationModel} from '../../core/models/registration-model';
import { TokenManagerService } from '../../core/services/token-manager.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['../../../assets/scss/styles.scss']
})
export class RegistrationFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  private model: RegistrationModel;

  constructor(private accountService: AccountManagerService,
     private tokenManager: TokenManagerService,
     private router: Router) {  }

  public state: string = '';
  private message: string = '';

  ngOnInit() {
    this.form = this.toFormGroup(this.questions);
  }

  onSubmit() {
    this.state = "loading";
    if(!this.form.valid)
    {
      this.state="validationError";
      return;
    }

    if(this.form.value['Password'] != this.form.value['ConfirmPassword'])
    {
      this.state="passwordMatchingError";
      return;
    }
    
    if(this.form.value['Password'].length < 8)
    {
      this.state="passwordValidationError";
      return;
    }

    this.payLoad = JSON.stringify(this.form.value);

    this.model = this.form.value;

    this.accountService.register(this.model).subscribe(res => {
      this.tokenManager.setToken(res);
      this.state = 'success';
    }, 
    err => {this.state = 'apiError';},
    () => {this.router.navigate(['/user-profile']);});
    
    
  }

  result;

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
