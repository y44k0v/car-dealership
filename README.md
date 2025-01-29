# Full-stack TypeScript Car Dealership app

### Starter app

Car data consist of brand, model, year and price. Basic CRUD operations. Main page displays form to add cars, display inventory and delete cars. No persistent data for now. MVP.

Under development ...

### Backend

Express (TS)

```BASH
mkdir backend
cd backend
npm init -y
npm install express cors body-parser\nnpm install --save-dev typescript @types/node @types/express ts-node nodemon
npx tsc --init
npm i --save-dev @types/cors
# create folders and files
backend/
├── src/
│   ├── models/
│   │   └── Car.ts
│   ├── routes/
│   │   └── carRoutes.ts
│   ├── controllers/
│   │   └── carController.ts
│   └── server.ts
├── tsconfig.json
├── package.json
└── nodemon.json
npm start

[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/*
[nodemon] watching extensions: ts
[nodemon] starting `ts-node ./src/server.ts`
Server running on http://localhost:5000
```

### Frontend

Vite framework (React/TS)
```BASH
npm create vite@latest
# named frontend
cd frontend
npm install
npm install axios 
# create folders and files
frontend/
├── src/
│   ├── components/
│   │   ├── CarList.tsx
│   │   └── AddCar.tsx
│   ├── services/
│   │   └── carService.ts
│   ├── types/
│   │   └── Car.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
npm run dev

  VITE v6.0.11  ready in 188 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

```

### Containers

```BASH
# Backend
cd backend
docker build -t car-dealership-backend .
docker run -p 5000:5000 car-dealership-backend
# Frontend
cd frontend
docker build -t car-dealership-frontend .
docker run -it -p 5173:5173 -d car-dealership-frontend

# Running both at the same time 
docker-compose up --build
```

The app will be available at `http://localhost:5173`.
