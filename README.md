# metacritic-back

TypeScript + Express backend used to expose videogame data related to Metacritic from a Supabase database.

## Important Notice

- This is an unofficial project.
- It is not affiliated with, endorsed by, sponsored by, or officially connected to Metacritic or its owners.
- This project is non-profit.
- Its purpose is recreational and educational.
- All third-party names, brands, and related content belong to their respective owners.

## Overview

This service exposes an Express API that:

- loads configuration from environment variables
- connects to Supabase
- reads data from the `Games` table
- returns the data through an HTTP endpoint

## Current Endpoint

- `GET /api/games`

Expected response example:

```json
[
  {
    "title": "Game title",
    "url": "https://...",
    "score": "90",
    "thumbnail": "https://...",
    "release_date": "2025-01-01"
  }
]
```

## Tech Stack

- Node.js
- TypeScript
- Express
- Supabase
- dotenv
- cors

## Project Structure

```text
src/
  config/        Global configuration and Supabase client
  controllers/   Request and response handling
  routes/        Endpoint definitions
  services/      Data access logic
  interfaces/    TypeScript types and interfaces
  index.ts       Server entry point
```

## Environment Variables

Create a `.env` file like this:

```env
PORT=3000
BASE_URL=http://localhost
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Installation

```bash
npm install
```

## Scripts

```bash
npm run dev
```

Runs the server in development using TypeScript directly.

```bash
npm run build
```

Compiles the project into `dist/`.

```bash
npm start
```

Runs the compiled backend.

## Relation To The Scrapper

This workspace also contains a separate scrapper that can collect data and feed the database used by this backend. The backend repository focuses on exposing that data through an API.

## Project Status

This project is in active development and intended for learning purposes. The structure and API may change over time.
