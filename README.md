# TaskFlower

A full-featured task management application built with **React + Vite**, styled using **Tailwind CSS** and **DaisyUI**, backed by **Express.js** and **MongoDB**. Users can create, update, delete, filter, and get notified about tasks in a clean and responsive UI.

This is a full-stack project where users can create accounts and manage multiple shops. Each shop gets a **dynamic subdomain** like `http://beautyhub.localhost:5173`. The dashboard loads dynamically based on the subdomain, and session is maintained across subdomains using cookies.

---

## Live Site: https://popx-task.web.app/
## Client code: https://github.com/ashikbillah699/9AM_solution_client
## Server code: https://github.com/ashikbillah699/9AM_solution_server

---

## Technologies Used

### Frontend:
- React (with Vite)
- React Router DOM
- Tailwind CSS
- DaisyUI
- SweetAlert2
- Context API
- React Icons

### Backend:
- Node.js
- Express.js
- MongoDB
- CORS & dotenv
- jwt

---

## Features

- ✅ Register & Login with secure cookie-based authentication
- ✅ Create and manage multiple shops per user
- ✅If “Remember Me” is checked, session lasts 7 days; otherwise, it expires after 30 minutes.
- ✅ Subdomain-based shop dashboards with token (`shopName.localhost:5173`)

## Extra Features
- ✅ CRUD functionality for tasks
- ✅ Task filtering and reminders
- ✅ Auth session handling across subdomains
- ✅ Responsive UI using Tailwind + DaisyUI
