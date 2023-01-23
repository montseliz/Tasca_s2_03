db.customer.insertMany(
    [{ 
        "name": "Alejandro", 
        "surname1": "Baptista", 
        "surname2": "Fernández", 
        "phone": "652364244", 
        "address":{
            "street": "C/ de Sants", 
            "number": "99", 
            "floor": "4t", 
            "door": "2ª", 
            "zip": "08024", 
            "locality": "Barcelona", 
            "province": "Barcelona"
        }
    },
    {
        "name": "Andrea", 
        "surname1": "Pérez", 
        "surname2": "Segura", 
        "phone": "653657676", 
        "address":{
            "street": "C/ Barcelona", 
            "number": "45", 
            "zip": "08040", 
            "locality": "Manresa", 
            "province": "Barcelona"
        }
    }, 
    {
        "name": "Berta", 
        "surname1": "Moral", 
        "phone": "690346968", 
        "address":{
            "street": "C/ de la Moreria", 
            "number": "12", 
            "floor": "3r", 
            "door": "3ª", 
            "zip": "17600", 
            "locality": "Figueres", 
            "province": "Girona"
        }
    }])