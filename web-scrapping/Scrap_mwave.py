from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select
from selenium.webdriver.chrome.options import Options
from time import sleep
from bs4 import BeautifulSoup
import pandas as pd
import re
from makeDir import create_directory_with_date

chrome_options = Options()
chrome_options.add_argument("--headless")
#driver = webdriver.Chrome(options=chrome_options)
URL = 'https://www.mwave.com.au/tablets-and-e-readers/apple-ipads?display=list'
driver = webdriver.Chrome()
driver.get(URL)
driver.implicitly_wait(10)
html = driver.page_source
soup = BeautifulSoup(html, "html.parser")

dic_product = {'product':[],'price':[],'link':[],'image':[],'category':'apple', 'store':'mwave'}


#pages = soup.find('div', class_='pagination').text
#numbers = re.findall(r'\b\d+\b', pages)
#totalPages = int(numbers[-1])
totalPages = 3
print(totalPages)

# Loop all pages (arrumar, Cloudflare detect)
for page in range(1, totalPages+1):
    driver = webdriver.Chrome()
    urlPage = f'https://www.mwave.com.au/tablets-and-e-readers/apple-ipads/page-{page}?view=40&display=list'
    driver.get(urlPage)
    driver.implicitly_wait(10)
    html = driver.page_source
    soup = BeautifulSoup(html, "html.parser")
    
    #print(urlPage)
    #print(soup.text)


    allProduct = soup.find_all('li', class_='listItem')

    # Loop all products
    for product in allProduct:
        #Find elements in HTML
        nameProduct = product.find('div', class_='nameListView').text
        priceProduct = product.find('div', class_='current').text
        imageProduct = product.find('div', class_='imageProd').find('img')['src']
        linkProduct = product.find('div', class_='nameListView').find('a')['href']

        #Append results to dictionary
        dic_product['product'].append(nameProduct)
        dic_product['price'].append(priceProduct)
        dic_product['link'].append('https://mwave.com.au' + linkProduct)
        dic_product['image'].append(imageProduct)
        #sleep(1)
    


directory_path = create_directory_with_date()
driver.quit()
df = pd.DataFrame(dic_product)
df.to_json(directory_path +'/'+'mwave_data_apple.json', orient="records", indent=4)

