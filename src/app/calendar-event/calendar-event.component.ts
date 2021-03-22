import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IDay, IEvent } from '../model/iday';

@Component({
    selector: 'calendar-event',
    templateUrl: 'calendar-event.component.html',
    styleUrls: ['calendar-event.component.scss'],
})
export class CalendarEventComponent implements OnInit, OnChanges {

    @Input() year: number;
    @Input() monthIndex: number;
    @Input() events: IEvent[];

    public days: IDay[] = [];


    ngOnChanges(changes: SimpleChanges): void {
        this.setCalendar();
    }

    ngOnInit(): void {
        // todo: check if is necessary
        // this.setCalendar();
    }

    private setCalendar(): void {
        this.days = [];

        const daysInMonth = this.daysInMonth(this.monthIndex);
        const dayWeek = this.daysWeek(this.monthIndex);
        // build the previous month left days
        if (dayWeek > 0) {
            const daysInPrevMont = this.daysInMonth(this.monthIndex - 1);
            const startPrevMonth = daysInPrevMont - dayWeek;

            for (let value = startPrevMonth; value <= daysInPrevMont; value++) {
                this.days.push({
                    value,
                    isPrevMonth: true,
                });
            }
        }

        // build the current month
        for (let dayIndex = 1; dayIndex <= daysInMonth; dayIndex++) {

            const day: IDay = {
                value: dayIndex,
                event: this.attachEvent(dayIndex),
            };

            this.days.push(day);
        }
    }

    private attachEvent(dayIndex: number): IEvent {
        const makeStringDate = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`;
        const strDateCalendar = makeStringDate(new Date(2021, this.monthIndex, dayIndex));

        const event = this.events.find(e => {
            const strDateEvent = makeStringDate(e.date);
            return strDateEvent === strDateCalendar;
        })

        return event;
    }

    private daysInMonth(month: number, year: number = new Date().getFullYear()): number {
        return new Date(year, month - 1, 0).getDate();
    }

    private daysWeek(month: number, year: number = new Date().getFullYear()): number {
        return new Date(year, month, 1).getDay();
    }
}