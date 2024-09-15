Project is Live at this Link: https://whatsapp-clone-mern-g4ff.onrender.com

To run this project on your local machine, run the 3 commands below in the terminal: run install, npm run build, npm run start


Step1: Create a react app in frontend folder using command : npm Create vite@latest . (. means current directory), npm install , npm run dev
Step2: run following command in root folder : npm init -y
Step3: Create a server.js file in backend folder and edit the package.json file in root folder and add following line "main" : "server.js" , "type" : "module"
Step4: run following command in root folder : npm install express mongoose dotenv cookie-parser bcryptjs jsonwebtoken socket.io
Step5: edit the package.json file in root folder and add following line in scripts section "server" : "node backend/server.js"
Step6: run following command in root folder : npm run server (to start the server), npm install nodemon --save-dev (to install nodemon) and edit the package.json file in root folder and update following line in scripts section "server" : "nodemon backend/server.js"
Step7: Create .env file in root folder and add following lines : MONGO_URL = "xyz", PORT=5000 etc..
Step8: use app.use("/api/auth", authRoutes) in server.js file to use authRoutes.js file which is created in backend/routes folder which containg all the routes for authentication i.e login, register, logout etc..
Step9: use app.use("/api/messages", messageRoutes) in server.js file to use messageRoutes.js file which is created in backend/routes folder which containg all the routes for messages i.e addMessage, getMessage, sendMessage etc..
Step10: use app.use("/api/users", userRoutes) in server.js file to use userRoutes.js file which is created in backend/routes folder which containg all the routes for users i.e getAllUsers, getUser, updateUser etc..
Step11: create Controllers folder in backend folder and create authController.js, messageController.js, userController.js files in it which will contain all the logic for authentication, messages and users respectively.
Step12: create Models folder in backend folder and create userModel.js, messageModel.js, conversationModel.js files in it which will contain all the schema for users and messages respectively.
Step13: use dcryptjs to hash the password and jsonwebtoken to create a token for authentication and use cookie-parser to parse the cookies from the request object
Step14: open new terminal, make type as bash and run following command in root folder : openssl rand -base64 32 (to generate a secret key for jwt) and add it to .env file as JWT_SECRET
Step15: create util folder in backend folder and create generateToken file in it which will contain the logic to generate a token for authentication
Step16: in signup Controllers we are setting default profile pic using avatar.iran.liara.run/public/avatars/male/1.jpg and for female avatar.iran.liara.run/public/avatars/female/1.jpg also we are checking if the user already exists and if not then we are creating a new user and saving it to the database and also generating a token and sending it to the client side and also sending the user data to the client side
Step17: in login Controllers we are checking if the user exists and if the password is correct and if both are true then we are generating a token and sending it to the client side and also sending the user data to the client side
Step18: in logout Controllers we are clearing the cookie and sending a message to the client side that the user is logged out
Step19: we gonna have 2 different collections one for messages  and one for conversations in mongodb and we gonna have a reference of conversation in messages collection and vice versa, each message will have a senderId ,a receiverId and a message content and a timestamp, each conversation will have a id and a partiicipants array which will contain the senderId and receiverId as well as messages array which will contain all the messagesId between the sender and receiver
Step20: now we will work on message and conversation model and also on message and conversation controllers
Step21: so before sending a message we will add a middleware called protected route so that only authenticated users can send a message 
Step22: now we will work to get users for sidebard, send message and get message
Step23: now we will work on the frontend part of the application: run this command in root folder : npx create-react-app frontend and then run this command in root folder : git init 
Step24: put the .gitignore file in the root folder and add .env line in .gitignore file, also run this command in root folder : git add . and then run this command in root folder : git commit -m "first commit" and then run this command in root folder : git branch -M main and then run this command in root folder : git remote add origin https://github.com/username/repo.git and then run this command in root folder : git push -u origin main
Step25: we will use tailwindcss for styling the application, so run this command in frontend folder : npm install -D tailwindcss postcss autoprefixer and then run this command in frontend folder : npx tailwindcss init -p and then add the following lines in tailwind.config.js file : content: 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

step26: Add the Tailwind directives to your CSS, Add the @tailwind directives for each of Tailwind’s layers to your ./frontend/src/index.css file. content: 
@tailwind base;
@tailwind components;
@tailwind utilities;

step27: now we will use DaisyUI for styling the application, so run this command in frontend folder : npm i -D daisyui@latest and then add the following lines in tailwind.config.js file : plugins: [ require('daisyui')],

step28: remove App.css content, also you can add extension in vs code Tailwind CSS IntelliSense for better experience
step29: install react-router-dom for routing and axios for making requests to the backend, so run this command in frontend folder : npm install react-router-dom axios
step30: install lucide-react for icons, so run this command in frontend folder : npm install lucide-react, install framer-motion for animations, so run this command in frontend folder : npm install framer-motion
step31: here we use fetch api for making requests to the backend, so we will use axios for making requests to the backend, we are not using redux for state management, we are using context api for state management
step32: we will use react-toastify for showing notifications, so run this command in frontend folder : npm install --save react-toastify and then import it in App.js file and use it in the component where you want to show the notification
step33: you will get a CORS error when you try to make a request to the backend from the frontend, so we will add following in vite.config.js file : 
proxy: {
			"/api": {
				target: "http://localhost:5000",
			},
		},
step35: we will use context to store user at Localstorag and use it in the application, so we will create a context file in src folder and name it AuthContext.js and then we will use it in the component where we want to use the user data
step36: now we will use Zustand for state management, so run this command in frontend folder : npm install zustand (to have a globally accessible state)
step37: now we will work on all the functionalties of the application like login, register, logout, send message, get message, get users for sidebar, etc.
step38: after that we finally work  on Socket.io for real time messaging, so run this command in root folder : npm install socket.io and then run this command in root folder : npm install socket.io-client
step39: create a socket server in backend folder and name it socket and then use it in server.js file
