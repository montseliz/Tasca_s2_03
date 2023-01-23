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
        "name": "Ray Ban"
    }, 
    {
        "name": "Arnette"
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
        "name": "Zen Barcelona"
    }, 
    {
        "name": "Etnia Barcelona"
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
        "name": "Tous"
    }, 
    {
        "name": "Carolina Herrera"
    }, 
    {
        "name": "Cacharel"
    }]
}])

