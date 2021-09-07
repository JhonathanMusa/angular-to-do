import { Component } from '@angular/core';
import { Activities } from 'src/activities';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "To-Do"
  text!: string

  activities: Activities[] = []

  addTodo() {
    const newItem = { id: Math.random(), name: this.text }
    this.activities.push(newItem)
    this.text = ""
  }

  deleteTodo(id: number) {
    for (let x = 0; x < this.activities.length; x++)
      if (this.activities[x].id === id) {
        this.activities.splice(x, 1)
        return
      }
  }

}
