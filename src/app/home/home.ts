import { Component,OnInit } from '@angular/core';
import  { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[ CommonModule,FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  task: string = '';
  tasks: {text:string; completed:boolean}[] = [];

  ngOnInit() {
    const savedTasks =
    localStorage.getItem('tasks');
    if ( savedTasks){
      this.tasks = JSON.parse(savedTasks);
    }
      
  }
  addTask(){
    if (this.task.trim()=== '')return;
    
    this.tasks.push({
      text: this.task, 
      completed: false});
    localStorage.setItem('tasks',
    JSON.stringify(this.tasks));
    this.task = '';
    }
    toggleTask(index: number){
      this.tasks[index].completed =
      !this.tasks[index].completed; 
      localStorage.setItem('tasks',
      JSON.stringify(this.tasks));
    }
    deleteTask(index: number){
      this.tasks.splice(index,1);
      localStorage.setItem('tasks',
      JSON.stringify(this.tasks));
    }
  }






