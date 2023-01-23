db.playlist.insertMany(
    [{
        "name": "Curso de Java desde 0", 
        "date_creation": new Date("2012-08-18 18:28:38"), 
        "condition": "public", 
        "user_id": ObjectId("63ce89bcd08292e2f1d36349")
    },
    {
        "name": "Curso Git & GitHub", 
        "date_creation": new Date("2018-09-28 19:29:39"), 
        "condition": "public", 
        "user_id": ObjectId("63ce89bcd08292e2f1d36349")
    },
    {
        "name": "La ruta del Cister", 
        "date_creation": new Date("2019-10-15 16:28:47"), 
        "condition": "private", 
        "user_id": ObjectId("63ce89bcd08292e2f1d3634a")
    }, 
    {
        "name": "What's on", 
        "date_creation": new Date("2020-12-13 13:12:37"), 
        "condition": "public", 
        "user_id": ObjectId("63cf0a33e22425d60c1041ea")
    }]
)