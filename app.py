# -*- coding: utf-8 -*-
# coding: utf-8
from flask import Flask, render_template, request,jsonify
import utils

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

#数字大屏根目录
@app.route('/')
def big_screen():
    return render_template('index.html')

@app.route('/ajax')
def text_ajax():
    id = request.values.get("movie_id")
    name = request.values.get("movie_name")
    print(f"id:{id},name:{name}")
    return f"id:{id},name:{name}"

#获取关系图的name，category和draggable
@app.route('/relation')
def get_relation():
    data = utils.get_relation_data()
    dt = []
    for t,c,d in data:
        if d == 1:
            dt.append({'name':t,'category':c,'draggable':bool('true')})
        elif d == 0:
            dt.append({'name':t,'category':c,'draggable':bool(0)})
    return jsonify({"kws":dt})

#获取关系图的节点连接
@app.route('/relationNode')
def get_nodes():
    data = utils.get_relationNode_data()
    dt = []
    for s,t in data:
        dt.append({'source':s,'target':t,'value':''})
    return jsonify({"nodes":dt})

#获取词云标签的name和value
@app.route('/wordcloud')
def get_wordcloud_data():
    data = utils.get_wordCloud_data(1)
    d = []
    for k,v in data:
        d.append({"name":k,"value":v})
    return jsonify({"clouds":d})

#获取星级的name和value
@app.route('/star')
def get_stars():
    data = utils.get_star_data(1)
    dt = []
    for v in data:
        # print(v)
        dt.append({'value':v[0],'name':'力荐'})
        dt.append({'value': v[1], 'name':'推荐'})
        dt.append({'value': v[2], 'name':'还行'})
        dt.append({'value': v[3], 'name':'较差'})
        dt.append({'value': v[4], 'name':'很差'})
    # print(dt)
    return jsonify({"st":dt})

#############################所有的电影路由##############################
@app.route('/<int:movie_id>')
def get_movies_infos(movie_id):
    data_st = []
    data_wc = []
    data_rec = []
    data_rec_tip = []
    data_wc = utils.get_wordCloud_data(movie_id)  # 获取词云图数据
    data_st = utils.get_star_data(movie_id)  # 获取星级评价数据
    data_rec = utils.get_rec_data(movie_id)  # 获取相关推荐数据 推荐data
    data_rec_tip = utils.get_rec_tip_data(movie_id) #获取相关推荐tip数据
    dt_wd = []  # 词云data
    dt_st = []  # 星级data
    dt_rec_tip = [] #相关推荐tip的data
    # 词云
    for k, v in data_wc:
        dt_wd.append({"name": k, "value": v})
    # 星级
    for v in data_st:
        # print(v)
        dt_st.append({'value': v[0], 'name': '力荐'})
        dt_st.append({'value': v[1], 'name': '推荐'})
        dt_st.append({'value': v[2], 'name': '还行'})
        dt_st.append({'value': v[3], 'name': '较差'})
        dt_st.append({'value': v[4], 'name': '很差'})
    # 推荐
    #推荐的tip
    for i in data_rec_tip:
        dt_rec_tip.append({"name":i[0],"year": i[1],"dir": i[2],"star": i[3],"type": i[4]})
        dt_rec_tip.append({"name": i[5], "year": i[6], "dir": i[7], "star": i[8], "type": i[9]})
    # print(dt_rec_tip)
    return jsonify({"clouds": dt_wd, "stars": dt_st, "recs": data_rec,"tips":dt_rec_tip})

if __name__ == '__main__':
    app.run()