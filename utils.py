import pymysql
import word_cloud

#获得和数据库的连接
def get_conn():
    '''
    获得连接
    :return:连接，游标
    '''
    #创建连接
    conn = pymysql.connect(host="localhost",
                           port=3306,
                           user="root",
                           password="root",
                           db="grade_design",
                           charset="utf8mb4")
    #创建游标
    cursor = conn.cursor()#执行完毕的结果默认以元祖显示
    return conn,cursor

#关闭和数据库的连接
def close_conn(conn,cursor):
    cursor.close()
    conn.close()

#通用查询
def query(sql,*args):
    '''
    封装通用查询
    :param sql:
    :param args:
    :return:返回查询结果，形式:((),(),)
    '''
    conn,cursor = get_conn()
    cursor.execute(sql,args)
    res = cursor.fetchall()
    close_conn(conn,cursor)
    return res

#获取电影类型
def get_type():
    sql = 'select type from movies_type'
    res = query(sql)
    return res

#获取词云数据
def get_wordCloud_data(id):
    '''
    :return: 返回100条词云
    '''
    sql = 'select tag,weight from wordcloud_data where movie_id=%s'#根据short_id降序排列限制20条
    res = query(sql,id)#格式(('tag1',34),('tag2',3559)...)
    return res

#获取关系图数据
def get_relation_data():
    '''
    :return: 返回关系图的data
    '''
    sql = 'select name,category,draggable from relation_data'
    res = query(sql)
    return res

#获取关系图结点数据
def get_relationNode_data():
    '''
    :return: 返回关系图的结点data
    '''
    sql = 'select source,target from relation_link_data'
    res = query(sql)
    return res

#获取星级数据
def get_star_data(id):
    '''
    :return: 返回星级的data
    '''
    sql = 'select stars5,stars4,stars3,stars2,stars1 from star_data where movie_id=%s'
    res = query(sql,id)
    return res

#获取相关推荐数据
def get_rec_data(id):
    '''
    :return: 返回相关推荐的data
    '''
    sql = 'select rec1_poster_url,rec2_poster_url from related_rec_data where movie_id=%s'
    res = query(sql,id)
    return res

#获取相关推荐tip数据
def get_rec_tip_data(id):
    '''
    :param id: 返回相关推荐tip的data
    :return:
    '''
    sql = 'select rec1_name,rec1_year,rec1_director,rec1_stars,rec1_types,rec2_name,rec2_year,rec2_director,rec2_stars,rec2_types from related_rec_data where movie_id=%s'
    res = query(sql, id)
    return res

if __name__ == '__main__':
    # print(get_relation_data())
    # print(get_wordCloud_data(1))
    # print(get_relationNode_data())
    # print(get_star_data(1))
    # print(get_rec_data(1))
    print(get_rec_tip_data(5))