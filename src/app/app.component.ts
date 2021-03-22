import { Component, OnInit } from '@angular/core';
import { IEvent } from './model/iday';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'calendar-manager';
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  selectedMonth = new Date().getMonth();
  selectedYear = new Date().getFullYear();
  dummyEvents: IEvent[] = [];

  ngOnInit(): void {
    this.createDummyEvents();
  }

  private createDummyEvents(): void {
    const year = 2021;
    const month = new Date().getMonth();

    for (let i = 0; i < 30; i += 8) {
      const day = i;
      const date = new Date(year, month, day);

      this.dummyEvents.push({
        date,
        description: "Event " + i
      });

    }
  }

  public onMonthChange(e: { currentTarget: HTMLSelectElement }) {
    this.selectedMonth = e.currentTarget.selectedIndex;
  }
}

