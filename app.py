from flask import Flask
from flask import request
from flask.helpers import flash
from flask.templating import render_template
from flask import url_for
import os

app = Flask(__name__)

if os.environ.get('ENV') == 'production':
    app.secret_key = os.environ.get('SECRET_KEY')
else:
    app.secret_key = 'j0#nNyr|_|b!x|3!tC#80085'

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/hello-dreamer")
def hello_dreamer():
    return render_template('hello-dreamer.html')
