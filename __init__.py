import os
from flask import Flask,render_template
from flask import request

app = Flask(__name__)

#数字大屏根目录
@app.route('/')
def big_screen():
    return render_template('index.html')

# a simple page that says hello
@app.route('/hello')
def hello():
    return 'Hello, World!'

@app.route('/home',methods=['GET','POST'])
def render_hone():
    return 'home!'

@app.route('/test',methods=['GET','POST'])
def get_test():
    if request.method == 'POST':
        return 'test from POST request'
    else:
        return 'test from GET request'

@app.route('/movies',methods=['GET','POST'])
def get_movies():
    app.config['JSON_AS_ASCII'] = False
    if request.method == 'GET':
        name = request.args.get('name','')
        print(name)
    if(name == '你好，李焕英'):
        return dict(name='你好，李焕英',wordcloud=11098)
    elif(name == '叶问'):
        return dict(name='叶问',wordcloud=89768)
    elif request.method == 'POST':
        print(request.form)
        print(request.data)
        print(request.json)
        name = request.json.get('movies')
        if(name=='你好，李焕英'):
            return dict(name='你好，李焕英 from post',wordcloud=11098)
        elif(name=='叶问'):
            return dict(name='叶问 from post',wordcloud=89768)

