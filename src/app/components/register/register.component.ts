import { Component, OnInit } from '@angular/core';
import { FormQuestionsService } from '../../core/services/form-questions.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../assets/scss/styles.scss']
})
export class RegisterComponent implements OnInit {
  questions: any[];

  constructor(service: FormQuestionsService) {
    this.questions = service.getRegistrationQuestions();
  }
  ngOnInit() {
  }

}
