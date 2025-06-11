# RentWise
=======
# RentWise

A platform for NYC apartment reviews built with Next.js, TypeScript, and Prisma.

## Features

- 🏢 Browse apartment buildings in NYC
- ⭐ Read and write building reviews
- 🏠 Search by location and amenities
- 👤 User authentication
- 📍 Interactive map integration
- 🏗️ Building features and amenities tracking

## Tech Stack

- Next.js 14
- TypeScript
- Prisma (PostgreSQL)
- NextAuth.js for authentication
- Tailwind CSS for styling

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   ```bash
   # Create a .env file with:
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/rentwise"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```
4. Initialize the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```

## Current Status

Work in progress. Basic authentication flow and profile management implemented.

## Environment Variables

Create a `.env` file with the following variables:

```env
DATABASE_URL="your-postgresql-url"
NEXTAUTH_SECRET="your-nextauth-secret"
GOOGLE_MAPS_API_KEY="your-google-maps-api-key"
```

## Contributing

This is an open-source project. Feel free to contribute by submitting pull requests.

## License

MIT
>>>>>>> 7c1a68e (Initial commit: Basic Next.js setup with authentication)
