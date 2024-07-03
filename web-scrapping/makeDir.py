import os
from datetime import datetime

def create_directory_with_date():
    # Get the current date
    today = datetime.now()
    
    # Format the date as "YYYY-MM-DD"
    date_str = today.strftime("%Y-%m-%d")
    
    base_directory = 'data'

    # Construct the directory path
    directory_path = os.path.join(os.getcwd(), base_directory, date_str)
    
    # Check if the directory exists
    if not os.path.exists(directory_path):
        # If it doesn't exist, create the directory
        os.makedirs(directory_path)
        print(f"Directory '{date_str}/{base_directory}' created successfully.")
    else:
        print(f"Directory '{date_str}/{base_directory}' already exists.")
    return directory_path
# Call the function to create the directory
create_directory_with_date()
