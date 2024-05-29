# FrontEnd
## Installation 
To install the project dependencies, ensure you have Yarn installed and follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run npm install to install all dependencies

Important: Ensure you have Node.js version >18.17 installed on your system.

## Usage

1. Create a `.env` file in the project directory.
2. Inside the `.env` file, set the `VITE_API_URL` variable to the desired API backend route. For practical purposes, the default value is:

```bash 
  VITE_API_URL = http://localhost:4000/api/v1
```
It's important to prefix `VITE_` to the variable name for proper usage.

3. Run the development server with the following command:

```bash
npm run dev
```

4. Navigate to [http://localhost:5173](http://localhost:5173) in your browser to view the project.

# BackEnd

## Installation 
To install the project dependencies, ensure you have Yarn installed and follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run npm to install all dependencies

Important: Ensure you have Node.js version >18.17 installed on your system.

## Usage

1. Create a `.env` file in the project directory.
2. Inside the `.env `file, define the necessary environment variables as per your configuration.
```bash 
    PORT = 4000
    API_VERSION_ROUTE = /api/v1
    NODE_ENV = development
    MONGO_DB_URI = mongodb+srv://<Username>:<Password>@...mongodb.net
```
It's important to set the variables `PORT` and `API_VERSION_ROUTE` as i show you to for proper usage.

3. Run the development server with the following command:

```bash
npm run dev
```

