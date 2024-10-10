import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input ({ required: true }) userId!: string;
  @Input({required: true}) name!: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular fundamentals',
      summary: 'Learn all the basic concepts.',
      dueDate: '2024 Dec'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build projects',
      summary: 'Build projects using Angular.',
      dueDate: '2024 Dec'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Learn advanced concepts.',
      summary: 'Learn advanced concepts.',
      dueDate: '2024 Dec'
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Learn Rxjs.',
      summary: 'Observables and Rxjs.',
      dueDate: '2024 Dec'
    },
    {
      id: 't5',
      userId: 'u2',
      title: 'Learn Ngrx.',
      summary: 'State management with Ngrx',
      dueDate: '2024 Dec'
    },
    {
      id: 't6',
      userId: 'u3',
      title: 'Build a project with Rxjs',
      summary: 'Rxjs project.',
      dueDate: '2024 Dec'
    },
    {
      id: 't7',
      userId: 'u3',
      title: 'Build project with Ngrx.',
      summary: 'Ngrx project.',
      dueDate: '2024 Dec'
    },
    {
      id: 't8',
      userId: 'u4',
      title: 'Learn Angular signals',
      summary: 'Learn new Angular signals',
      dueDate: '2024 Dec'
    } 
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId == this.userId);
  }
}
