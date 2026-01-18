# SafeDep Insights Frontend

This project is a **frontend application** built using **Next.js** that integrates with the **SafeDep Insights** and **Malysis APIs**. It demonstrates the required architecture for fetching, displaying, and presenting package security insights.

> ⚠️ **Note:** At the time of development, the SafeDep API credentials and tenant setup could not be not fully completed. As a result, API responses are **mocked** to allow the application to function and demonstrate the intended design and data follow.

## Features

- Displays package metadata, overview, version, license, and vulnerabilities
- Presents package insights in a structured dashboard
- Fully responsive UI built with Tailwind CSS
- Modular components (PackageHeaderInfo, PackageMeta, PackageTab) with TypeScript type safety
- Mocked API responses for offline development and demonstration

## Getting Started

### Installation

1. Clone the repository

git clone <your-repo-url>  
cd safedep-insights-frontend

2. Install dependencies

npm install

3. Optional: Create a .env.local file for SafeDep credentials. If not provided, the application will automatically fall back to mock data.

SAFEDEP_API_KEY=your-api-key  
SAFEDEP_TENANT_ID=your-tenant-id  
SAFEDEP_PROJECT_NAME=safedep-insights-frontend  
SAFEDEP_PROJECT_VERSION=1.0.0  

## Running the Application

npm run dev

The application will be available at:

http://localhost:3000/p/npm/nextjs/15.5.4

## Notes

- The SafeDep API integration is implemented but currently falls back to mock data
- Mock responses are based on the provided SafeDep sample JSON files
- The architecture allows switching to the live SafeDep API by updating the API route logic
