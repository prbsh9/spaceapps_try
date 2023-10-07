# from sklearn.linear_model import LinearRegression
import numpy as np
import pandas as pd

# Read in your data
df = pd.read_csv('some_python_extras/data/ocean-warming.csv', sep='  ')
df.head()


# Assuming you have extracted your data into X and y
# X = np.array(your_years).reshape(-1, 1)  # Reshape for single feature
# y = your_co2_concentrations

# # Create a linear regression model
# model = LinearRegression()

# Fit the model to your data
# model.fit(X, y)

# # Make predictions
# predictions = model.predict(X)
