# Everything Starts with Water

## Table of Contents

- [Everything Starts with Water](#everything-starts-with-water)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Screenshots:](#screenshots)
    - [Key Objectives](#key-objectives)
  - [Technologies Used](#technologies-used)
  - [Folder Structure:](#folder-structure)
  - [Important Information:](#important-information)
  - [Getting Started](#getting-started)
    - [Step 1: Install Python](#step-1-install-python)
    - [Step 2: Install Node.js and npm](#step-2-install-nodejs-and-npm)
    - [Step 3: Install Git](#step-3-install-git)
    - [Step 4: Clone or Download the Project](#step-4-clone-or-download-the-project)
      - [To Clone the Repository](#to-clone-the-repository)
      - [To Download as ZIP](#to-download-as-zip)
    - [Step 5: Install Django Dependencies](#step-5-install-django-dependencies)
    - [Step 6: Run the Django Development Server](#step-6-run-the-django-development-server)
    - [Step 7: Install React Dependencies](#step-7-install-react-dependencies)
    - [Step 8: Start the React Development Server](#step-8-start-the-react-development-server)

## Overview

**Everything Starts with Water** is an educational and interactive web application created for the NASA SpaceApps Hackathon 2023. This project aims to help elementary, middle, and high school students understand the complete path of water across the Earth's entire system and how it's influenced by our changing climate. The application utilizes data from NASA satellites to create engaging visualizations and narratives about the global water cycle.

## Screenshots:

![Graph using Chart.js](image.png)
![HomePage](image-1.png)

### Key Objectives

- Visualize the complete path of water through the Earth system.
- Demonstrate how these processes change due to planetary warming.
- Educate high school students about climate change's impact on the global water cycle which helps of charts.

## Technologies Used

- **React:** The project is built using React, a popular JavaScript library for building user interfaces.
- **Django:** Made API with django on which the React gets real-time data and plots. It can also be used to get realtime predictions
- **React Router:** Routing within the application is managed using React Router.
- **Tailwind CSS:** For clean, responsive, and efficient UI design.
- **Chart.js:** To create interactive and informative data visualizations.
- **NASA Data:** Utilizing NASA's satellite data to enrich the content.
- **Python:** Made different plots, regression fitting, prediction through python in .ipynb files

## Folder Structure:

- **frontend:** This contains all the frontend part of the code
- **backend:** This contains django backend code with api app which contains a model which is used to plot in JS.
- **python_codes:** This contains all the codes for the plotting different variables, fitting the linear regression and so on. This is done on .ipynb file
- **matlab_codes:** Folder to the matlab codes.

## Important Information:

- **Python Use**: Used to plot different models and linear equation. One graph is made using Chart.js while other taken through the data analysis plots from the ipynb files.
- **Sources**: Shared through the spaceapps portal
- We have plotted the data through various sources like from climate.nasa.gov etc.
-

Certainly, here's a sample README.md that provides installation instructions for your project, assuming it uses Django for the backend and React for the frontend. This README is written to help someone who has little to no coding experience get the project up and running.

## Getting Started

To get this project up and running, follow these steps:

### Step 1: Install Python

Python is the programming language used for the backend (Django).

- Download Python from [python.org](https://www.python.org/downloads/).
- Run the installer and follow the installation instructions.

### Step 2: Install Node.js and npm

Node.js is required to run the frontend (React) of the project.

- Download Node.js from [nodejs.org](https://nodejs.org/).
- Run the installer and follow the installation instructions.

### Step 3: Install Git

Git is a version control system used to manage the project's code.

- Download Git from [git-scm.com](https://git-scm.com/).
- Run the installer and follow the installation instructions.

### Step 4: Clone or Download the Project

You can get the project code by either cloning the repository or downloading it as a ZIP file.

#### To Clone the Repository

Open your terminal or command prompt and run:

```bash
git clone https://github.com/your-username/your-project.git
```

#### To Download as ZIP

Visit the project's GitHub page at [github.com/your-username/your-project](https://github.com/your-username/your-project). Click the "Code" button and select "Download ZIP." Extract the ZIP file to a location of your choice.

### Step 5: Install Django Dependencies

Open a terminal/command prompt, navigate to the project's backend directory (where `manage.py` is located) which is /backend/dir, and run:

```bash
cd backend
pip install -r requirements.txt
```

### Step 6: Run the Django Development Server

Make sure you are in backend directory. Then, In the same terminal/command prompt, run:

```bash
python manage.py runserver
```

Your Django backend will start, and you can access it in your web browser at `http://localhost:8000`.

### Step 7: Install React Dependencies

Open another terminal/command prompt, navigate to the project's frontend directory (where `package.json` is located), and run:

```bash
cd frontend
npm install
```

### Step 8: Start the React Development Server

In the same terminal/command prompt, run:

```bash
npm start
```

Your React frontend will start, and you can access it in your web browser at `http://localhost:3000`.
