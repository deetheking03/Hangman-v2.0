# Hangman Game
This is an upgraded version of the classic Hangman game v1.0 I built with **React** and powered by a **MongoDB Atlas** backend. Players guess letters to solve words, and their **win/loss stats** are tracked and stored in a cloud database.

## What’s New in v2.0

- **Unit Testing** added using Jest and React Testing Library.
- **Backend Server (Node.js + Express)** created to manage results.
- **MongoDB Atlas Integration** for tracking player stats remotely.
- **Win/Loss Tracking:** Players’ results are recorded automatically.

## How to Run This Game

### **Step 1: Install Node.js**
You must have Node.js installed to run this project.  

[Download Node.js here](https://nodejs.org/)

### **Step 2: Clone This Repository**
```sh
https://github.com/deetheking03/Hangman-v2.0
```

### **Step 3: Install Required Dependencies**
Run this command in your terminal:

```sh
cd Hangman
npm install
```

### **Step 4: Start the Game (Frontend)**

```sh 
npm start
```

## Run the Backend Server
The backend is located in the /backend folder and is required for win/loss tracking.

### **Step 1: Install Required Dependencies**
Run this command in your terminal:

```sh
cd backend
npm install
```

### **Step 2: Start the Server**
```sh
node server.js
```
The backend will run on: http://localhost:4000

## How to Play Hangman
1. You will see a hidden word represented by underscores (`_ _ _ _`).
2. Use the input box to guess one letter at a time.
3. If you guess correctly, the letter will appear in the word!
4. If you guess wrong, the Hangman will start to appear.
5. You have 5 wrong guesses before you lose!
6. Click "New Game" to restart at any time.


## Win/Loss Tracking API
### View your stats
```sh
GET http://localhost:4000/stats/YourName
```
Instead of "YourName", you will put the name you entered when it prompted you.

Response should look something like this:
```sh
{"wins":3,"total":3,"percentage":100}
```
## Hangmanv2.0 Demo 
https://github.com/deetheking03/Hangman/blob/main/HangmanDemo.mp4