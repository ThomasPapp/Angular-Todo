import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my first Angular project!';

  taskForm: FormGroup;

  tasks: string[] = [];

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.taskForm = this.fb.group({
      task: ''
    });
  }

  addTask() {
    const {task} = this.taskForm.value;
    this.taskForm.reset();
    this.tasks.push(task);
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
  }

  clearTasks() {
    this.tasks = [];
  }
}
