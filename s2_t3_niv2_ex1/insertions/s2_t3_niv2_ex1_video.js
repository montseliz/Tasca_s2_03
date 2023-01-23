db.video.insertMany(
    [{
        "title": "Chroma AR", 
        "description": "The Chroma AR experience allows smartphone users to virtually recreate an ancient Greek sculpture of a sphinx in full color, in their own space, comparing the vivid reconstruction and as it looks today.", 
        "size": new Double (1.15),
        "file_name": "chroma_ar.mp4", 
        "duration": "00:00:45", 
        "thumbnail": "https://img.youtube.com/vi/1DXsUaG6Lh4/0.jpg", 
        "reproductions": 5585, 
        "likes":[{
            "user_id": ObjectId("63cf0a33e22425d60c1041e9"), 
            "date_likes": new Date("2022-09-15 15:29:38")
        },
        {
            "user_id": ObjectId("63cf0d71e22425d60c1041ef"), 
            "date_likes": new Date("2022-12-18 16:19:55")
        }], 
        "dislikes":[{
            "user_id": ObjectId("63cf0a33e22425d60c1041e8"), 
            "date_dislikes": new Date("2021-12-04 11:19:45")
        }], 
        "condition": "public", 
        "tag": [{
            "name": "#art", 
        }, 
        {
            "name": "#museum",
        }, 
        {
            "name": "#augmentedreality"
        }], 
        "date_publishing": new Date("2021-11-12 11:13:35"), 
        "comment":[{
            "user_id": ObjectId("63cf0d71e22425d60c1041ef"), 
            "text": "That's fun!", 
            "date_feedback": new Date("2021-12-04 14:12:36"), 
            "likes":[{
                "user_id": ObjectId("63cf0a33e22425d60c1041ea"), 
                "date_feedback_like": new Date("2021-12-24 12:24:57")
            }, 
            {
                "user_id": ObjectId("63cf0a33e22425d60c1041e9"), 
                "date_feedback_like": new Date("2021-12-31 11:32:34")
            }], 
            "dislikes":[{
                "user_id": ObjectId("63cf0a33e22425d60c1041e8"), 
                "date_feedback_dislike": new Date("2021-12-28 18:54:43")
            }],
        }],  
        "user_id": ObjectId("63cf0a33e22425d60c1041ea"), 
        "playlist_id":[
            ObjectId("63cf0a33e22425d60c1041ea"),  
            ObjectId("63ce89bcd08292e2f1d3634a")
        ]
    },
    {
        "title": "Curso Excel 2010 Básico. Video 10 Fórmulas y referencias.", 
        "description": "Tema fundamental el de este vídeo. Referencias, absolutas, relativas y mixtas.", 
        "size": new Double (4.35),
        "file_name": "excel10.mp4", 
        "duration": "00:30:33", 
        "thumbnail": "https://img.youtube.com/vi/UFob_EWdWLA/0.jpg", 
        "reproductions": 306540, 
        "likes":[{
            "user_id": ObjectId("63cf0a33e22425d60c1041e9"), 
            "date_likes": new Date("2023-01-11 11:19:31")
        }], 
        "dislikes":[{
            "user_id": ObjectId("63cf0a33e22425d60c1041ea"), 
            "date_dislikes": new Date("2022-03-04 17:33:37")
        },
        {
            "user_id": ObjectId("63cf0d71e22425d60c1041ef"), 
            "date_dislikes": new Date("2023-01-04 08:33:47")
        }], 
        "condition": "public", 
        "tag": [{
            "name": "#excel", 
        }, 
        {
            "name": "#curso",
        }, 
        {
            "name": "#cursoexcelbasico"
        }], 
        "date_publishing": new Date("2015-10-30 13:13:13"), 
        "comment":[{
            "user_id": ObjectId("63cf0d71e22425d60c1041ef"), 
            "text": "Can you translate it?", 
            "date_feedback": new Date("2023-01-07 14:12:45"), 
            "likes":[{
                "user_id": ObjectId("63cf0a33e22425d60c1041ea"), 
                "date_feedback_like": new Date("2023-01-09 09:22:34")
            }], 
            "dislikes":[{
                "user_id": ObjectId("63cf0a33e22425d60c1041e8"), 
                "date_feedback_dislike": new Date("2023-01-16 14:44:56")
            }, 
            {
                "user_id": ObjectId("63cf0a33e22425d60c1041e9"), 
                "date_feedback_dislike": new Date("2023-01-20 21:44:23")
            }],
        }],  
        "user_id": ObjectId("63cf0a33e22425d60c1041e8"), 
        "playlist_id":[
            ObjectId("63cf0a52e22425d60c1041ec"), 
            ObjectId("63cf0a52e22425d60c1041eb")
        ]
    }]
)