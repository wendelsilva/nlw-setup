import dayjs from "dayjs";

export function generateDatesfromBeginning() {
    const firstDayofTheYear = dayjs().startOf('year')
    const today = new Date()

    const dates = []
    let compareDate = firstDayofTheYear

    while (compareDate.isBefore(today)) {
        dates.push(compareDate.toDate())
        compareDate = compareDate.add(1, 'day')
    }

    return dates
}