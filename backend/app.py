from flask import Flask, jsonify,request
from flask_cors import CORS
import csv
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
@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    
    print(data)
    required_fields = ['name', 'surname', 'email', 'password']
    if not all(field in data for field in required_fields):
        return jsonify({'message': 'Brak wymaganych pól'}), 400
    
    # Open the file in read mode first
    with open("./users/users.csv", mode='r', newline='') as file:
        reader = csv.reader(file)
        
        rows = list(reader)
        if rows:
            last_id = int(rows[-1][0])
            new_id = last_id + 1
        else:
            new_id = 1
    
    # Then reopen the file in append mode for writing
    with open("./users/users.csv", mode='a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow('/n')
        writer.writerow([new_id, data['name'], data['surname'], data['email'], data['password']])
    
    return jsonify({'result': 'Rejestracja udana'}), 200

@app.route('/api/login', methods = ['POST'])
def login():
    data = request.json
    print(data)
    with open('./users/users.csv', 'r') as file:
        reader = csv.reader(file)
        next(reader)
        for row in reader:
            print(row[3],row[4])
            if(data['email'] == row[3] and data['password'] == row[4]):
                  return jsonify({'result': 'Logowanie udane', 'name':row[1],'surname':row[2],'email':row[3],'password':row[4]}), 200
    return jsonify({'message': 'Niepoprawne dane logowania'}), 400
if __name__ == '__main__':
    app.run(debug=True)
