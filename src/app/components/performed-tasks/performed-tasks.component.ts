import { Component, OnInit } from '@angular/core';
import { WorkTask } from '../../core/models/work-task';
import { WorkTaskService } from '../../core/services/work-task.service';

@Component({
  selector: 'app-performed-tasks',
  templateUrl: './performed-tasks.component.html',
  styleUrls: ['../../../assets/scss/styles.scss']
})
export class PerformedTasksComponent implements OnInit {

  tasks: WorkTask[] = [];
  searchedTasks : WorkTask[];
  searchedString = "";

  tasksLoading = false;
  canSearch = false;

  loading = false;

  constructor(private taskService: WorkTaskService) { }

  private loadTasks()
  { 
    this.tasksLoading = true;

    this.taskService.getAllPerformedTasks().subscribe(
      x => {this.tasks = x; this.searchedTasks = this.tasks},
      err => {console.log(err)},
      () => {this.tasksLoading = false;
      this.canSearch = true;}
    );

  }

  onSearch()
  {
    this.searchedTasks = this.tasks.filter
    (x => x.Name.includes(this.searchedString));
  }

  ngOnInit() {
    this.loadTasks();
  }

  taskOnChange: WorkTask;

  states = ['unconfirmed', 'started', 'in progress', 'comlpited'];

  workTaskStateToInt(state: string)
  {
    return this.states.indexOf(state) + 1;
  }

  intToWorkTaskState(index: number)
  {
    if(!this.taskOnChange){
      return this.tasks[0];
    }
    return this.states[this.taskOnChange.WorkTaskState - 1];
  }

  updateTaskTab(id: number)
  {
    this.taskOnChange = this.tasks.find(x => x.Id == id);
  }

  updateTask()
  {

  }

}
