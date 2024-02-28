/* eslint-disable no-unused-vars */
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { formatDate } from '@fullcalendar/core';
import listPlugin from "@fullcalendar/list";

import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";

import Header from "../../components/Header";


const CalendarComponent = () => {

    const [calendarEvents, setCalendarEvents] = useState([]);

    const handleDateSelect = (selectInfo) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selectInfo.view.calendar;
        calendarApi.unselect(); // clear date selection
        if (title) {
            calendarApi.addEvent({
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
            });
        }
    }

    const handleEventClick = (clickInfo) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${clickInfo.event.title}'`
            )
        ) {
            clickInfo.event.remove();
        }
    }

    return (
        <Box m="20px">
            <Header title="Calendar" subtitle=" Organiza y registra las fechas clave y datos de revisión de tus equipos médicos, garantizando un seguimiento preciso y eficiente. Mantén un control detallado de eventos relacionados para asegurar un óptimo rendimiento y cumplimiento de normativas en el ámbito de la salud" />
        <Box display="flex" justifyContent="space-between">

        {/* CALENDAR SIDEBAR */}
            <Box
            flex="1 1 20%"
            p="15px"
            borderRadius="4px"
            >
                <Typography variant="h6"
                    fontWeight={600}
                    marginBottom={2}

                >
                    Events
                </Typography>
                <List
                    sx={{
                    backgroundColor: "#DEDBC2",
                    borderRadius: "5px",
                    }}
                >
                    {calendarEvents.map((event) => (
                    <ListItem
                        key={event.id}
                        sx={{
                        margin: "10px 0",
                        "&:hover": {
                            borderRadius: "2px",
                            backgroundColor: "#F2E6A1",

                        },
                        }}
                    >
                        <ListItemText
                        primary={event.title}
                        secondary={
                            <Typography>
                            {formatDate(event.start, {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                            </Typography>
                        }
                        />
                    </ListItem>
                    ))}
                </List>
            </Box>
            
        {/* CALENDAR */}
            <Box 
                flex="1 1 80%"
                p="15px"
                borderRadius="4px"
                bgcolor={"#CFE0CB"}
            >
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                    }}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={true}
                    initialEvents={[
                    { title: "Event Now", start: new Date() },
                    ]}
                    select={handleDateSelect}
                    eventContent={function (arg) {
                    return (
                        <Box
                        sx={{
                            backgroundColor: "primary.main",
                            color: "white",
                            borderRadius: "4px",
                            padding: "5px",
                        }}
                        >
                        {arg.timeText}
                        </Box>
                    );
                    }}
                    eventClick={handleEventClick}
                    eventsSet={(events) => {
                        setCalendarEvents(events);
                    }}
                />
            </Box>

    </Box>
    </Box>
    );
}

export default CalendarComponent;