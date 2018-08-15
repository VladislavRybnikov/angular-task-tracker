import { Component, Input } from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { QuestionBase }              from '../../core/models/questions/question-base';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['../../../assets/scss/styles.scss']
})
export class DynamicFormQuestionComponent{

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;


}
