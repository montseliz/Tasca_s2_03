db.createCollection('customer', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'customer',
      required: ['name', 'surname1', 'phone', 'address'],
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
        address: {
          bsonType: 'object',
          title: 'object',
          required: ['street', 'number', 'zip', 'locality', 'province'],
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
            zip: {
              bsonType: 'string'
            },
            locality: {
              bsonType: 'string'
            },
            province: {
              bsonType: 'string'
            }
          }
        }
      }
    }
  }
});
db.createCollection('product', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'product',
      properties: {
        type_pizza: {
          bsonType: 'object',
          title: 'object',
          properties: {
            name: {
              bsonType: 'string'
            },
            description: {
              bsonType: 'string'
            },
            picture: {
              bsonType: 'string'
            },
            price: {
              bsonType: 'decimal'
            },
            category_name: {
              bsonType: 'string'
            }
          }
        },
        type_hamburguer: {
          bsonType: 'object',
          title: 'object',
          properties: {
            name: {
              bsonType: 'string'
            },
            description: {
              bsonType: 'string'
            },
            picture: {
              bsonType: 'string'
            },
            price: {
              bsonType: 'decimal'
            }
          }
        },
        type_beverage: {
          bsonType: 'object',
          title: 'object',
          properties: {
            name: {
              bsonType: 'string'
            },
            description: {
              bsonType: 'string'
            },
            picture: {
              bsonType: 'string'
            },
            price: {
              bsonType: 'decimal'
            }
          }
        },
        purchase_id: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('purchase', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'purchase',
      required: ['type', 'date', 'product', 'total_price', 'customer_id', 'shop_id'],
      properties: {
        type: {
          bsonType: 'string',
          description: 'Possible values for the type of orders are "at home" or "in shop"'
        },
        date: {
          bsonType: 'object',
          title: 'object',
          required: ['purchase'],
          properties: {
            purchase: {
              bsonType: 'date'
            },
            delivery: {
              bsonType: 'date'
            }
          }
        },
        product: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['product_id', 'quantity'],
            properties: {
              product_id: {
                bsonType: 'objectId'
              },
              quantity: {
                bsonType: 'int'
              }
            }
          }
        },
        total_price: {
          bsonType: 'decimal'
        },
        customer_id: {
          bsonType: 'objectId'
        },
        shop_id: {
          bsonType: 'objectId'
        },
        employee_delivery_nif: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('shop', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'shop',
      required: ['name', 'address', 'employee'],
      properties: {
        name: {
          bsonType: 'string'
        },
        address: {
          bsonType: 'object',
          title: 'object',
          required: ['street', 'number', 'zip', 'locality', 'province'],
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
            zip: {
              bsonType: 'string'
            },
            locality: {
              bsonType: 'string'
            },
            province: {
              bsonType: 'string'
            }
          }
        },
        employee: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['nif', 'type', 'name', 'surname1', 'phone'],
            properties: {
              nif: {
                bsonType: 'string'
              },
              type: {
                bsonType: 'string',
                description: 'Possible values for the type of employee are "cooker" or "delivery worker"'
              },
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
              }
            }
          }
        }
      }
    }
  }
});
