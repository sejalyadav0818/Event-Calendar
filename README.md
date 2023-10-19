# Event Calendar Application - React

## Features

### 1. Add, Edit, and Delete Events
   * Users can add new events specifying the name, date, start time, end time, description, and participants.
   * Editing functionality allows modification of existing events.

### 2. Calendar View
   * Display a monthly view with dates showing summarized events.
   * Highlight days with events.
   * Allow navigation to switch between months (and potentially years).

### 3. Event View
   * Clicking on a day shows a detailed list of events for that day.
   * Events are listed chronologically.

### 4. Reminders
   * Users can set reminders for events. When an event is near, the application can display a notification (for web, you could use browser notifications).
   * 

## State Management
**Implementation using Redux and Context API** [Diffrent Branch]

## Pages

### 1. Homepage
   * Shows the monthly calendar view.
   * Highlights the current day and days with events.
   * Allows navigation to different months or years.

### 2. Day View Page
   * Detailed view of a specific day.
   * Lists all events for the chosen day.
     
### 3. week View Page
   * Detailed view of a specific week.
   * Lists all events for the chosen week.


### 4. Add/Edit Event Page
   * A form to add a new event.
   * If editing, this form would pre-fill with the event's existing details.

