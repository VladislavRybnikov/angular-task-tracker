import { Component, OnInit } from '@angular/core';
import { WorkTaskService } from '../../core/services/work-task.service';
import { WorkTask } from '../../core/models/work-task';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-manager-profile',
  templateUrl: './manager-profile.component.html',
  styleUrls: ['../../../assets/scss/styles.scss']
})
export class ManagerProfileComponent implements OnInit {
  
  barChart: Chart;

  tasksLoading: boolean;
  tasks: WorkTask[];
  tasksCount: number;
  unconfirmedTasksCount: number;
  nearestDeadlineTask: WorkTask = {} as WorkTask;

  constructor(private taskService: WorkTaskService) { }

  ngOnInit() {
    this.tasksLoading = true;

    this.taskService.getAllManagedTasks().subscribe(
      x => {
        this.tasks = x;
        this.unconfirmedTasksCount 
        = this.tasks.filter(x => x.WorkTaskState == 1).length; 
        this.tasksCount = x.length;
        this.nearestDeadlineTask = x.sort(function(a, b) {
          let arr1 = a.Deadline.split('.').map(x => parseInt(x));
          let date1 = new Date(arr1[2], arr1[1]-1, arr1[0]);

          let arr2 = b.Deadline.split('.').map(x => parseInt(x));
          let date2 = new Date(arr2[2], arr2[1]-1, arr2[0]);

          return date1.getTime() - date2.getTime();    
        }).find(x => {
          let arr = x.Deadline.split('.').map(x => parseInt(x));
          let date = new Date(arr[2], arr[1]-1, arr[0]);

          return date.getTime() > Date.now();
        });

        let densityData = {
          label: 'Progress',
          data: this.tasks.map(x => x.ExecutedPercent),
          backgroundColor: '#5d9b9b',
          borderColor: 'rgba(0, 99, 132, 1)',
          
        }

        this.barChart = new Chart('canvas',{
          type: 'bar',
          data: {
          labels: this.tasks.map(x => x.Name),
          datasets: [densityData],
          
        }
      });
      },
      err => {console.log(err)},
      () => {this.tasksLoading = false;
      }
    );
    
    
  }

}
