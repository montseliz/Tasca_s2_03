db.purchase.insertMany(
    [{
        "type": "at home", 
        "date":{
            "purchase": new Date("2022-06-11 18:45:30"), 
            "delivery": new Date("2022-06-11 19:15:10")
        }, 
        "product":[{
            "product_id": ObjectId("63cdc13d556b5ce6b44e8401"), 
            "quantity": 2 
        }], 
        "total_price": NumberDecimal("29.80"), 
        "customer_id": ObjectId("63cdc2b79c70823cd5271832"), 
        "shop_id": ObjectId("63cdc2d39c70823cd5271836"), 
        "employee_delivery_nif": "67476376G"
    }, 
    {
        "type": "in shop", 
        "date":{
            "purchase": new Date("2022-12-21 16:43:54")
        }, 
        "product":[{
            "product_id": ObjectId("63cdc2f29c70823cd527183b"), 
            "quantity": 2 
        }, 
        {
            "product_id": ObjectId("63cdc2f29c70823cd527183c"), 
            "quantity": 3 
        }], 
        "total_price": NumberDecimal("22.25"), 
        "customer_id": ObjectId("63cdc2b79c70823cd5271834"), 
        "shop_id": ObjectId("63cdc2d39c70823cd5271835"), 
    },
    {
        "type": "at home", 
        "date":{
            "purchase": new Date("2023-01-11 14:12:45"), 
            "delivery": new Date("2023-01-11 14:46:44")
        }, 
        "product":[{
            "product_id": ObjectId("63cdc2f29c70823cd527183a"), 
            "quantity": 2 
        }], 
        "total_price": NumberDecimal("10.50"), 
        "customer_id": ObjectId("63cdc2b79c70823cd5271833"), 
        "shop_id": ObjectId("63cdc2d39c70823cd5271837"), 
        "employee_delivery_nif": "72687264H"
    }]
)