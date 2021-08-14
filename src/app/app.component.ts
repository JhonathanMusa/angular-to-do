import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text!: string

  activities = [
    { id: 1, name: "Work" },
    { id: 2, name: "Eat" },

  ]

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
