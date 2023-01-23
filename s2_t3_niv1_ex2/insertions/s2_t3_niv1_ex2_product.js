db.product.insertMany(
    [{
        "type_pizza":{
            "name": "Trufada", 
            "description": "Tòfona negra, fontina, ou i parmesà", 
            "picture": "https://barcelonandme.com/wp-content/uploads/2017/12/Parking-Pizza-9.jpg", 
            "price": NumberDecimal("14.90"),
            "category_name": "Premium"
        }
    }, 
    {
        "type_pizza":{
            "name": "Mallorquina", 
            "description": "Sobrassada picant de Mallorca, taleggio i farigola", 
            "picture": "https://media.cntraveler.com/photos/6201513e4b72c98031e0c6b8/16:9/w_2560%2Cc_limit/Parking%2520Pizza_4I5A4830.jpeg", 
            "price": NumberDecimal("11.75"),
            "category_name": "Especial"
        }
    }, 
    {
        "type_hamburguer":{
            "name": "Premium König", 
            "description": "Hamburguesa de 200 grams, enciam, tomàquet, formatge, bacon i salsa barbacoa", 
            "picture": "https://www.konig.cat/wp-content/uploads/2015/12/1865.jpg", 
            "price": NumberDecimal("5.25")
        }
    }, 
    {
        "type_beverage":{
            "name": "Mad Pony", 
            "picture": "https://garagebeer.co/wp-content/uploads/2022/12/mad-pony-Negro_Mockup-1.jpg", 
            "price": NumberDecimal("5.50")
        }
    },
    {
        "type_beverage":{
            "name": "Santako", 
            "picture": "https://garagebeer.co/wp-content/uploads/2021/05/GBC_May21_23-768x768.jpg", 
            "price": NumberDecimal("3.75")
        }
    }]
)