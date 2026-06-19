# SDS Club Website (COEP Tech)

A modern full-stack web application for the **Software Development Society (SDS)** of **COEP Technological University**, designed to showcase SDS events, projects, team members and manage project requests from students & faculty.

---

## Features

✅ Modern UI — **React + TailwindCSS**  
✅ **Admin Dashboard** (JWT + Cookie auth)  
✅ **Project Request System** (Submit → Approve/Reject)  
✅ Email notifications using **Nodemailer**  
✅ MongoDB Atlas cloud database  
✅ Responsive and mobile-friendly UI  
✅ Secure routes & form handling  

---

## Tech Stack

### Frontend
- React
- TailwindCSS
- Lucide Icons
- Vercel Deployment

### Backend
- Node.js + Express
- JWT Authentication
- Nodemailer + Gmail SMTP
- dotenv

### Database
- MongoDB Atlas (Mongoose ODM)

---

## Folder Structure
```
/backend
 ┣ models/
 ┣ routes/
 ┣ controllers/
 ┣ utils/sendMail.js
 ┣ server.js

/frontend
 ┣ src/pages
 ┣ src/components
 ┣ public/
 ┣ package.json

```

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <https://github.com/atharvamw/SDS.git>
    cd SDS
    ```
2.  **Install Backend Dependencies:**
    ```bash
    cd backend
    npm install
    ```
3.  **Install Frontend Dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```
## Environment Variables

Create a `.env` file in the **`/backend`** directory:

```env
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/SDS
MONGO_URI_PROJECT=mongodb+srv://<user>:<password>@cluster.mongodb.net/SDS_Projects
JWT_SECRET=yourStrongSecretKey
ADMIN_MAIL=yourAdmin@gmail.com
ADMIN_MAIL_PASS=yourAppPassword # Google App Password (16 characters)
```
## Running the App
#### Backend
```bash
cd backend
npm run dev
```
#### Frontend
```bash
cd frontend
npm run dev
```
## Admin Workflow
| Action               | Trigger                                             |
| -------------------- | --------------------------------------------------- |
| User submits project | Request saved in DB & mail sent to applicant        |
| Admin approves       | Project moved → official list & approval email sent |
| Admin rejects        | Request deleted & rejection email sent              |

## Contributors
- Atharva Wadekar: [**LinkedIn**](https://www.linkedin.com/in/atharvamw/) | [**GitHub**](https://github.com/atharvamw)
- Krishna Warfade: [**LinkedIn**](https://www.linkedin.com/in/krishna-warfade/) | [**GitHub**](https://github.com/krishna-warfade)
- Sonia Pagare: [**LinkedIn**](https://www.linkedin.com/in/sonia-pagare-741207339/) | [**GitHub**](https://github.com/soniacodes17)
