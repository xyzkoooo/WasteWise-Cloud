# Project status and implementation plan

## Current phase

**Phase 1 — Project structure and frontend setup:** scaffolded and verified. A checksum-verified portable Node.js v26.13.1 LTS ZIP is installed under the current user's Local AppData (no administrator install), and its directory is added to the current-user PATH. Frontend dependencies are installed and the Vite production build passes. Restart VS Code for newly opened terminals to inherit the PATH change. npm reports a high-severity transitive `picomatch` advisory; the suggested audit remediation requires a forced Vite downgrade and was not applied.

**Phase 2 — Responsive dashboard UI:** implemented with responsive sidebar and top navigation, route-aware module pages, simulated KPI cards, Recharts waste/status visualizations, searchable sample alerts, collection activity, and CSV dashboard export. Data is explicitly labeled simulated. Production build verification is in progress.

## Planned phases

1. Project structure and frontend setup — current
2. Responsive smart-city dashboard UI
3. Synthetic smart-bin sensor data and simulator
4. Modular Python API
5. Synthetic training data, Random Forest model, evaluation, and inference
6. Bin prioritization and simulated-distance route optimization
7. Alerts, scheduling, vehicles, and collection history
8. Optional AWS adapters and least-privilege deployment configuration
9. Automated tests and integration verification
10. Architecture, deployment, testing, and final report documentation

## Architecture intent

React/Vite communicates with a Python API. The API owns authentication, business logic, AWS SDK interactions, and data validation. DynamoDB is planned for operational records, S3 for files/artifacts, API Gateway and Lambda for a serverless deployment, and SNS for notifications. ML can run locally in Python first, with SageMaker as an optional deployment path. Local mock mode must remain available and must not require AWS credentials. No AWS deployment is claimed at this stage.
