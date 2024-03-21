class Cpu:
    def __init__(self, name, rdzenie,bazCzest,maxCzest,tdp,integra,hpt,price,socket,imgurl):
        self.name = name
        self.rdzenie = rdzenie
        self.bazCzest = bazCzest
        self.maxCzest = maxCzest
        self.tdp = tdp
        self.integra = integra
        self.hpt = hpt 
        self.price = price
        self.socket = socket
        self.imgurl = imgurl
class Cooler:
    def __init__(self,model,pObr,halas,kolor,rozmiar,price,imgurl):
        self.model = model
        self.pObr = pObr
        self.halas = halas
        self.kolor = kolor
        self.rozmiar = rozmiar
        self.price = price  
        self.imgurl =imgurl
class Disks:
    def __init__(self,name,capacity,priceGB,type,cache,factor,interface,price,imgurl):
        self.name = name
        self.capacity = capacity
        self.priceGB = priceGB
        self.type = type
        self.cache = cache
        self.factor = factor
        self.interface = interface
        self.price = price
        self.imgurl = imgurl
class Gpu:
    def __init__(self,name,series,vram,baseClock,boostClock,color,length,price,imgurl):
        self.name = name
        self.series = series
        self.vram = vram
        self.baseClock = baseClock
        self.boostClock = boostClock
        self.color = color
        self.length = length
        self.price = price
        self.imgurl = imgurl