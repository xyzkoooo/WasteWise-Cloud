# WasteWise Cloud

**An AI-powered predictive smart waste collection and route optimization system on AWS.**

This repository is being developed in phases for a final-year engineering project. The current state includes **Phase 1: project structure and frontend setup** and **Phase 2: responsive dashboard UI**. The dashboard uses clearly labeled sample data; backend APIs, trained ML predictions, AWS integrations, and operational workflows have not been implemented yet.

## Project layout

- `frontend/` — React + Vite web application
- `backend/` — Python API application (scaffold)
- `machine-learning/` — synthetic data and model training/inference code (scaffold)
- `aws/` — cloud integration and infrastructure definitions (scaffold)
- `documentation/` — architecture, testing, and project-report documentation (scaffold)

## Prerequisites

- Node.js and npm for the frontend. A portable Node.js v26.13.1 Windows x64 release is currently set up under your user profile at `%LOCALAPPDATA%\Programs\NodePortable`; it does not require an administrator install.
- Python 3.10+ for the backend and ML phases (later phases)

## Run the frontend

1. Open a new PowerShell session after the portable Node.js setup (restart VS Code first if it was already open during setup).
2. Open a terminal in `frontend/`.
3. Install dependencies with `npm.cmd install` (already completed in this workspace).
4. Start the development server with `npm.cmd run dev`.
5. Open the local URL printed by Vite (default: `http://localhost:5173`).

Create `frontend/.env` from `frontend/.env.example` when needed. Mock/local mode is the intended development default. No AWS credentials are required for local development; cloud configuration belongs on the backend, never in the React app.

## Current status

Only the Phase 1 foundation is in place. The frontend production build has been verified. npm currently reports a high-severity advisory for the transitive `picomatch` dependency; the available audit fix would force a Vite downgrade, so that downgrade was not applied. Do not treat this scaffold as a completed dashboard, backend, trained model, or AWS deployment. See `documentation/PROJECT_STATUS.md` for the phase checklist and planned architecture.
