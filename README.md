# SafeDep Insights Frontend

This project is a **frontend application** built using **Next.js 13+** that integrates with the **SafeDep Insights** and **Malysis APIs**. It demonstrates the required architecture for fetching, displaying, and presenting package security insights.

> ⚠️ **Note:** At the time of development, the SafeDep API credentials and tenant setup were not fully completed. Therefore, API responses are **mocked** to allow the application to function and demonstrate the intended design.

---

## Features

- Displays package metadata, version, vulnerabilities, license, and ecosystem.
- Presents package insights in a structured dashboard.
- Fully responsive UI using Tailwind CSS.
- Modular components (`PackageHeaderInfo`, `PackageMeta`, `PackageTab`) with type safety.
- Mocked API responses for offline development.

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd safedep-insights-frontend
