from selenium import webdriver
import pymysql
import utils

header = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'}

#插入数据到星级评论表
def stars(id):
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
    option.add_argument("--no-snadbox")  # 部署到linux项目下yao
    driver = webdriver.Chrome('D:\\chromedriver\\chromedriver.exe', options=option)
    sql = 'select detail_url,db_id,movie_name from movies_info where movie_id = %s'
    cursor.execute(sql,id)
    res= utils.query(sql,id)
    res = list(res)
    url = res[0][0]
    print(url)
    driver.get(url)
    stars = driver.find_elements_by_class_name("rating_per")  # 找到所有的星级标签(包括1星-5星下对应的value)
    print(stars)
    st = []
    for j in stars:
        s = j.text[:-1]  # 去掉每个value的百分号%
        s = float(s)
        st.append(s)
    print(st)
    st.insert(0, id)  # 在列表头部插入电影的movie_id
    name = utils.query('select movie_name from movies_info where movie_id = %s',id)
    st.insert(1, name[0][0])  # st最终处理成star_data能接受的数据格式
    print(st)
    sql = 'insert into star_data values(%s,%s,%s,%s,%s,%s,%s)'
    cursor.execute(sql, st)
    conn.commit()
    conn.close()
    driver.close()


if __name__ == '__main__':
    for i in range(21,31):
        stars(i)

