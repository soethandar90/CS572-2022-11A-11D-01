const mongoose = require("mongoose");

const gameSchema = mongoose.Schema(
    {
        _id: ObjectId("5fbed15c07a5894b456a433f"),
        title: 'Tales & Games: Aladdin & The Magic Lamp',
        year: 2016,
        rate: 1,
        price: 19.8,
        minPlayers: 2,
        maxPlayers: 5,
        publisher: {
          name: 'IELLO',
          location: { coordinates: [ 6.190855155687126, 48.64625432886704 ] },
          _id: ObjectId("61d3a3cd2a1998dfe2c114c5"),
          country: 'France',
          established: 2004
        },
        reviews: [ {} ],
        minAge: 8,
        designers: [ 'Tiago Damey' ]
      }
)