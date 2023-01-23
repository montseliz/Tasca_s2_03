db.Sale.insertMany(
[{
    "date": new Date("2021-05-12 14:34:50"), 
    "customer_id": ObjectId("63cc611323dcdc45b46740ae"), 
    "glasses_id": ObjectId("63cc688323dcdc45b46740b7"), 
    "employee": {
        "name": "Diana", 
        "surname1": "Vivó", 
        "surname2": "Reus" 
    }
}, 
{ 
    "date": new Date("2022-06-11 18:45:30"), 
    "customer_id": ObjectId("63cc624e23dcdc45b46740af"), 
    "glasses_id": ObjectId("63cc688323dcdc45b46740b8"), 
    "employee": {
        "name": "Eduard", 
        "surname1": "Martínez", 
        "surname2": "Piñeiro" 
    }
},
{
    "date": new Date("2022-09-30 19:41:26"), 
    "customer_id": ObjectId("63cc624e23dcdc45b46740b0"), 
    "glasses_id": ObjectId("63cc688323dcdc45b46740b9"), 
    "employee": {
        "name": "Eduard", 
        "surname1": "Martínez", 
        "surname2": "Piñeiro" 
    }
}])

