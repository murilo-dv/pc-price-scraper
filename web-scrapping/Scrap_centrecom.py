from bs4 import BeautifulSoup
import requests
import pandas as pd
import re
from makeDir import create_directory_with_date

categories = ['desktops','laptops','cpu-processors', 'monitors', 'solid-state-drives', 'power-supplies', 'motherboards', 'memory-ram', 'nvidia-amd-graphics-cards', 'apple-products' ]

for category in categories:
    url = "https://www.centrecom.com.au/"+ category


    headers = { 'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"}
    site = requests.get(url, headers=headers)
    soup = BeautifulSoup(site.content, "html.parser")
    qtd_pag = soup.find('li', class_='total-summary').get_text()


    index = qtd_pag.find(' (')
    pags = int(qtd_pag[9:index])
    dic_product = {'product':[],'price':[],'link':[], 'image':[], 'category':[], 'store':'centrecom'}

    for page in range(1, pags+1):
        url_pag = f'https://www.centrecom.com.au/'+category+'?pagenumber='+str(page)
        print(url_pag)
        site = requests.get(url_pag, headers=headers)
        soup = BeautifulSoup(site.content, "html.parser")
        products = soup.find_all('div', class_='prbox_box prbox_img')
        pattern = re.compile(r'url\(([^)]+)\)')

        for product in products:
            name = product.find('div', class_='prbox_name').get_text().strip()
            price = product.find('div', class_='saleprice').get_text().strip()
            url_product = product.find('a', class_='prbox_link').get("href")
            find_div_image = product["data-lazy"]
            text_of_image = pattern.search(find_div_image)
            url_image = text_of_image.group(1)

        
            
            dic_product['product'].append(name)
            dic_product['price'].append(price)
            dic_product['link'].append(str('https://centrecom.com.au' + url_product))
            dic_product['image'].append(str(url_image))
            dic_product['category'].append(category)

    directory_path = create_directory_with_date()
    df = pd.DataFrame(dic_product)
    df.to_json(directory_path +'/'+'centrecom_data_'+category+'.json',orient="records", indent=4)

