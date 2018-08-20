import { Component, OnInit } from '@angular/core';
import { WorkTaskService } from '../../core/services/work-task.service';
import { WorkTask } from '../../core/models/work-task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['../../../assets/scss/styles.scss']
})
export class CreateTaskComponent implements OnInit {

  constructor(private taskService: WorkTaskService) { }

  formState = '';
  errorMsg = '';

  taskName = '';
  categoryName = '';
  description = '';
  deadline = '';

  ngOnInit() {
    
  }

  private clearFields()
  {
    this.taskName = '';
    this.categoryName = '';
    this.description = '';
    this.deadline = '';
  }

  createTask()
  {
    this.formState = 'loading';

    if(!this.taskName || !this.categoryName 
      || !this.deadline || !this.description)
    {
      this.formState = 'error';
      this.errorMsg = 'Fill all fields.';
      return;
    }

    const model: WorkTask = {
      Name: this.taskName,
      CategoryName: this.categoryName,
      Description: this.description,
      Deadline: this.deadline
    } as WorkTask;
    
    this.taskService.createWorkTask(model).subscribe(
      x => {},
      err => {
        this.formState = 'error';
        this.errorMsg = JSON.stringify(err);
      },
      () => {
        this.formState = 'success';
        this.clearFields();
      }
    );
  }

}
