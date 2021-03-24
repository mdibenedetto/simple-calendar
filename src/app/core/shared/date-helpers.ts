const currentYear = new Date().getFullYear();

type DateType = {
    year?: number;
    month?: number;
    day?: number;
}

export function getDaysInMonth({ year = currentYear, month }: DateType): number {
    return new Date(+year, +month + 1, 0).getDate();
}

export function getFirstDayOfWeek({ year = currentYear, month }: DateType): number {
    return new Date(+year, +month, 1).getDay();
}

export function isToday({ year = currentYear, month, day }: DateType): boolean {
    const today = new Date();
    const dt = new Date(+year, +month, +day);

    return dt.getDate() === today.getDate()
        && dt.getMonth() === today.getMonth()
        && dt.getFullYear() === today.getFullYear();

}
