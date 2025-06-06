# Little Paws Animal Shelter

A full-stack web application for managing animal shelter operations, facilitating pet adoptions, and connecting animals with loving homes.

## Project Overview

Little Paws Animal Shelter is a modern web platform designed to streamline the pet adoption process and shelter management. The application serves both potential pet adopters and shelter administrators, providing an intuitive interface for browsing available pets, submitting adoption requests, and managing shelter operations.

### Key Features

- **Pet Browsing**: Users can view available pets with detailed information and photos
- **Adoption Applications**: Registered users can submit adoption requests
- **User Authentication**: Secure login and registration system
- **Admin Dashboard**: Special interface for shelter staff to manage pets and adoption requests
- **Pet Care Tips**: Dynamic tips to help pet owners
- **Upcoming Events**: Display of shelter events and activities
- **Responsive Design**: Mobile-friendly interface

## Technology Stack

### Frontend
- **React 18**: Modern UI library for building user interfaces
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **React Hot Toast**: Toast notifications
- **Lucide React**: Icon library
- **Axios**: HTTP client

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web application framework
- **MySQL**: Relational database
- **JWT**: Authentication
- **Bcrypt**: Password hashing
- **Zod**: Schema validation
- **Helmet**: Security middleware
- **CORS**: Cross-origin resource sharing

## Installation

### Prerequisites
- Node.js (v18 or higher)
- MySQL Server
- Git

### Setup Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd animal-shelter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   # JWT Secret
   JWT_SECRET=your-secret-key

   # API URL
   VITE_API_URL=http://localhost:3000/api

   # Server Configuration
   PORT=3000
   NODE_ENV=development

   # Database Configuration
   MYSQLHOST=localhost
   MYSQLUSER=root
   MYSQLPASSWORD=your-password
   MYSQLDATABASE=animal_shelter
   MYSQLPORT=3306

   # Frontend URL (for CORS)
   FRONTEND_URL=http://localhost:3000
   ```

4. Set up the database:
   - Create a MySQL database named `animal_shelter`
   - Run the migration script from `supabase/migrations/20250512202330_noisy_sea.sql`

5. Start the development server:
   ```bash
   npm run dev
   ```

## Server Requirements

### Minimum Requirements
- **CPU**: 2 cores
- **RAM**: 4GB
- **Storage**: 20GB SSD
- **OS**: Ubuntu 20.04 LTS or newer
- **Node.js**: v18.0.0 or higher
- **MySQL**: v8.0 or higher

### Recommended Requirements
- **CPU**: 4 cores
- **RAM**: 8GB
- **Storage**: 40GB SSD
- **OS**: Ubuntu 22.04 LTS
- **Node.js**: v20.0.0 or higher
- **MySQL**: v8.0 or higher

## Database Migration Guide

### Exporting the Database
1. Create a backup of the current database:
   ```bash
   mysqldump -u root -p animal_shelter > backup.sql
   ```

### Importing to New Server
1. Create a new database on the target server:
   ```bash
   mysql -u root -p
   CREATE DATABASE animal_shelter;
   exit;
   ```

2. Import the backup:
   ```bash
   mysql -u root -p animal_shelter < backup.sql
   ```

## Production Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Set environment variables for production:
   - Update `.env` with production values
   - Ensure secure values for JWT_SECRET
   - Configure production database credentials

3. Start the production server:
   ```bash
   npm start
   ```

## API Documentation

### Authentication Endpoints
- `POST /api/auth/register`: Register new user
- `POST /api/auth/login`: User login
- `GET /api/auth/profile`: Get user profile
- `PUT /api/auth/profile`: Update user profile

### Pet Endpoints
- `GET /api/pets`: Get all pets
- `GET /api/pets/:id`: Get specific pet
- `POST /api/pets`: Add new pet (admin only)
- `PUT /api/pets/:id`: Update pet (admin only)
- `DELETE /api/pets/:id`: Delete pet (admin only)

### Adoption Endpoints
- `POST /api/adoptions`: Submit adoption request
- `GET /api/adoptions/user/:userId`: Get user's adoption requests

## Security Considerations

- Password hashing using bcrypt
- JWT-based authentication
- Rate limiting on API endpoints
- XSS protection
- Helmet security headers
- CORS configuration
- Input validation using Zod

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.