import { Component } from '@angular/core';
import { TaskService } from '../../services/task.services'

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'tasks.component.html'
})
export class TasksComponent  {  
  tasksList = [{}];

  constructor(private taskService: TaskService){
    this.taskService.getTasks()
        .subscribe(tasks => {
          this.tasksList = tasks;
        });
  }

}
