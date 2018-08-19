import { Component, OnInit } from '@angular/core';
import { WorkTask } from '../../core/models/work-task';

@Component({
  selector: 'app-performed-tasks',
  templateUrl: './performed-tasks.component.html',
  styleUrls: ['../../../assets/scss/styles.scss']
})
export class PerformedTasksComponent implements OnInit {

  constructor() { }

  performedTasks = "x";

  workTasks: WorkTask[] = [
    { Name: "WorkTask1", ExecutedPercent: 20} as WorkTask,
    { Name: "WorkTask2", ExecutedPercent: 50} as WorkTask,
    { Name: "WorkTask3", ExecutedPercent: 15} as WorkTask,
    { Name: "WorkTask4", ExecutedPercent: 90} as WorkTask,
    { Name: "WorkTask5", ExecutedPercent: 70} as WorkTask,
    { Name: "WorkTask6", ExecutedPercent: 60} as WorkTask
  ];
  
  ngOnInit() {
  }

}
