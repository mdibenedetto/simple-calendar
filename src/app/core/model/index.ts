
export interface CalendarEvent {
    date: Date;
    description: string;
    tpe?: number;
}

export interface CalendarDay {
    value: number;
    isToday?: boolean;
    displayName?: string;
    isPrevMonth?: boolean;
    event?: CalendarEvent;
}
