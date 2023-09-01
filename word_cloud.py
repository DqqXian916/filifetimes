import jieba
import jieba.analyse
import codecs
import re
from collections import Counter
import utils

#词云的词频统计
class WordCounter(object):
    #读取字符串统计词频
    def count_from_str(self, content, top_limit=0):
        if top_limit <= 0:
            top_limit = 100
        rank = jieba.analyse.textrank(content, topK=180)#topK为提取的关键词个数
        words = jieba.cut(content,cut_all = False)
        counter = Counter()
        #统计词频
        for word in words:
            if word in rank:
                counter[word] += 1
        return counter.most_common(top_limit)

def wordCloud(id):
    counter = WordCounter()
    sql = 'select short from short_comments where movie_id = %s'#查询短评
    res_test = utils.query(sql,id)
    # 对查询到的sql结果进行的处理
    res_test = list(res_test)
    print(res_test)
    str = ''
    for i in res_test:
        print(i[0])
        str+=i[0]
    result = counter.count_from_str(str, top_limit=100)

    cnt = 0
    for k, v in result:
        #k是关键词 v是词频
        conn, cursor = utils.get_conn()
        sql = 'insert into wordcloud_data(movie_id,tag,weight) values (%s,%s,%s);'
        cursor.execute(sql, [id,k, v])
        conn.commit()
        print("插入第", cnt, "条数据成功!")
        cnt += 1


if __name__ == '__main__':
    for i in range(20,31):
        wordCloud(i)