# Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/AnujPandey123/Flavorly.git

2. Navigate to the project directory:

       cd Flavorly

3. Navigate to server folder:

       cd server
 

4. Install client dependencies:

       npm install 


5. Create a `.env` file in the project root and configure your environment variables:
   
       PORT=3000
       MONGODB_URI=mongodb://localhost/flavorly
       SECRET=your-secret-key

6. Replace `your-secret-key` with a secure secret for JWT token generation.

7. Start the development server
       
       node index.js
   
## Folder Structure
The project follows a standard MERN stack folder structure:

- server: Contains the Express.js backend application.
- Schema: Define the MongoDB schemas and models.
- routes: Define the API routes.
- controllers: Handle route logic and interact with the database.
- middlewares: Custom middleware functions.
- db: Configuration files (e.g., database connection).

## Technologies Used

#### Backend:

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT) for authentication
- bcrypt for secured password hashing


