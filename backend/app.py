from flask import Flask, jsonify
from flask_cors import CORS
import requests
import readFileFunctions


app = Flask(__name__)
CORS(app)

      

@app.route('/')
def index():
    return jsonify(readFileFunctions.getProducts())
@app.route('/products/cpu')
def cpu():
    return jsonify(readFileFunctions.getCpus())
@app.route('/products/cooler')
def cooler():
    return jsonify(readFileFunctions.getCoolers())
@app.route('/products/disks')
def disk():
    return jsonify(readFileFunctions.getDisks())
@app.route('/products/gpu')
def gpu():
      
    return jsonify(readFileFunctions.getGpu())
if __name__ == '__main__':
    app.run(debug=True)
