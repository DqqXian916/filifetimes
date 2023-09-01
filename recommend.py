from selenium import webdriver
import pymysql
import utils
import re
header = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'}


#插入电影的提示信息到相关推荐表
def tips(id):
    conn,cursor = utils.get_conn()
    rec_db_id = [] #两部相关电影推荐的豆瓣id
    sql_rec_db_id = 'select rec1_db_id,rec2_db_id from related_rec_data where movie_id = %s'
    rec_db_ids = utils.query(sql_rec_db_id,id)
    [rec_db_id.append(rec_db_ids[0][i]) for i in range(2)]
    option = webdriver.ChromeOptions()
    option.binary_location = 'D:\\google chrome\\Chrome\\Application\\chrome.exe'
    driver = webdriver.Chrome('D:\\chromedriver\\chromedriver.exe', options=option)
    rec_urls = []
    [rec_urls.append('https://movie.douban.com/subject/'+str(rec_db_id[i])) for i in range(2)]
    print(rec_urls)
    for i in range(2):
        driver.get(rec_urls[i])
        movie_name = driver.find_element_by_xpath("//*[@id='content']/h1/span[1]").text
        name = re.sub("[A-Za-z0-9\!\%\[\]\,\。]","",movie_name)#过滤掉英文名，只留中文 #电影名
        tip = []
        year  = driver.find_element_by_class_name("year").text#电影年份
        tip.append(year)
        director = driver.find_element_by_xpath("//*[@id='info']/span[1]/span[2]/a").text#导演
        tip.append(director)
        star1 = driver.find_element_by_xpath("//*[@id='info']/span[3]/span[2]/span[1]/a").text
        star2 = driver.find_element_by_xpath("//*[@id='info']/span[3]/span[2]/span[2]/a").text
        stars = star1 +'/'+ star2 #主演
        tip.append(stars)
        type1 = driver.find_element_by_xpath("//*[@id='info']/span[5]").text
        type2 = driver.find_element_by_xpath("//*[@id='info']/span[6]").text
        types = type1 +'/' + type2 #类型
        tip.append(types)
        print(tip)
        '''
        if(i == 0):
            sql_rec = 'insert into related_rec_data(movie_id,rec1_year,rec1_director,rec1_stars,rec1_types) values(%s,%s,%s,%s,%s)'
            cursor.execute(sql_rec,tip)
            conn.commit()
            print('插入1成功!')
        elif(i == 1):
            sql_rec = 'insert into related_rec_data(movie_id,rec2_year,rec2_director,rec2_stars,rec2_types) values(%s,%s,%s,%s,%s)'
            cursor.execute(sql_rec,tip)
            conn.commit()
            print('插入2成功!')
        '''

    conn.close()
    driver.close()


if __name__ == '__main__':
    for i in range(9,31):
        tips(i)