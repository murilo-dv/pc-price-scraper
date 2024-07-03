# Check if the response status code is 200 (OK)
if site.status_code == 200:
   # Parse the response content as HTML using BeautifulSoup
   soup = BeautifulSoup(site.content, "html.parser")
 
   # Find all the elements with class "product-tile" which contain the product information
   products = soup.find_all('div', class_="_10ipotx11 _10ipotx14")
 
   # Create an empty list to store the scraped data
   data = []
 
   # Loop through each product element
   for product in products:
       # Find the product name, price, and rating elements
       name = product.find('div', class_="_10ipotx6 _10ipotx6")
       price = product.find('span', class_="price")
 
       # Check if all elements are not None
       if name and price:
           # Get the text content of the elements and strip any whitespace
           name_text = name.get_text().strip()
           price_text = price.get_text().strip()
 
           # Append a dictionary of {name: name_text, price: price_text, rating: rating_text} to the data list
           data.append({"name": name_text, "price": price_text})
 
   # Print the number of products scraped
   print(f"Scraped {len(data)} products from {url}")
 
   # Create a pandas data frame from the data list
   df = pd.DataFrame(data)
 
   # Export the data frame to a json file
   df.to_json("results.json", orient="records")
 
   # Print a message that the json file is created
   print("Created results.json file to store the results")
else:
   # Print an error message if the response status code is not 200 (OK)
   print(f"Error: Failed to scrape {url} (status code: {site.status_code})")