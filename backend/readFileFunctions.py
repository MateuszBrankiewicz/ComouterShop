import partsClasses
import csv
import random
def getCpus():
    cpus = []
    with open('./parts/cpu.csv', 'r') as file:
        reader = csv.reader(file)
        next(reader)  
        for row in reader:
            name = row[0]
            rdzenie = row[1]
            bazCzest = row[2]
            maxCzest = row[3]
            tdp = row[4]
            integra = row[5]
            hpt = row[6]
            price = row[7]
            socket = row[8]
            imgurl = row[9]
            cpu = partsClasses.Cpu(name, rdzenie, bazCzest, maxCzest, tdp, integra, hpt, price, socket,imgurl)
            cpus.append(cpu.__dict__)
     
        return cpus
        
def getCoolers():
    coolers=[]
    with open('./parts/cooler.csv', 'r') as file:
        reader = csv.reader(file)
        next(reader)
        for row in reader:
            name = row[0]
            pObr = row[1]
            halas = row[2]
            kolor = row[3]
            rozmiar = row[4]
            price = row[5]
            imgurl = row[6]
            cooler = partsClasses.Cooler(name, pObr, halas, kolor, rozmiar, price,imgurl)
            coolers.append(cooler.__dict__)
          
        return coolers
def getDisks():
    disks=[]
    with open('./parts/disks.csv', 'r') as file:
        reader = csv.reader(file)
        next(reader)
      
        for row in reader:
            name = row[0]
            capacity = row[1]
            priceGB = row[2]
            type = row[3]
            cache = row[4]
            factor = row[5]
            interface = row[6]
            price = row[8]
            imgurl = row[9]
            disk = partsClasses.Disks(name, capacity, priceGB, type, cache, factor,interface, price,imgurl)
            disks.append(disk.__dict__)
        
        return disks
def getGpu():
    gpus=[]
    with open('./parts/gpu.csv', 'r') as file:
        reader = csv.reader(file)
        next(reader)
        for row in reader:
            series = row[0]
            name = row[1]
            vram = row[2]
            baseClock = row[3]
            boostClock = row[4]
            color = row[5]
            length = row[6]
            price = row[8]
            imgurl = row[9]
            gpu = partsClasses.Gpu(name, series, vram, baseClock, boostClock, color, length, price,imgurl)
            gpus.append(gpu.__dict__)
        return gpus
def getProducts():
    products = []
    products.extend(getGpu())
  
    products.extend(getCpus())
    products.extend(getDisks())
    products.extend(getCoolers())
    print(random.sample(products, 6))
    return random.sample(products, 6)