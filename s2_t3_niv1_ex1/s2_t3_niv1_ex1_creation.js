db.createCollection('Customer', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Customer',
      required: ['name', 'surname1', 'phone', 'email', 'registration', 'address'],
      properties: {
        name: {
          bsonType: 'string'
        },
        surname1: {
          bsonType: 'string'
        },
        surname2: {
          bsonType: 'string'
        },
        phone: {
          bsonType: 'string'
        },
        email: {
          bsonType: 'string'
        },
        registration: {
          bsonType: 'date'
        },
        recommendation_id: {
          bsonType: 'objectId'
        },
        address: {
          bsonType: 'object',
          title: 'object',
          required: ['street', 'number', 'city', 'zip', 'country'],
          properties: {
            street: {
              bsonType: 'string'
            },
            number: {
              bsonType: 'string'
            },
            floor: {
              bsonType: 'string'
            },
            door: {
              bsonType: 'string'
            },
            city: {
              bsonType: 'string'
            },
            zip: {
              bsonType: 'string'
            },
            country: {
              bsonType: 'string'
            }
          }
        }
      }
    }
  }
});
db.createCollection('Sale', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Sale',
      required: ['date', 'customer_id', 'glasses_id', 'employee'],
      properties: {
        date: {
          bsonType: 'date'
        },
        customer_id: {
          bsonType: 'objectId'
        },
        glasses_id: {
          bsonType: 'objectId'
        },
        employee: {
          bsonType: 'object',
          title: 'object',
          required: ['name', 'surname1'],
          properties: {
            name: {
              bsonType: 'string'
            },
            surname1: {
              bsonType: 'string'
            },
            surname2: {
              bsonType: 'string'
            }
          }
        }
      }
    }
  }
});
db.createCollection('Provider', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Provider',
      required: ['name', 'phone', 'nif', 'address', 'brand'],
      properties: {
        name: {
          bsonType: 'string'
        },
        phone: {
          bsonType: 'string'
        },
        fax: {
          bsonType: 'string'
        },
        nif: {
          bsonType: 'string'
        },
        address: {
          bsonType: 'object',
          title: 'object',
          required: ['street', 'number', 'city', 'zip', 'country'],
          properties: {
            street: {
              bsonType: 'string'
            },
            number: {
              bsonType: 'string'
            },
            floor: {
              bsonType: 'string'
            },
            door: {
              bsonType: 'string'
            },
            city: {
              bsonType: 'string'
            },
            zip: {
              bsonType: 'string'
            },
            country: {
              bsonType: 'string'
            }
          }
        },
        brand: {
          bsonType: 'array',
          items: {
            title: 'object',
            properties: {
              name: {
                bsonType: 'string'
              }
            }
          }
        }
      }
    }
  }
});
db.createCollection('Glasses', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Glasses',
      required: ['graduation', 'frame', 'colour', 'price', 'provider_id'],
      properties: {
        graduation: {
          bsonType: 'object',
          title: 'object',
          required: ['right', 'left'],
          properties: {
            right: {
              bsonType: 'decimal'
            },
            left: {
              bsonType: 'decimal'
            }
          }
        },
        frame: {
          bsonType: 'string',
          description: 'The possible values are floating, pasta or metallic'
        },
        colour: {
          bsonType: 'object',
          title: 'object',
          properties: {
            frame: {
              bsonType: 'string'
            },
            glass_right: {
              bsonType: 'string'
            },
            glass_left: {
              bsonType: 'string'
            }
          }
        },
        price: {
          bsonType: 'decimal'
        },
        provider_id: {
          bsonType: 'objectId'
        }
      }
    }
  }
});