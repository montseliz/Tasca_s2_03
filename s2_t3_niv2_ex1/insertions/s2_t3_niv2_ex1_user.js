db.user.insertMany(
    [{
        "name": "pildorasinformaticas", 
        "password": "hG6&mL4@c", 
        "email": "pildoras@gmail.com", 
        "gender": "male", 
        "birthdate": new Date("1979-10-04"), 
        "zip": "08030", 
        "country": "Espanya", 
        "channel":{
            "name": "pildorasinformaticas", 
            "description": "Este canal pretende compartir conocimientos informáticos entre todos los integrantes de la comunidad Internet. Se tratarán diversas materias, desde ofimática básica y avanzada hasta programación, pasando por diseño gráfico y web.", 
            "date_creation": new Date("2012-05-15 17:21:32")
        }, 
        "subscription":[{
            "channel_name": "Coding with John"
        }, 
        {
            "channel_name": "Programación ATS"
        }]
    }, 
    {
        "name": "patrimonigencat", 
        "password": "dfhPO@c", 
        "email": "patrimoni@gencat.cat", 
        "gender": "female",  
        "country": "Espanya", 
        "channel":{
            "name": "patrimonigencat", 
            "description": "El patrimoni cultural de Catalunya com mai l'has vist http://patrimoni.gencat.cat", 
            "date_creation": new Date("2008-05-14 12:28:55")
        }, 
        "subscription":[{
            "channel_name": "Tate"
        }, 
        {
            "channel_name": "The Museum of Modern Art"
        }]
    },
    {
        "name": "metmuseum", 
        "password": "fsjTsjdg", 
        "email": "themet@gmail.com", 
        "gender": "male", 
        "country": "United States", 
        "channel":{
            "name": "The Met", 
            "description": "The Met presents over 5,000 years of art from around the world for everyone to experience and enjoy. The Museum lives in two iconic sites in New York City—The Met Fifth Avenue and The Met Cloisters.", 
            "date_creation": new Date("2007-02-18 19:25:41")
        }, 
        "subscription":[{
            "channel_name": "The Museum of Modern Art"
        }, 
        {
            "channel_name": "Van Gogh Museum"
        }]
    }, 
    {
        "name": "themuseumofmodernart", 
        "password": "246shasf", 
        "email": "moma@gmail.com", 
        "gender": "female", 
        "birthdate": new Date("1954-11-14"), 
        "zip": "1929", 
        "country": "United States", 
        "channel":{
            "name": "The Museum of Modern Art", 
            "description": "The Museum of Modern Art is home to over 200,000 artworks, comprised of painting and sculpture, drawings and prints, photography, architecture, design, media and performance.", 
            "date_creation": new Date("2008-12-17 11:51:55")
        }, 
        "subscription":[{
            "channel_name": "Van Gogh Museum"
        }, 
        {
            "channel_name": "Tate"
        }]
    }]
)