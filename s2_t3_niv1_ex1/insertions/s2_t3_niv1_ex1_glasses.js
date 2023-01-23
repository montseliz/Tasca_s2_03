db.Glasses.insertMany(
[{
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
    "price": NumberDecimal("234.89"), 
    "provider_id": ObjectId("63cc66b723dcdc45b46740b5")
}, 
{ 
    "graduation": {
        "right": NumberDecimal("2.25"), 
        "left": NumberDecimal("1.75")
    }, 
    "frame": "pasta", 
    "colour": {
        "frame": "negre", 
    },  
    "price": NumberDecimal("213.99"), 
    "provider_id": ObjectId("63cc66b723dcdc45b46740b4")
},
{
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
    "provider_id": ObjectId("63cc66b723dcdc45b46740b6")
}])

