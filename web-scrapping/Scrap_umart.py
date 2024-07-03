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



with open('umart.txt', 'r') as file:
    # Инициализируем переменную за пределами цикла
    url_list= []

    # Читаем строки из файла
    for line in file:
        # Обработка каждой строки
       url_line = line.strip()  # Удаляем лишние пробелы и символы новой строки

        # Добавляем текущую строку в список result_data
       url_list.append(url_line)

# После завершения цикла можно использовать result_data для дальнейшей обработки
for URL in url_list:
    print(URL)
    words = URL.split('/')
    word = words[-1][:-4]
    driver = webdriver.Chrome()
    driver.get(URL)
    driver.implicitly_wait(10)
    html = driver.page_source
    soup = BeautifulSoup(html, "html.parser")
    dic_product = {'product':[],'price':[],'image':[],'link':[], 'category':[], 'store':'umart'}

#find total pages
    page_count = soup.find('script', string=re.compile(r'var\s+page_count\s*=\s*([0-9]+)\s*;'))
    match = re.search(r'var\s+page_count\s*=\s*([0-9]+)\s*;', page_count.string)  
    page_all = int(match.group(1))
    #print(page_all)
    #find total pages
    page_count = soup.find('script', string=re.compile(r'var\s+page_count\s*=\s*([0-9]+)\s*;'))
    match = re.search(r'var\s+page_count\s*=\s*([0-9]+)\s*;', page_count.string)  
    page_all = int(match.group(1))
    #print(page_all)
    # Loop all pages (arrumar, Cloudflare detect)
    for page in range(1, page_all):
        driver = webdriver.Chrome()
        urlPage = URL + '?page=' + str(page)
        driver.get(urlPage)
        driver.implicitly_wait(10)
        html = driver.page_source
        soup = BeautifulSoup(html, "html.parser")
        sleep(8)
        #print(urlPage)
        #print(soup.text)
        allProduct = soup.find_all('li', class_="goods_info")
        for product in allProduct:
            nameProduct= product.find('div', class_='goods_name').text
            priceProduct = product.find('span', class_='goods-price ele-goods-price').text
            imageProduct = product.find('div', class_='goods_img').find('img')['src']
            linkProduct = product.find('div', class_='goods_name').find('a')['href']
            #Append results to dictionary
            dic_product['product'].append(nameProduct)
            dic_product['price'].append(priceProduct)
            dic_product['link'].append('https://umart.com.au' + linkProduct)
            dic_product['image'].append(imageProduct)
            dic_product['category'].append(word)
            #sleep(1)

    #print(dic_product)
    directory_path = create_directory_with_date()
    driver.quit()
    df = pd.DataFrame(dic_product)
    df.to_json(directory_path +'/'+'umart_'+ word +'.json', orient="records", indent=4)
    




