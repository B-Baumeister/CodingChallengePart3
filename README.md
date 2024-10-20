# User Management Table with Angular and Angular Material

## About this Project

This project is a simple user management table built with Angular and Angular Material. It displays a list of users and allows you to view detailed information about each user in a dialog when a row in the table is clicked. Additionally, the table supports pagination.

## Features

- User Table View: Users are displayed in a table with columns for ID, First Name, Last Name, and Email.
- Dialog with User Details: When a table row is clicked, a dialog opens displaying detailed information about the selected user (ID, First Name, Last Name, Email, Birthdate, Phone Number).
- Pagination: The table is paginated, making it easy to browse large datasets.
  Material Design: The project uses Angular Material to provide a modern UI design.

## Project Structure

The main components and files in this project are:

- app.component.ts: The main component of the application.
- user-list-component.component.ts: Contains the user list and the layout for the table.
- user-details-dialog.component.ts: Dialog component that displays user details.
- user.service.ts: A service that provides the user list.
- users.ts: A sample user list with various user data.

## Technologies Used

- Angular: Framework for building web applications.
- Angular Material: UI component library that provides modern and responsive components.
- TypeScript: Main language used for developing Angular applications.
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Installation and Setup

To run this project locally, follow these steps:

- Clone the repository:

```
  git clone https://github.com/your-repository-url.git
```

- Navigate to the project directory:

```
cd your-project-directory
```

- Install dependencies:

```
npm install
```

- Start the application:

```
 ng serve
```

- The application will be available at http://localhost:4200/.

## Component Overview

1.  UserListComponent
    This component displays the list of users in a table. It uses MatTableDataSource to display the data and connects pagination using MatPaginator. Users can click on a row to open the dialog showing the user’s details.

2.  UserDetailsDialogComponent
    This dialog shows detailed information about the selected user. The displayed details include:

         User ID

         First and Last Name

         Email Address

         Birthdate (if available)

         Phone Number (if available)

3.  UserService
    This service provides the user data to the UserListComponent. The users are loaded from a predefined list in the users.ts module.

### Sample User Data

Here is an example of a user displayed in the application:

    {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    birthDate: '1990-01-15',
    phoneNumber: '123-456-7890'
    }

## Conclusion

This application provides a simple yet effective solution for displaying and managing user data with modern UI components and a clean, structured design. It is ideal for getting started with Angular Material and Angular Services.
