import requests
from flask import Flask, request, send_from_directory
app = Flask(__name__, static_url_path='')

@app.route("/proxy/")
def hello():
    callback = request.args.get('jsoncallback')
    url = request.args.get('url')

    return "{}({});".format(callback, requests.get(url).text)

@app.route('/app/<path:path>')
def send_js(path):
    return send_from_directory('.', path)


if __name__ == "__main__":
    app.debug = True
    app.run()
