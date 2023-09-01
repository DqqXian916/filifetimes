import json
import time
import traceback

from urllib import request
from selenium import webdriver

import pymysql
import requests
from bs4 import BeautifulSoup
import lxml
header = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'}

#连接到grade_design数据库
def connectDB():
    print("连接到数据库...");
    try:
        #创建连接
        conn= pymysql.connect(host="localhost",user="root",password="root",db="grade_design",port=3306)
        #创建游标，默认是元组类型
        cursor = conn.cursor()
        # sql = 'select * from movies_info';
        # cursor.execute(sql);
        # conn.commit()
        #提交事务
        # res = cursor.fetchall();
        print("连接成功!")
    except pymysql.Error as e:
        print("pymysql Error: ", e.args[0], e.args[1])
    finally:
        cursor.close()
        conn.close()

#插入数据到电影信息表movies_info
def insertInto_MoviesInfo():
    '''
    插入数据到电影信息表movies_info
    :return:
    '''
    try:
        conn = pymysql.connect(host="localhost",
                               port=3306,
                               user="root",
                               password="root",
                               db="grade_design",
                               charset="utf8")
        cursor = conn.cursor()
        url =  "https://movie.douban.com/j/search_subjects?type=movie&tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&sort=recommend&page_limit=20&page_start=80"
        res = requests.get(url,headers = header)
        cnt = 81
        movies = json.loads(res.text)
        subjects = movies["subjects"]
        for i in subjects:
            sql = 'insert into movies_info(movie_name,cover_url,detail_url) values (%s,%s,%s);'
            cursor.execute(sql,[i['title'],i['cover'],i['url']])
            conn.commit()
            print("插入第",cnt,"条数据成功!")
            cnt += 1
        print("插入完成！！")
    except Exception as e:
        print("Error")
    finally:
        conn.close()
        cursor.close()

#插入数据到评论表short_comments
def insertInto_shortComments():
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
        id = 1
        while start <= 80:
            driver.get("https://movie.douban.com/subject/26752088/comments?start=" + str(
                start) + "&limit=20&status=P&sort=new_score")
            short = driver.find_elements_by_class_name("short")
            for i in short:
                print(i.text)
                sql = 'insert into short_comments values (%s,%s,%s);'
                cursor.execute(sql, [id,i.text, 1])
                conn.commit()
                id += 1
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

#插入数据到星级评论表
def insertInto_stars():
    '''
    插入数据到星级评论表
    :return:
    '''
    cursor = None
    conn = None
    conn = pymysql.connect(host="localhost",
                           port=3306,
                           user="root",
                           password="root",
                           db="grade_design",
                           charset="utf8mb4")
    cursor = conn.cursor()
    option = webdriver.ChromeOptions()
    option.binary_location = 'D:\\google chrome\\Chrome\\Application\\chrome.exe'
    option.add_argument("--headless")  # 无头模式，隐藏浏览器运行，后台爬取
    option.add_argument("--no-snadbox")  # 部署到linux项目下yao
    driver = webdriver.Chrome('D:\\chromedriver\\chromedriver.exe', options=option)
    sql = 'select detail_url,db_id,movie_name from movies_info limit 1,19'
    cursor.execute(sql)
    res= cursor.fetchall()
    url = []#前1-20条豆瓣的url
    Did = []#前1-20条豆瓣的id
    name = []
    for i,j,k in res:
        url.append(i)
        Did.append(j)
        name.append(k)
    print(url)
    print(Did)
    print(name)
    #开始循环遍历url，爬取每个(1-20条<不包括我不是药神>)url下的星级
    cnt = 2
    n = 0
    for i in url:
        driver.get(i)
        stars = driver.find_elements_by_class_name("rating_per")#找到所有的星级标签(包括1星-5星下对应的value)
        st = []
        for j in stars:
            s = j.text[:-1]#去掉每个value的百分号%
            s = float(s)
            st.append(s)
        st.insert(0,cnt)#在列表头部插入电影的movie_id
        st.insert(1,name[n])#st最终处理成star_data能接受的数据格式
        print(st)
        sql = 'insert into star_data values(%s,%s,%s,%s,%s,%s,%s)'
        cursor.execute(sql,st)
        conn.commit()
        cnt += 1
        n += 1
        # st.insert(1,'我不是药神')
        # print(st)
        # sql = 'insert into star_data values(%s,%s,%s,%s,%s,%s,%s)'
        # cursor.execute(sql,st)
        # conn.commit()


    # for i in db_url:
    #     cnt = 1
    #     print(i)
    #     driver.get(i)
    #     stars = driver.find_elements_by_class_name("rating_per")
    #     st = []
    #     for i in stars:
    #         s = i.text[:-1]
    #         s = float(s)
    #         st.append(s)
    #     id = 0
    #     st.insert(cnt,id)
    #     name_sql = 'select movie_name from movies_info where db_id = %s'
    #
    #
    #     name = ''
    #     st.insert(id,name)
    #
    #
    #     st.insert(0, 1)
    #     st.insert(1,'我不是药神')
    #     cnt += 1

    conn.close()
    driver.close()



if __name__ == '__main__':
    #connectDB()
    #insertInto_MoviesInfo()
    #insertInto_shortComments()
    # insertInto_stars()
    print("main")
