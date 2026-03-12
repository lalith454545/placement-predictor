 # AI Placement Predictor

 A full-stack machine learning application that predicts student placement probability based on academic performance and skills using an Artificial Neural Network (ANN) built     
 with PyTorch.

 ![Python](https://img.shields.io/badge/Python-3.13-blue)
 ![PyTorch](https://img.shields.io/badge/PyTorch-2.0+-red)
 ![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-green)
 ![React](https://img.shields.io/badge/React-19.2-blue)

 ## 🎯 Project Overview

 This project demonstrates the complete workflow of building and deploying a machine learning application:
 - **Data preprocessing and feature engineering**
 - **Neural network architecture design and training**
 - **Model serialization and deployment**
 - **REST API development**
 - **Interactive web interface**

 ## ✨ Features

 - **Real-time Predictions**: Instant placement probability calculation
 - **Input Validation**: Ensures all inputs are within valid range (0-10)
 - **Responsive UI**: Clean, modern interface with gradient design
 - **About Page**: Project documentation and developer information
 - **Error Handling**: Comprehensive validation and error messages

 ## 🧠 Artificial Neural Network Architecture

 ### Model Design
 The prediction model is a **feedforward neural network** implemented in PyTorch:

 ```
 Input Layer (5 features)
     ↓
 Hidden Layer 1 (64 neurons) + ReLU
     ↓
 Hidden Layer 2 (32 neurons) + ReLU
     ↓
 Hidden Layer 3 (16 neurons) + ReLU
     ↓
 Output Layer (1 neuron) + Sigmoid
 ```

 ### Technical Details

 - **Framework**: PyTorch
 - **Architecture**: Multi-layer Perceptron (MLP)
 - **Activation Functions**:
   - ReLU (Rectified Linear Unit) for hidden layers
   - Sigmoid for output layer (binary classification)
 - **Loss Function**: Binary Cross-Entropy Loss (BCELoss)
 - **Optimizer**: Adam optimizer
 - **Data Preprocessing**: StandardScaler for feature normalization

 ### Input Features
 1. **CGPA** (0-10): Cumulative Grade Point Average
 2. **Communication Skills** (0-10): Communication proficiency score
 3. **Internship Experience** (0-10): Previous internship experience
 4. **Projects** (0-10): Number/quality of projects completed
 5. **DSA Skills** (0-10): Data Structures and Algorithms proficiency

 ### Model Training Process
 1. Data collection and preprocessing
 2. Feature scaling using StandardScaler
 3. Train-test split
 4. Model training with backpropagation
 5. Model evaluation and validation
 6. Serialization (model weights + scaler)

 ## 🛠️ Technology Stack

 ### Backend
 - **FastAPI**: High-performance Python web framework
 - **PyTorch**: Deep learning framework
 - **Scikit-learn**: Data preprocessing (StandardScaler)
 - **Uvicorn**: ASGI server
 - **Python 3.13+**

 ### Frontend
 - **React 19.2**: UI library
 - **JavaScript (ES6+)**: Programming language
 - **CSS3**: Styling and animations
 - **Fetch API**: HTTP requests

 ### Machine Learning
 - **PyTorch**: Neural network implementation
 - **NumPy**: Numerical computations
 - **Pandas**: Data manipulation (training phase)

 ## 📁 Project Structure

 ```
 placement-predictor/
 ├── backend/
 │   └── main.py              # FastAPI server and prediction endpoint
 ├── frontend/
 │   ├── public/
 │   │   ├── img.png          # Profile photo
 │   │   └── index.html       # HTML template
 │   ├── src/
 │   │   ├── components/
 │   │   │   ├── Home.js      # Predictor component
 │   │   │   └── About.js     # About page component
 │   │   ├── App.js           # Main app with routing
 │   │   ├── App.css          # Styling
 │   │   └── index.js         # React entry point
 │   └── package.json         # Dependencies
 ├── model/
 │   ├── placement_model.pth  # Trained PyTorch model weights
 │   ├── scaler.pkl           # StandardScaler for preprocessing
 │   └── train.py             # Model training script
 ├── .gitignore
 └── README.md
 ```

 ## 🚀 Installation & Setup

 ### Prerequisites
 - Python 3.13+
 - Node.js 18+
 - npm or yarn

 ### Backend Setup

 1. **Navigate to the project root**:
 ```bash
 cd placement-predictor
 ```

 2. **Install Python dependencies**:
 ```bash
 pip install fastapi uvicorn torch scikit-learn numpy
 ```

 3. **Start the FastAPI server**:
 ```bash
 cd backend
 uvicorn main:app --reload
 ```
 The API will be available at `http://127.0.0.1:8000`

 ### Frontend Setup

 1. **Navigate to frontend directory**:
 ```bash
 cd frontend
 ```

 2. **Install dependencies**:
 ```bash
 npm install
 ```

 3. **Start the development server**:
 ```bash
 npm start
 ```
 The app will open at `http://localhost:3000`

 ## 📡 API Endpoints

 ### POST `/predict`
 Predicts placement probability based on input features.

 **Request Body**:
 ```json
 {
   "cgpa": 8.5,
   "communication": 7.0,
   "internship": 1.0,
   "projects": 5.0,
   "dsa": 8.0
 }
 ```

 **Response**:
 ```json
 {
   "placement_probability": 0.8542
 }
 ```

 **Validation Rules**:
 - All fields are required
 - All values must be between 0 and 10

 ## 🎨 User Interface

 ### Predictor Page
 - Input fields for all 5 features
 - Real-time validation with error messages
 - Visual feedback (red borders for invalid inputs)
 - Prediction result with emoji indicators
 - Responsive design with gradient background

 ### About Page
 - Developer profile with photo
 - Project description and motivation
 - Technical stack overview
 - Learning journey

 ## 🧪 How the Prediction Works

 1. **User Input**: Enter values for CGPA, Communication, Internship, Projects, DSA
 2. **Validation**: Frontend validates inputs (0-10 range)
 3. **API Request**: Send POST request to `/predict` endpoint
 4. **Preprocessing**: Backend scales features using StandardScaler
 5. **Prediction**: Neural network processes scaled inputs
 6. **Output**: Sigmoid activation produces probability (0-1)
 7. **Display**: Frontend shows percentage with placement likelihood

 ## 🔬 Model Performance Metrics

 The model was trained and evaluated with the following considerations:
 - **Input normalization** for stable training
 - **Multiple hidden layers** for complex pattern recognition
 - **Dropout** (if applicable) to prevent overfitting
 - **Early stopping** based on validation loss

 ## 🎓 Learning Outcomes

 This project demonstrates:
 - ✅ Building neural networks from scratch with PyTorch
 - ✅ Understanding forward and backward propagation
 - ✅ Feature engineering and data preprocessing
 - ✅ Model serialization and deployment
 - ✅ REST API development with FastAPI
 - ✅ Full-stack integration (React + Python)
 - ✅ Input validation and error handling
 - ✅ Responsive web design

 ## 🔮 Future Enhancements

 - [ ] Add model performance metrics display
 - [ ] Implement batch predictions
 - [ ] Add data visualization (feature importance)
 - [ ] Include confidence intervals
 - [ ] Add more features (aptitude scores, soft skills)
 - [ ] Implement model retraining pipeline
 - [ ] Add authentication and user profiles
 - [ ] Deploy to cloud (AWS/GCP/Azure)
 - [ ] Add model explainability (SHAP values)

 ## 🤝 Contributing

 This is a learning project, but suggestions and improvements are welcome!

 ## 📄 License

 MIT License - feel free to use this project for learning purposes.

 ## 👨‍💻 Author

 **Lalith Srinandan**
 - B.Tech Student at Keshav Memorial Institute of Technology
 - Interested in AI/ML and Full-Stack Development
 - GitHub: [@lalithCopart](https://github.com/lalithCopart)

 ## 🙏 Acknowledgments

 - PyTorch Documentation
 - FastAPI Documentation
 - React Documentation
 - Machine Learning community

 ---

 **Built with ❤️ using PyTorch, FastAPI, and React**
