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
    this.activities.map((act, i) => {
      if (act.id === id) {
        this.activities.splice(i, 1)
        return
      }
    })
  }

}
