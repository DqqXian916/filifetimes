#插入数据到评论表short_comments
import json
import time
import traceback
from urllib import request
from selenium import webdriver
import pymysql
import requests
from bs4 import BeautifulSoup
import lxml
import utils

def insertInto_shortComments(movie_id,db_id,short_id):
    '''
    插入数据到评论表short_comments
    :return:
    '''
    cursor = None
    conn = None
    try:
        conn = pymysql.connect(host="localhost",
                               port=3306,
                               user="root",
                               password="root",
                               db="grade_design",
                               charset="utf8mb4")
        cursor = conn.cursor()
        option = webdriver.ChromeOptions()
        option.binary_location = 'D:\\google chrome\\Chrome\\Application\\chrome.exe'
        # option.add_argument("--headless")  # 无头模式，隐藏浏览器运行，后台爬取
        option.add_argument("--no-snadbox")  # 部署到linux项目下要用到
        driver = webdriver.Chrome('D:\\chromedriver\\chromedriver.exe', options=option)
        start = 0
        # short_id = 201
        while start <= 80:
            driver.get("https://movie.douban.com/subject/"+str(db_id)+"/comments?start=" + str(
                start) + "&limit=20&status=P&sort=new_score")
            short = driver.find_elements_by_class_name("short")
            for i in short:
                print(i.text)
                sql = 'insert into short_comments values (%s,%s,%s);'
                cursor.execute(sql, [short_id,i.text,movie_id])
                conn.commit()
                short_id += 1
            btn_next_page = driver.find_element_by_class_name("next")
            btn_next_page.click()  # 下一页
            # time.sleep(1) # 等待一秒
            start += 20
    except:
        traceback.print_exc()
    finally:
        driver.close()
        conn.close()
        cursor.close()

if __name__ == '__main__':
    short = 1901#short_id
    for id in range(20,31):
        res = utils.query('select db_id from movies_info where movie_id=%s',id)
        insertInto_shortComments(id, res[0][0],short)
        short += 100

