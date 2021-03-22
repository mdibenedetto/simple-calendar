
export interface IEvent {
    date: Date;
    description: string;
}

export interface IDay {
    value: number;
    displayName?: string;
    isPrevMonth?: boolean;
    event?: IEvent
}
