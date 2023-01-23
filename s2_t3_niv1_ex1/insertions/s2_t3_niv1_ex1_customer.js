db.Customer.insertOne(
{
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
})

db.Customer.insertMany(
[{ 
    "name": "Miquel", 
    "surname1": "Serrano", 
    "phone": "652364244", 
    "email": "mserrano@gmail.com", 
    "registration": new Date("2022-06-11 18:45:30"), 
    "recommendation_id": ObjectId("63cc611323dcdc45b46740ae"), 
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
{
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
}])

