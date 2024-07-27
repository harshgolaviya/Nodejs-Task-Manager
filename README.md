
# Task Manager

## Overview

The Task Manager is a roll-based system designed to handle user management and task tracking. It allows users to register, log in, and manage their profiles and tasks. Admins have extended permissions to manage all users and tasks in the system. The application uses token-based authentication for security.

## Features

- **User Management**
  - Users can register and log in with validation.
  - Users can update their profiles.
  - Users can add tasks and view remaining tasks.

- **Admin Functions**
  - Admins can view all users.
  - Admins can view tasks by due date.
  - Admins can update or delete any user’s information.
  - Admins have the ability to manage all tasks and users.

- **Authentication**
  - Users and admins log in with a token-based authentication system.

## Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/harshgolaviya/Nodejs-Task-Manager.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Nodejs-Task-Manager
   ```

3. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Running the Project

1. Start the application:
   ```bash
   npm run start
   ```

2. Open your browser and navigate to `http://localhost:3000` (or the port specified in your configuration) to use the application.

## Usage

- **For Users:**
  - Register an account and log in.
  - Update your profile as needed.
  - Add tasks and track remaining tasks.

- **For Admins:**
  - Log in with admin credentials.
  - View and manage all users.
  - View tasks by due date.
  - Update or delete user information.


Thank you for using the Task Manager!
