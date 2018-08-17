import { Component, OnInit } from '@angular/core';
import { FormQuestionsService } from '../../core/services/form-questions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../assets/scss/styles.scss']
})
export class LoginComponent implements OnInit {

  questions: any[];

  constructor(service: FormQuestionsService) {
    this.questions = service.getLoginQuestions();
  }
  ngOnInit() {
  }

}
