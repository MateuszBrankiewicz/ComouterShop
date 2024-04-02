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
    cpus = readFileFunctions.getCpus()
    cpuData = []
    
    for cpu in cpus:
        cpuInfo = {
            'name': cpu['name'],
            'price': cpu['price'],
            'imgurl': cpu['imgurl']
        }
        
        additionalAttributes = ['rdzenie', 'bazCzest', 'integra',  'socket']
        for i, attr in enumerate(additionalAttributes):
            if attr in cpu:
                cpuInfo[f'charakterystik{i}'] = cpu[attr]
        
        cpuData.append(cpuInfo)
    
    return jsonify(cpuData)

@app.route('/products/cooler')
def cooler():
    coolers = readFileFunctions.getCoolers()
    coolerData = []
    for cooler in coolers:
        coolerInfo = {
            'name': cooler['name'],
            'price': cooler['price'],
            'imgurl': cooler['imgurl']
        }
        additionalAtribbutes = ["halas","rozmiar","kolor","pObr"]
        for i, attr in enumerate(additionalAtribbutes):
            if attr in cooler:
                coolerInfo[f'charakterystik{i}'] = cooler[attr]
        coolerData.append(coolerInfo)
    return jsonify(coolerData)
@app.route('/products/disks')
def disk():
    disks = readFileFunctions.getDisks()
    diskData = []
    for disk in disks:
        diskInfo = {
            'name': disk['name'],
            'price': disk['price'],
            'imgurl': disk['imgurl']
        }
        additionalAtribbutes = ["capacity","type","interface","factor"]
        for i, attr in enumerate(additionalAtribbutes):
            if attr in disk:
                diskInfo[f'charakterystik{i}'] = disk[attr]
        diskData.append(diskInfo)
    return jsonify(diskData)
@app.route('/products/gpu')
def gpu():
    gpus = readFileFunctions.getGpu()
    gpuData = []
    for gpu in gpus:
        gpuInfo = {
            'name': gpu['name'],
            'price': gpu['price'],
            'imgurl': gpu['imgurl']
        }
        additionalAtribbutes = ["series","vram","baseClock","length"]
        for i, attr in enumerate(additionalAtribbutes):
            if attr in gpu:
                gpuInfo[f'charakterystik{i}'] = gpu[attr]
        gpuData.append(gpuInfo)
    return jsonify(gpuData)
    
@app.route('/products/motherboard')
def motherboard():
    motherboards = readFileFunctions.getMotherboards()
    motherboardData = []
    for motherboard in motherboards:
        motherboardInfo = {
            'name': motherboard['name'],
            'price': motherboard['price'],
            'imgurl': motherboard['imgurl']
        }
        additionalAtribbutes = ["socket","form","maxMemory","ramSlots"]
        for i, attr in enumerate(additionalAtribbutes):
            if attr in motherboard:
                motherboardInfo[f'charakterystik{i}'] = motherboard[attr]
        motherboardData.append(motherboardInfo)
    return jsonify(motherboardData)
@app.route('/products/epu')
def epu():
    epus = readFileFunctions.getEpu()
    epuData = []
    for epu in epus:
        epuInfo = {
            'name': epu['name'],
            'price': epu['price'],
            'imgurl': epu['imgurl']
        }
        additionalAtribbutes = ["form","rating","watt","modular"]
        for i, attr in enumerate(additionalAtribbutes):
            if attr in epu:
                epuInfo[f'charakterystik{i}'] = epu[attr]
        epuData.append(epuInfo)
    return jsonify(epuData)
@app.route('/products/ram')
def ram():
    rams = readFileFunctions.getRams()
    ramData = []
    for ram in rams:
        ramInfo = {
            'name': ram['name'],
            'price': ram['price'],
            'imgurl': ram['imgurl']
        }
        additionalAtribbutes = ["type","capacity","latency","pricePerUnit"]
        for i, attr in enumerate(additionalAtribbutes):
            if attr in ram:
                ramInfo[f'charakterystik{i}'] = ram[attr]
        ramData.append(ramInfo)
    return jsonify(ramData)

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
