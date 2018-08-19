import { Component, OnInit } from '@angular/core';
import { WorkTaskUserService } from '../../core/services/work-task-user.service';
import { WorkTask } from '../../core/models/work-task';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-performer-profile',
  templateUrl: './performer-profile.component.html',
  styleUrls: ['../../../assets/scss/styles.scss']
})
export class PerformerProfileComponent implements OnInit {

  constructor() { }

  workTasks: WorkTask[] = [
    { Name: "WorkTask1", ExecutedPercent: 20} as WorkTask,
    { Name: "WorkTask2", ExecutedPercent: 50} as WorkTask,
    { Name: "WorkTask3", ExecutedPercent: 15} as WorkTask,
    { Name: "WorkTask4", ExecutedPercent: 90} as WorkTask,
    { Name: "WorkTask5", ExecutedPercent: 70} as WorkTask,
    { Name: "WorkTask6", ExecutedPercent: 60} as WorkTask
  ];
  
  barChart: Chart;

  ngOnInit() {
    let densityData = {
      label: 'Progress',
      data: this.workTasks.map(x => x.ExecutedPercent),
      backgroundColor: '#5d9b9b',
      borderColor: 'rgba(0, 99, 132, 1)'
    }

    this.barChart = new Chart('canvas',{
      type: 'bar',
      data: {
        labels: this.workTasks.map(x => x.Name),
        datasets: [densityData]
      }
    })
  }

}
