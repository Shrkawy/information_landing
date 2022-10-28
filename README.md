## MVSTACK WEBSITE BUILDER

## INSTALLATION

1. Install [Node.js](https://nodejs.org/en/download/)
2. Install [Git](https://git-scm.com/downloads)
3. add the following to your .env file
   DATABASE_URL=postgres://username:password@localhost:5432/database_name
   NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL=https://api.cloudinary.com/v1_1/your_cloud_name/upload
   NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_upload_preset
4. Install Dependencies

```bash
npm install
```

5. Migrate the database

```bash
npm run migrate
```

6. Run the server

```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser
