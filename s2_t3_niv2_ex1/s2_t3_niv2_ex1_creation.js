db.createCollection('user', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'user',
      required: ['name', 'password', 'email', 'gender', 'country'],
      properties: {
        name: {
          bsonType: 'string'
        },
        password: {
          bsonType: 'string'
        },
        email: {
          bsonType: 'string'
        },
        gender: {
          bsonType: 'string',
          description: 'Female or Male'
        },
        birthdate: {
          bsonType: 'date'
        },
        zip: {
          bsonType: 'string'
        },
        country: {
          bsonType: 'string'
        },
        channel: {
          bsonType: 'object',
          title: 'object',
          properties: {
            name: {
              bsonType: 'string'
            },
            description: {
              bsonType: 'string'
            },
            date_creation: {
              bsonType: 'date'
            }
          }
        },
        subscription: {
          bsonType: 'array',
          items: {
            title: 'object',
            properties: {
              channel_name: {
                bsonType: 'string'
              }
            }
          }
        }
      }
    }
  }
});
db.createCollection('video', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'video',
      required: ['title', 'size', 'file_name', 'duration', 'thumbnail', 'reproductions', 'condition', 'date_publishing', 'user_id'],
      properties: {
        title: {
          bsonType: 'string'
        },
        description: {
          bsonType: 'string'
        },
        size: {
          bsonType: 'double'
        },
        file_name: {
          bsonType: 'string'
        },
        duration: {
          bsonType: 'string'
        },
        thumbnail: {
          bsonType: 'string'
        },
        reproductions: {
          bsonType: 'int'
        },
        likes: {
          bsonType: 'array',
          items: {
            title: 'object',
            properties: {
              user_id: {
                bsonType: 'objectId'
              },
              date_likes: {
                bsonType: 'date'
              }
            }
          }
        },
        dislikes: {
          bsonType: 'array',
          items: {
            title: 'object',
            properties: {
              user_id: {
                bsonType: 'objectId'
              },
              date_dislikes: {
                bsonType: 'date'
              }
            }
          }
        },
        condition: {
          bsonType: 'string',
          description: 'Possible values are "public", "private" or "hidden"'
        },
        tag: {
          bsonType: 'array',
          items: {
            title: 'object',
            properties: {
              name: {
                bsonType: 'string'
              }
            }
          }
        },
        date_publishing: {
          bsonType: 'date'
        },
        comment: {
          bsonType: 'array',
          items: {
            title: 'object',
            properties: {
              user_id: {
                bsonType: 'objectId'
              },
              text: {
                bsonType: 'string'
              },
              date_feedback: {
                bsonType: 'date'
              },
              likes: {
                bsonType: 'array',
                items: {
                  title: 'object',
                  properties: {
                    user_id: {
                      bsonType: 'objectId'
                    },
                    date_feedback_like: {
                      bsonType: 'date'
                    }
                  }
                }
              },
              dislikes: {
                bsonType: 'array',
                items: {
                  title: 'object',
                  properties: {
                    user_id: {
                      bsonType: 'objectId'
                    },
                    date_feedback_dislike: {
                      bsonType: 'date'
                    }
                  }
                }
              }
            }
          }
        },
        user_id: {
          bsonType: 'objectId'
        },
        playlist_id: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        }
      }
    }
  }
});
db.createCollection('playlist', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'playlist',
      required: ['name', 'date_creation', 'condition', 'user_id'],
      properties: {
        name: {
          bsonType: 'string'
        },
        date_creation: {
          bsonType: 'date'
        },
        condition: {
          bsonType: 'string',
          description: 'Possible values are "public" or "private"'
        },
        user_id: {
          bsonType: 'objectId'
        }
      }
    }
  }
});