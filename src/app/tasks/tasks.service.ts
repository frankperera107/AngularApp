import { Injectable } from "@angular/core";
import { NewTaskData } from "./new-task/new-task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = [
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

      constructor() {
        const tasks = localStorage.getItem('tasks');

        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
      }

      getUserTasks(userId: string){
        return this.tasks.filter((task) => task.userId == userId);
      }

      addTask(taskData: NewTaskData, userId: string){
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
          });
          this.saveTasks();
      }

      removeTask(id: string){
        this.tasks = this.tasks.filter((task)=> task.id !== id);
        this.saveTasks();
      }

      saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
}