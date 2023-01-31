db.Sale.insertMany(
[{
    "date": new Date("2021-05-12 14:34:50"), 
    "employee": {
        "name": "Diana", 
        "surname1": "Vivó", 
        "surname2": "Reus" 
    }, 
    "customer": {
        "_id": 9, 
        "name": "Magda", 
        "surname1": "Roig", 
        "surname2": "Verdú", 
        "phone": "654548425", 
        "email": "magdarv@gmail.com", 
        "registration": new Date("2021-05-12 14:34:50") , 
        "address":{
            "street": "C/ Verdi", 
            "number": "7", 
            "city": "Barcelona", 
            "zip": "08010", 
            "country": "Espanya"
        }
    }, 
    "provider_id": ObjectId("63d8f043d3fe8670bb90df0e")
}, 
{ 
    "date": new Date("2022-06-11 18:45:30"), 
    "employee": {
        "name": "Eduard", 
        "surname1": "Martínez", 
        "surname2": "Piñeiro" 
    }, 
    "customer": { 
        "_id": 10, 
        "name": "Miquel", 
        "surname1": "Serrano", 
        "phone": "652364244", 
        "email": "mserrano@gmail.com", 
        "registration": new Date("2022-06-11 18:45:30"), 
        "recommendation_id": 9, 
        "address":{
            "street": "C/ Sants", 
            "number": "99", 
            "floor": "4t", 
            "door": "2ª", 
            "city": "Barcelona", 
            "zip": "08024", 
            "country": "Espanya"
        }
    }, 
    "provider_id": ObjectId("63d8f043d3fe8670bb90df0f")
},
{
    "date": new Date("2022-09-30 19:41:26"), 
    "employee": {
        "name": "Eduard", 
        "surname1": "Martínez", 
        "surname2": "Piñeiro" 
    }, 
    "customer": {
        "_id": 11, 
        "name": "Ona", 
        "surname1": "Ferran", 
        "surname2": "Soler", 
        "phone": "635736375", 
        "email": "onaferra@hotmail.com", 
        "registration": new Date("2022-09-30 19:41:26"), 
        "address":{
            "street": "C/ Gran de Sant Andreu", 
            "number": "68", 
            "floor": "3r", 
            "door": "3ª", 
            "city": "Barcelona", 
            "zip": "08030", 
            "country": "Espanya"
        }
    }, 
    "provider_id": ObjectId("63d8f043d3fe8670bb90df10")
}])

