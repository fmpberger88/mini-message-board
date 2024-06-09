# 🚀 Mini Message Board 🚀

A simple message board application built with Node.js, Express, MongoDB, and Handlebars.

## 🌟 Features

- 📝 Users can post messages with a username.
- 📦 Messages are stored in a MongoDB database.
- 📅 Messages are displayed in descending order by date.
- ✅ Form validation and sanitization using `express-validator`.
- 🎨 Simple styling with CSS.

## 🛠️ Getting Started

### Prerequisites

- 🟢 Node.js and npm installed.
- 🟠 MongoDB installed and running locally or use a MongoDB Atlas account.

### Installation

1. 📥 Clone the repository:
    ```bash
    git clone https://github.com/yourusername/mini-message-board.git
    cd mini-message-board
    ```

2. 📦 Install the dependencies:
    ```bash
    npm install
    ```

3. 🗝️ Create a `.env` file in the root directory and add your MongoDB credentials:
    ```env
   MONGO_URL=YourMongoAtlasURL
    ```

4. 🚀 Start the application:
    ```bash
    npm run start
    ```

   Alternatively, use `nodemon` for development:
    ```bash
    npm install -g nodemon
    nodemon ./bin/www
    ```

### Usage

1. 🌐 Open your browser and navigate to `http://localhost:3000`.
2. ➕ Add a new message by filling out the form and clicking "Add Message".
3. 👀 View the list of messages displayed in descending order by date.


## Dependencies

- [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js.
- [express-handlebars](https://github.com/ericf/express-handlebars) - A Handlebars view engine for Express.
- [express-validator](https://express-validator.github.io/docs/) - Express middleware for validation of incoming requests.
- [dotenv](https://github.com/motdotla/dotenv) - Loads environment variables from a `.env` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the need to learn how to build a simple message board application with modern web technologies.
- Thanks to all the open-source contributors whose libraries and tools made this project possible.
