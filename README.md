# Brothers & Food

A full-stack application for Brothers & Food restaurant, created by yonyalabs.

## Tech Stack

- **Frontend**: React with Create React App, Tailwind CSS, shadcn/ui components
- **Backend**: FastAPI (Python)
- **Database**: MongoDB

## Local Development

### Frontend

```bash
cd frontend
yarn install
yarn start
```

The frontend will run on `http://localhost:3000`

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --port 8000
```

The backend will run on `http://localhost:8000`

## Deployment to Vercel

This project is configured for deployment on Vercel. Follow these steps:

1. **Install Vercel CLI** (optional, for command-line deployment):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel Dashboard**:
    - Push your code to GitHub
    - Go to [vercel.com](https://vercel.com)
    - Import your GitHub repository
    - When asked for Root Directory, select `frontend/` (important)
    - Vercel will use the configuration from `vercel.json` (which assumes the project root is `frontend/`)
    - Add the required environment variables in Vercel dashboard:
     - `MONGO_URL`: Your MongoDB connection string
     - `DB_NAME`: Your database name
     - `CORS_ORIGINS`: Allowed CORS origins (comma-separated)
       - `REACT_APP_API_URL`: Your API URL (will be auto-set by Vercel)

3. **Deploy via CLI**:
   ```bash
   vercel
   ```

### Notes about monorepo and Vercel

- The repository contains both `frontend/` (React app) and `backend/` (FastAPI). The Vercel deployment targets only the `frontend/` directory.
- The `vercel.json` is configured to run `yarn install` and a static build from the `frontend/` directory (Create React App), outputting to `build/`.
- If you ever prefer to set the Vercel Project Root Directory to the repository root instead of `frontend/`, revert `vercel.json` to reference `frontend/package.json` and set `installCommand` to `cd frontend && yarn install`.

### Environment Variables

Create a `.env` file in the `backend` directory with:
```
MONGO_URL=your_mongodb_connection_string
DB_NAME=your_database_name
CORS_ORIGINS=*
```

Create a `.env` file in the `frontend` directory with:
```
REACT_APP_BACKEND_URL=http://localhost:8000
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
```

## Build

To create a production build of the frontend:

```bash
cd frontend
yarn build
```

The build will be created in `frontend/build/` directory.

## Credits

Created by yonyalabs

