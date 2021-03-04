const Calendar = (): JSX.Element => {
    const daysInMonth = (iMonth: number, iYear: number) => {
        return 32 - new Date(iYear, iMonth, 32).getDate()
    }

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const firstDay = new Date(year, 3).getDay()
    const days = daysInMonth(month, year)
    console.log(days)
    return <button>Hi</button>
}

export { Calendar }
