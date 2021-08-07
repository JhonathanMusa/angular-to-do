import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = new FormControl('');

  activities = [
    "Work",
    "Eat"
  ]

  onSubmit() {
    this.activities.push(this.text.value)
  }

  /*  deletAct(index: number) {
     for (let x = 0; x < this.activities.length; x++)
       if (this.activities[x] == this.text.value) {
         this.activities.splice(x, 1)
         return
       }
   } */


}
