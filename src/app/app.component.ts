import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  act = ''

  activities = [
    "Work",
    "Eat"
  ]

  addAct() {
    this.activities.unshift(this.act)
  }

  deletAct(act: string) {
    for (let x = 0; x < this.activities.length; x++)
      if (this.activities[x] == this.act) {
        this.activities.splice(x, 1)
        return
      }
  }
}
