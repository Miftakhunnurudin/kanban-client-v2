import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)
function CalendarView () {
    const myEventsList = []
    return (
        <div>
            <Calendar
              localizer={localizer}
              events={myEventsList}
              startAccessor="start"
              endAccessor="end"
              style={{ height: '80%' }}
            />
        </div>
    )
}

export default CalendarView