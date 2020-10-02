# MDNLocalLibrary

## Description

Recreate MDN "Local Library" Express (Node) tutorial using pg, sequelize, jwt

Routes:

```
/login
/register
```

API:

```
GET - /api/users

```

## Installation

**Step 1. Clone the code into a fresh folder.**

```
$ git clone git@github.com:bonasunu/MDNLocalLibrary.git
$ cd MDNLocalLibrary
```

**Step 2. Install Dependencies.**

Next, we need to install the project dependencies, which are listed in `package.json`.

```
$ npm install
```

or

```
$ yarn
```

**Step 3: Update environment variables.**

Create a new file named `.env`. Update the new file with your database credentials. It should look similar to this:

```
# .env file
USER="[INSERT_DATABASE_USER]"
PASS="[INSERT_DATABASE_PASSWORD]"
HOST="[INSERT_DATABASE_HOST]"
DB_DEV="[INSERT_NEW_DATABASE_DEVELOPMENT]"
DB_TEST="[INSERT_DATABASE_TEST]"
DB_PROD="[INSERT_DATABASE_PRODUCTION]"
PORT=7000
```

**Step 4. Run sequelize**

Run sequelize to migrate and create table with seeders.

If database for this repo doesn't exist, create it using this command.
Skip this command if you already have the database. (Don't forget to add it on .env DB_DEV)

```
$ npx sequelize db:create
```

Run this after database creation

```
$ npx sequelize db:migrate
```

**Step 5. Run the Server**
Now we're ready to start our server which is as simple as:

```
$ npm run dev
```

or

```
$ yarn run dev
```

Open http://localhost:7000 or http://localhost:5000 (default port if there is no PORT on .env file) to view it in your browser.

The app will automatically reload if you make changes to the code.
You will see the build errors and warnings in the console.
