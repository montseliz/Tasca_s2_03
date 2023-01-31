db.Provider.insertMany(
[{
    "name": "Miller & Marc", 
    "phone": "690472689", 
    "nif": "B50692844", 
    "address":{
        "street": "Rietveldenweg", 
        "number": "47F", 
        "city": "Hertogenbosch", 
        "zip": "5222", 
        "country": "Països Baixos"
    }, 
    "brand":[{
        "name": "Ray Ban", 
        "glasses":[{
            "_id": 1, 
            "graduation": {
                "right": NumberDecimal("3.5"), 
                "left": NumberDecimal("3.25")
            }, 
            "frame": "floating", 
            "colour": {
                "frame": "blanc", 
                "glass_right": "transparent", 
                "glass_left": "transparent"
            },  
            "price": NumberDecimal("234.89")
        }, 
        {
            "_id": 2, 
            "graduation": {
                "right": NumberDecimal("2.25"), 
                "left": NumberDecimal("1.75")
            }, 
            "frame": "pasta", 
            "colour": {
                "frame": "negre", 
            },  
            "price": NumberDecimal("213.99")
        }]
    }, 
    {
        "name": "Arnette", 
        "glasses":[{
            "_id": 3, 
            "graduation": {
                "right": NumberDecimal("-1.5"), 
                "left": NumberDecimal("-1.25")
            }, 
            "frame": "metallic", 
            "colour": {
                "frame": "gris", 
                "glass_right": "transparent", 
                "glass_left": "transparent"
            },  
            "price": NumberDecimal("289.45"), 
        }]
    }]
}, 
{ 
    "name": "Green Medical", 
    "phone": "962965732", 
    "fax": "962965733", 
    "nif": "B27435738", 
    "address":{
        "street": "C/ Torrent de l'Olla", 
        "number": "56", 
        "city": "Barcelona", 
        "zip": "08010", 
        "country": "Espanya"
    }, 
    "brand":[{
        "name": "Zen Barcelona", 
        "glasses": [{
            "_id": 4, 
            "graduation": {
                "right": NumberDecimal("-0.5"), 
                "left": NumberDecimal("-0.25")
            }, 
            "frame": "metallic", 
            "colour": {
                "frame": "blanc", 
                "glass_right": "transparent", 
                "glass_left": "transparent"
            },  
            "price": NumberDecimal("258.25")
        }]
    }, 
    {
        "name": "Etnia Barcelona", 
        "glasses": [{
            "_id": 5, 
            "graduation": {
                "right": NumberDecimal("1.5"), 
                "left": NumberDecimal("-0.25")
            }, 
            "frame": "pasta", 
            "colour": {
                "frame": "verd", 
                "glass_right": "blau", 
                "glass_left": "blau"
            },  
            "price": NumberDecimal("325.65")
        }]
    }]
},
{
    "name": "Solo Solis", 
    "phone": "934562345", 
    "nif": "B37743777", 
    "address":{
        "street": "C/ Francesc Carbonell", 
        "number": "52", 
        "floor": "baixos", 
        "city": "Barcelona", 
        "zip": "08024", 
        "country": "Espanya"
    }, 
    "brand":[{
        "name": "Tous", 
        "glasses": [{
            "_id": 6, 
            "graduation": {
                "right": NumberDecimal("2.5"), 
                "left": NumberDecimal("-4.25")
            }, 
            "frame": "pasta", 
            "colour": {
                "frame": "vermell", 
                "glass_right": "transparent", 
                "glass_left": "transparent"
            },  
            "price": NumberDecimal("312.35")
        }]
    }, 
    {
        "name": "Carolina Herrera", 
        "glasses": [{
            "_id": 7, 
            "graduation": {
                "right": NumberDecimal("1.5"), 
                "left": NumberDecimal("-1.25")
            }, 
            "frame": "metallic", 
            "colour": {
                "frame": "rosa", 
                "glass_right": "transparent", 
                "glass_left": "transparent"
            },  
            "price": NumberDecimal("312.35")
        }]
    }, 
    {
        "name": "Cacharel", 
        "glasses": [{
            "_id": 8, 
            "graduation": {
                "right": NumberDecimal("2.5"), 
                "left": NumberDecimal("-2.25")
            }, 
            "frame": "pasta", 
            "colour": {
                "frame": "blanc", 
                "glass_right": "transparent", 
                "glass_left": "transparent"
            },  
            "price": NumberDecimal("304.45")
        }]
    }]
}])

