import { Component, OnInit } from '@angular/core';
import { WorkTaskService } from '../../core/services/work-task.service';
import { WorkTask } from '../../core/models/work-task';

@Component({
  selector: 'app-managed-tasks',
  templateUrl: './managed-tasks.component.html',
  styleUrls: ['../../../assets/scss/styles.scss']
})
export class ManagedTasksComponent implements OnInit {

  constructor(private taskService: WorkTaskService) { }
  tasks: WorkTask[] = [];
  searchedTasks : WorkTask[];
  searchedString = "";
  
  tasksLoading = false;
  canSearch = false;

  taskOnChange: WorkTask;
  taskTab = '';

  loading = false;

  private getTaskDate()
  {
    const arr = this.taskOnChange.Deadline.split('.').map(x => parseInt(x));

    let date = new Date(arr[2], arr[1] - 1, arr[0]);

    return date;
  }

  private loadTasks()
  { 
    this.tasksLoading = true;

    this.taskService.getAllManagedTasks().subscribe(
      x => {this.tasks = x; this.searchedTasks = this.tasks},
      err => {console.log(err)},
      () => {this.tasksLoading = false;
      this.canSearch = true;}
    );

  }

  ngOnInit() {
    this.loadTasks();
  }

  onSearch()
  {
    this.searchedTasks = this.tasks.filter
    (x => x.Name.includes(this.searchedString));
  }

  private changeTask(id: number, tab: string)
  {
    this.taskOnChange = this.tasks.find(x => x.Id == id);
    
    this.taskTab = tab;
    this.result = null;
  }

  deleteTaskTab(id: number)
  {
    this.changeTask(id, 'delete')
  }

  confirmedName: string = '';
  error = '';
  result;
  deleteWorkTask()
  {
    this.result = null;

    const id = this.taskOnChange.Id;

    this.loading = true;

    if(this.taskOnChange.Name != this.confirmedName)
    {
      this.error = 'wrong name';
      this.loading = false;
      this.confirmedName = '';
      return;
    }

    this.taskService.delete(id).subscribe(
      x => {this.result = x; this.loadTasks()},
      err => {
        this.loading = false;
        this.error = JSON.stringify(err);
        this.confirmedName = '';
      },
      () => {this.loading = false; this.confirmedName = '';}
    );

  }

  formatDate(event: any)
  {
    const d : string = event.target.value;
    let arr = d.split('-');
    this.taskOnChange.Deadline = arr[2] + '.' 
    + arr[1] + '.' + arr[0] + ' 0:00:00';
    return this.taskOnChange.Deadline;
  }

  editWorkTask()
  {
    this.loading = true;
    this.result = null;
    this.error = '';

    this.taskService.updateWorkTask(this.taskOnChange).subscribe(
      x => {this.result = JSON.stringify(x)},
      err => {
        this.error = err;
        this.loading = false;
      },
      () => {this.loading = false;}
    );

  }

  editTaskTab(id: number)
  {
    this.changeTask(id, 'edit')
  }

  performerName;
  addPerformer()
  {
    this.loading = true;
    this.result = null;
    this.error = '';

    if(!this.performerName)
    {
      this.loading = false;
      this.error = 'Empty name';
      return;
    }

    this.taskService.addPerformer
    (this.taskOnChange.Id, this.performerName).subscribe(
      x => { this.result = JSON.stringify(x);},
      err => { 
        this.error = 'User not found';
        this.loading = false;
      },
      () => {this.loading = false;}
    );
  }

  addTaskTab(id: number)
  {
    this.changeTask(id, 'add')
  }

}
