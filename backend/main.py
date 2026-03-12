from fastapi import FastAPI
import torch
import torch.nn as nn
import joblib
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

scaler = joblib.load("../model/scaler.pkl")

class ANN(nn.Module):

    def __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(5,10)
        self.fc2 = nn.Linear(10,5)
        self.out = nn.Linear(5,1)

    def forward(self,x):

        x = self.fc1(x)
        x = torch.relu(x)

        x = self.fc2(x)
        x = torch.relu(x)

        x = self.out(x)
        x = torch.sigmoid(x)

        return x

class Student(BaseModel):
    cgpa: float
    communication: float
    internship: float
    projects: float
    dsa: float

model = ANN()
model.load_state_dict(torch.load("../model/placement_model.pth"))
model.eval()

@app.get("/")
def home():
    return {"message": "Placement Prediction API Running"}

@app.post("/predict")
def predict(student: Student):

    input_data = [[
        student.cgpa,
        student.communication,
        student.internship,
        student.projects,
        student.dsa
    ]]

    scaled = scaler.transform(input_data)

    data = torch.tensor(scaled, dtype=torch.float32)

    prediction = model(data)

    probability = prediction.item()

    return {"placement_probability": probability}

