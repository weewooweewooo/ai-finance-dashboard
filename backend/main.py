from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sklearn.linear_model import LinearRegression
import numpy as np

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health_check():
    return {"status": "ok"}

class UserLogin(BaseModel):
    email: str
    password: str

@app.post("/login")
def login(user: UserLogin):
    # TODO: Replace with real auth later
    return {"token": "fake-jwt-token"}

class TransactionCreate(BaseModel):
    amount: int
    category: str
    date: str

@app.post("/transactions")
def create_transaction(transaction: TransactionCreate):
    # TODO: Save to database
    return {"message": "Transaction created"}

@app.get("/predict")
def predict_spending():
    # Mock data: Replace with real user data later
    X = np.array([1, 2, 3]).reshape(-1, 1)  # Months
    y = np.array([100, 200, 300])           # Spending in cents
    model = LinearRegression().fit(X, y)
    prediction = model.predict([[4]])[0]
    return {"prediction": prediction / 100}  # Convert cents to dollars