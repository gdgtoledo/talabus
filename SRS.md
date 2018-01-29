# Talabus SRS

## Project brief
Create a webapp displaying in a friendly manner Talavera's Bus station departure and arrival times.

## Requirements

### Back
[Pending]

### Front
[Pending]

## Functional analysis (to be discussed and defined with accuracy)
0. Periodical cron task to http://www.estacionbustalaveradelareina.com/Resultadosdestinos.php?iddestino=N
1. On first run, and after user approval, Talabus will locate the user to set a place of departure and store it. User will be prompted if wants to modify this place of departure.
2. Then, the user will select a place of destination.
3. Then, a request will be made to our API sending departure and destination place.
4. Talabus' back office will add the current dateTime to this request and respond with the next available departure.
5. Talabus' back office can make an url request to https://regular.autobusing.com/venta/inicio_info?empresa=samar&origen_codigo=NNNN&destino_codigo=NNNN&hora_ida=selectedTime_eid=XXXXXXXX to get availability and allow front to display a link or button to the ticket commerce.

## Wireframe

[Pending]

## Design

[Pending]

## Supported browsers
Ensure that the elements work and display correctly in the following browsers:

- Firefox (latest version)
- Google Chrome (latest version)
- Safari (latest version)
- Microsoft Edge
- Internet Explorer 11
- Possible hybrid app version

## Coding Standards
When working on the project use consistent coding style. You can check guidelines like [Code Guide](http://codeguide.co/) or [CSS Guidelines](http://cssguidelin.es/).

## Project Deadline

[Pending]

## Quality Assurance

What you need to do to get high QA score? Simply answer **Yes** to all these questions:

### General

- Are all requirements set above met?
- Can the project be built using `npm run build`?
- Is the page working without any JS errors?

### Precision

- Is reasonable precision achieved?

### Browser check

- Does page display and work correctly in supported browsers?

### Valid HTML

- Is the page valid?

### Semantic Markup

- Are the correct tags being used?

### Coding Standards

- Is the page using a consistent HTML coding style?
- Is the page using a consistent CSS coding style?
- Is the page using a consistent JS coding style?

### Optimization

- Are image files sufficiently compressed?
- Is CSS and JS concatenated and minified? 

### Accessibility

- Are proper ALT attributes for images provided?
- Are ARIA attributes properly used?
- Is proper heading structure in place?
