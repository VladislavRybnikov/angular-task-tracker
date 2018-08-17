import { Injectable } from '@angular/core';

import { DropdownQuestion } from '../models/questions/question-dropdown';
import { QuestionBase }     from '../models/questions/question-base';
import { TextboxQuestion }  from '../models/questions/question-textbox';


@Injectable({
  providedIn: 'root'
})
export class FormQuestionsService {

  constructor() { }

  getLoginQuestions()
  {
    let questions: QuestionBase<any>[]=[
      new TextboxQuestion({
        key: 'Name',
        label: 'Name',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'Password',
        label: 'Password',
        value: '',
        required: true,
        order: 2
      }) 
    ];

    
    return questions.sort((a, b) => a.order - b.order);
  }

  getRegistrationQuestions()
  {
    let questions: QuestionBase<any>[]=[
      new DropdownQuestion({
        key: 'Role',
        label: 'Role',
        options: [
          {key: 'performer', value: 'Performer'},
          {key: 'manager', value: 'Manager'}
        ],
        order: 4
      }),

      new TextboxQuestion({
        key: 'Name',
        label: 'Name',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'FullName',
        label: 'Full name',
        value: '',
        required: true,
        order: 2
      }),

      new TextboxQuestion({
        key: 'Email',
        label: 'Email',
        value: '',
        required: true,
        order: 3
      }),

      new TextboxQuestion({
        key: 'Password',
        label: 'Password',
        value: '',
        required: true,
        order: 5
      }),

      new TextboxQuestion({
        key: 'ConfirmPassword',
        label: 'Confirm password',
        value: '',
        required: true,
        order: 6
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
