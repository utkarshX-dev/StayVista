# StayVista

StayVista is a full-stack Node.js web application for listing, searching, and reviewing vacation rentals. Users can create, edit, and delete listings, upload images (with Cloudinary), leave reviews, and manage their own stays. The app uses MongoDB Atlas, Express, EJS, Bootstrap, and Passport for authentication.

---

## Features

- User authentication (register, login, logout)
- Create, edit, and delete property listings
- Upload listing images (Cloudinary integration)
- Review and rate listings
- Flash messages for user feedback
- Responsive Bootstrap UI
- MongoDB Atlas for data storage

---

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- EJS (Embedded JavaScript templates)
- Bootstrap 5
- Passport.js (local strategy)
- Cloudinary & multer-storage-cloudinary
- connect-mongo (session store)
- Joi (validation)
- dotenv

---

## Setup Instructions

### 1. Clone the repository

```sh
git clone https://github.com/utkarshX-dev/StayVista.git
cd StayVista
```

### 2. Install dependencies

```sh
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory with the following:

```
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### 4. Seed the database (optional)

You can seed the database with sample listings using:

```sh
node init/index.js
```

### 5. Start the server

```sh
npm start
```
or (for development with auto-reload):
```sh
npx nodemon index.js
```

### 6. Visit the app

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## Folder Structure

```
majorprojectstayvista/
├── controllers/
├── models/
├── routes/
├── views/
│   ├── includes/
│   ├── layouts/
│   └── listings/
├── public/
├── init/
├── cloudconfig.js
├── schema.js
├── index.js
├── .env
└── README.md
```

---

## Deployment

- Make sure your environment variables are set on your deployment platform (e.g., Render, Heroku, Vercel).
- Use a production MongoDB Atlas database and Cloudinary account.

---

## License

MIT

---

## Credits

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Cloudinary](https://cloudinary.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
