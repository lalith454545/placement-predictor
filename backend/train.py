import pandas as pd
import torch
import torch.nn as nn
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

df = pd.read_csv("../dataset/placement.csv")

X= df.drop("placed", axis=1)
y= df["placed"]

scaler= StandardScaler()
X = scaler.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size= 0.2)
X_train= torch.tensor(X_train, dtype= torch.float32)
X_test = torch.tensor(X_test, dtype= torch.float32)
y_train= torch.tensor(y_train.values, dtype= torch.float32)
y_train= y_train.view(-1, 1)
y_test = torch.tensor(y_test.values, dtype=torch.float32)
y_test = y_test.view(-1,1)

class ANN(nn.Module):

    def __init__(self):
        super().__init__()
        self.fc1= nn.Linear(5, 10)
        self.fc2= nn.Linear(10, 5)
        self.out= nn.Linear(5, 1)

    def forward(self, x):
         x= self.fc1(x)
         x= torch.relu(x)

         x= self.fc2(x)
         x= torch.relu(x)

         x= self.out(x)
         x= torch.sigmoid(x)

         return x

model= ANN()
model.load_state_dict(torch.load("placement_model.pth"))
loss_fn= nn.BCELoss()
optimizer= torch.optim.Adam(model.parameters(), lr= 0.001)

epochs= 100
for epoch in range(epochs):
    predictions= model(X_train)
    loss= loss_fn(predictions, y_train)
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()
    if((epoch+1)%10==0):
        print(f"Epoch {epoch+1}, Loss {loss.item()}")

model.eval()
student= torch.tensor([[8, 7, 1, 1, 1]], dtype= torch.float32)
prediction= model(student)
print("Probability: ", prediction.item())

torch.save(model.state_dict(), "placement_model.pth")
print("Model saved successfully")
