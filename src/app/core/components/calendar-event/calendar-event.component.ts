import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CalendarDay, CalendarEvent } from '../../model';
import { getDaysInMonth, getFirstDayOfWeek, isToday } from '../../shared/date-helpers';

@Component({
    selector: 'calendar-event',
    templateUrl: 'calendar-event.component.html',
    styleUrls: ['calendar-event.component.scss'],
})
export class CalendarEventComponent implements OnChanges {

    @Input() year: number;
    @Input() monthIndex: number;
    @Input() events: CalendarEvent[];

    public calendarDays: CalendarDay[] = [];
    public weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    ngOnChanges(changes: SimpleChanges): void {
        this.setCalendar();
    }

    private setCalendar(): void {
        this.calendarDays = [];

        const MONDAY = 1;
        const daysInMonth = getDaysInMonth({ month: this.monthIndex });
        const firstDayWeek = getFirstDayOfWeek({ month: this.monthIndex });

        // build the previous month left days
        if (firstDayWeek > MONDAY) {
            debugger
            const daysInPrevMont = getDaysInMonth({ month: this.monthIndex - 1 });
            const startPrevMonth = daysInPrevMont - (firstDayWeek - 2);

            for (let value = startPrevMonth; value <= daysInPrevMont; value++) {
                this.calendarDays.push({
                    value: value,
                    isPrevMonth: true,
                });
            }
        }

        // build the current month
        for (let dayIndex = 1; dayIndex <= daysInMonth; dayIndex++) {

            const day: CalendarDay = {
                value: dayIndex,
                event: this.attachEvent(dayIndex),
            };

            this.calendarDays.push(day);
        }
        // set current day
        const calendarToday = this.calendarDays.find(d => isToday({
            day: d.value,
            month: this.monthIndex,
            year: this.year
        }));

        calendarToday && (calendarToday.isToday = true);
    }

    private attachEvent(dayIndex: number): CalendarEvent {
        const makeStringDate = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
        const strDateCalendar = makeStringDate(new Date(2021, this.monthIndex, dayIndex));

        const event = this.events.find(e => {
            const strDateEvent = makeStringDate(e.date);
            return strDateEvent === strDateCalendar;
        })

        
        return event;
    }

}
