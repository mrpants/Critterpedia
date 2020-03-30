import Route from '@ember/routing/route';
import AnalyticsRouteMixin from 'emberfire/mixins/analytics-route';

export default Route.extend(AnalyticsRouteMixin, {
  model() {
    return [{
      type: 'insect',
      name: 'Common Butterfly',
      price: '160',
      location: 'Above Flowers',
      time: {
        start: '04',
        end: '19'
      },
      months: {
        northern: [8, 9, 10, 11, 0, 1, 2, 3, 4, 5],
        southern: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Yellow Butterfly',
      price: '160',
      location: 'Flying',
      time: {
        start: '04',
        end: '19'
      },
      months: {
        northern: [2, 3, 4, 5, 8, 9],
        southern: [2, 3, 8, 9, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Tiger Butterfly',
      price: '240',
      location: 'Flying',
      time: {
        start: '04',
        end: '19'
      },
      months: {
        northern: [2, 3, 4, 5, 6, 7, 8],
        southern: [8, 9, 10, 11, 0, 1, 2],
      }
    },{
      type: 'insect',
      name: 'Peacock Butterfly',
      price: '2,500',
      location: 'Above Flowers',
      time: {
        start: '04',
        end: '19'
      },
      months: {
        northern: [2, 3, 4, 5],
        southern: [8, 9, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Common Bluebottle',
      price: '300',
      location: 'Flying',
      time: {
        start: '04',
        end: '19'
      },
      months: {
        northern: [3, 4, 5, 6, 7],
        southern: [9 , 10, 11, 0, 1],
      }
    },{
      type: 'insect',
      name: 'Paper Kite Butterfly',
      price: '1,000',
      location: 'Flying',
      time: {
        start: '08',
        end: '19'
      },
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Great Purple Emperor',
      price: '0',
      location: 'Flying',
      time: {
        start: '04',
        end: '07'
      },
      months: {
        northern: [4, 5, 6, 7],
        southern: [10, 11, 0, 1],
      }
    },{
      type: 'insect',
      name: 'Monarch Butterfly',
      price: '140',
      location: 'Flying',
      time: {
        start: '04',
        end: '17'
      },
      months: {
        northern: [8, 9, 10],
        southern: [2, 3, 4],
      }
    },{
      type: 'insect',
      name: 'Emperor Butterfly',
      price: '4,000',
      location: 'Flying',
      time: {
        start: '17',
        end: '08'
      },
      months: {
        northern: [11, 0, 1, 2, 5, 6, 7, 8],
        southern: [0, 1, 2, 5, 6, 7, 8, 11],
      }
    },{
      type: 'insect',
      name: 'Agrias Butterfly',
      price: '3,000',
      location: 'Flying',
      time: {
        start: '08',
        end: '17'
      },
      months: {
        northern: [3, 4, 5, 6, 7, 8],
        southern: [9, 10, 11, 0, 1, 2],
      }
    },{
      type: 'insect',
      name: 'Rajah Brooke\'s Birdwing',
      price: '2,500',
      location: 'Above Flowers',
      time: {
        start: '08',
        end: '17'
      },
      months: {
        northern: [11, 0, 1, 3, 4, 5, 6, 7, 8],
        southern: [5, 6, 7, 9, 10, 11, 0, 1, 2],
      }
    },{
      type: 'insect',
      name: 'Queen Alexandra\'s Birdwing',
      price: '4,000',
      location: 'Flying',
      time: {
        start: '08',
        end: '16'
      },
      months: {
        northern: [4, 5, 6, 7, 8],
        southern: [10, 11, 0, 1, 2, 3],
      }
    },{
      type: 'insect',
      name: 'Moth',
      price: '130',
      location: 'Around Light',
      time: {
        start: '19',
        end: '04'
      },
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Atlas Moth',
      price: '3,000',
      location: 'On Trees',
      time: {
        start: '19',
        end: '04'
      },
      months: {
        northern: [3, 4, 5, 6, 7, 8],
        southern: [9, 10, 11, 0, 1, 2],
      }
    },{
      type: 'insect',
      name: 'Madagascan Sunset Moth',
      price: '2,500',
      location: 'Flying',
      time: {
        start: '08',
        end: '16'
      },
      months: {
        northern: [3, 4, 5, 6, 7, 8],
        southern: [9, 10, 11, 0, 1, 2],
      }
    },{
      type: 'insect',
      name: 'Long Locust',
      price: '200',
      location: 'In Grass',
      time: {
        start: '08',
        end: '19'
      },
      months: {
        northern: [3, 4, 5, 6, 7, 8, 9, 10],
        southern: [9, 10, 11, 0, 1, 2, 3, 4],
      }
    },{
      type: 'insect',
      name: 'Migratory Locust',
      price: '600',
      location: 'In Grass',
      time: {
        start: '08',
        end: '19'
      },
      months: {
        northern: [7, 8, 9, 10],
        southern: [1, 2, 3, 4],
      }
    },{
      type: 'insect',
      name: 'Rice Grasshopper',
      price: '160',
      location: 'In Grass',
      time: {
        start: '08',
        end: '19'
      },
      months: {
        northern: [7, 8, 9, 10],
        southern: [1, 2, 3, 4],
      }
    },{
      type: 'insect',
      name: 'Grasshopper',
      price: '160',
      location: 'In Grass',
      time: {
        start: '08',
        end: '17'
      },
      months: {
        northern: [6, 7, 8],
        southern: [0, 1, 2],
      }
    },{
      type: 'insect',
      name: 'Cricket',
      price: '130',
      location: 'In Grass',
      time: {
        start: '17',
        end: '08'
      },
      months: {
        northern: [8, 9, 10],
        southern: [2, 3, 4],
      }
    },{
      type: 'insect',
      name: 'Bell Cricket',
      price: '430',
      location: 'In Grass',
      time: {
        start: '17',
        end: '08'
      },
      months: {
        northern: [8, 9],
        southern: [2, 3],
      }
    },{
      type: 'insect',
      name: 'Mantis',
      price: '430',
      location: 'On Flowers',
      time: {
        start: '08',
        end: '17'
      },
      months: {
        northern: [2, 3, 4, 5, 6, 7, 8, 9, 10],
        southern: [8, 9, 10, 11, 0, 2, 3],
      }
    },{
      type: 'insect',
      name: 'Orchid Mantis',
      price: '2,400',
      location: 'On Flowers',
      time: {
        start: '08',
        end: '17'
      },
      months: {
        northern: [2, 3, 4, 5, 6, 7, 8, 9, 10],
        southern: [8, 9, 10, 11, 0, 1, 2, 3, 4],
      }
    },{
      type: 'insect',
      name: 'Honeybee',
      price: '200',
      location: 'Above Flowers',
      time: {
        start: '08',
        end: '17'
      },
      months: {
        northern: [2, 3, 4, 5, 6],
        southern: [8, 9, 10, 11, 0],
      }
    },{
      type: 'insect',
      name: 'Wasp',
      price: '2,500',
      location: 'Shaking Trees',
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Brown Cicada',
      price: '250',
      location: 'On Trees',
      time: {
        start: '08',
        end: '17'
      },
      months: {
        northern: [6, 7],
        southern: [0, 1],
      }
    },{
      type: 'insect',
      name: 'Robust Cicada',
      price: '0',
      location: 'On Trees',
      time: {
        start: '08',
        end: '17'
      },
      months: {
        northern: [6, 7],
        southern: [0, 1],
      }
    },{
      type: 'insect',
      name: 'Giant Cicada',
      price: '0',
      location: 'On Trees',
      time: {
        start: '08',
        end: '17'
      },
      months: {
        northern: [6, 7],
        southern: [0, 1],
      }
    },{
      type: 'insect',
      name: 'Walker Cicada',
      price: '400',
      location: 'On Trees',
      time: {
        start: '08',
        end: '16'
      },
      months: {
        northern: [7, 8],
        southern: [1, 2],
      }
    },{
      type: 'insect',
      name: 'Evening Cicada',
      price: '0',
      location: 'On Trees',
      time: {
        start: '16',
        end: '19'
      },
      months: {
        northern: [6, 7],
        southern: [0, 1],
      }
    },{
      type: 'insect',
      name: 'Cicada Shell',
      price: '0',
      location: 'On Trees',
      months: {
        northern: [6, 7],
        southern: [0, 1],
      }
    },{
      type: 'insect',
      name: 'Red Dragonfly',
      price: '180',
      location: 'Flying',
      time: {
        start: '08',
        end: '19'
      },
      months: {
        northern: [8, 9],
        southern: [2, 3],
      }
    },{
      type: 'insect',
      name: 'Darner Dragonfly',
      price: '230',
      location: 'Flying',
      time: {
        start: '08',
        end: '17'
      },
      months: {
        northern: [3, 4, 5, 6, 7, 8, 9],
        southern: [9, 10, 11, 0, 1, 2, 3],
      }
    },{
      type: 'insect',
      name: 'Banded Dragonfly',
      price: '4,500',
      location: 'Flying',
      time: {
        start: '08',
        end: '17'
      },
      months: {
        northern: [4, 5, 6, 7, 8, 9],
        southern: [10, 11, 0, 1, 2, 3],
      }
    },{
      type: 'insect',
      name: 'Damselfly',
      price: '500',
      location: 'Flying',
      months: {
        northern: [10, 11, 0, 1],
        southern: [4, 5, 6, 7],
      }
    },{
      type: 'insect',
      name: 'Firefly',
      price: '300',
      location: 'Above Freshwater',
      time: {
        start: '19',
        end: '04'
      },
      months: {
        northern: [5],
        southern: [11],
      }
    },{
      type: 'insect',
      name: 'Mole cricket',
      price: '500',
      location: 'Underground',
      months: {
        northern: [10, 11, 0, 1, 2, 3, 4],
        southern: [4, 5, 6, 7, 8, 9, 10],
      }
    },{
      type: 'insect',
      name: 'Pondskater',
      price: '130',
      location: 'In Rivers',
      time: {
        start: '08',
        end: '19'
      },
      months: {
        northern: [4, 5, 6, 7, 8],
        southern: [10, 11, 0, 1, 2],
      }
    },{
      type: 'insect',
      name: 'Diving Beetle',
      price: '800',
      location: 'In Rivers',
      time: {
        start: '08',
        end: '19'
      },
      months: {
        northern: [4, 5, 6, 7, 8],
        southern: [10, 11, 0, 1, 2],
      }
    },{
      type: 'insect',
      name: 'Giant Water Bug',
      price: '2,000',
      location: 'On Ponds and Rivers',
      time: {
        start: '19',
        end: '08'
      },
      months: {
        northern: [3, 4, 5, 6, 7, 8],
        southern: [0, 1, 2, 9, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Stinkbug',
      price: '120',
      location: 'On Flowers',
      months: {
        northern: [2, 3, 4, 5, 6, 7, 8, 9],
        southern: [8, 9, 10, 11, 0, 1, 2, 3],
      }
    },{
      type: 'insect',
      name: 'Man-faced Stink Bug',
      price: '1,000',
      location: 'On Flowers',
      time: {
        start: '19',
        end: '08'
      },
      months: {
        northern: [2, 3, 4, 5, 6, 7, 8, 9],
        southern: [8, 9, 10, 11, 0, 1, 2, 3],
      }
    },{
      type: 'insect',
      name: 'Ladybug',
      price: '200',
      location: 'On Flowers',
      time: {
        start: '08',
        end: '17'
      },
      months: {
        northern: [2, 3, 4, 5, 9],
        southern: [3, 8, 9, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Tiger Beetle',
      price: '1,500',
      location: 'Flying',
      months: {
        northern: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        southern: [8, 9, 10, 11, 0, 1, 2],
      }
    },{
      type: 'insect',
      name: 'Jewel Beetle',
      price: '2,400',
      location: 'On Trees',
      months: {
        northern: [3, 4, 5, 6, 7],
        southern: [9, 10, 11, 0, 1],
      }
    },{
      type: 'insect',
      name: 'Citrus Long-horned Beetle',
      price: '350',
      location: 'On Tree Stumps',
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Rosalia Batesi Beetle',
      price: '3,000',
      location: 'On Tree Stumps',
      months: {
        northern: [4, 5, 6, 7, 8],
        southern: [10, 11, 0, 1, 2],
      }
    },{
      type: 'insect',
      name: 'Blue Weevil Beetle',
      price: '0',
      location: 'On Trees',
      months: {
        northern: [6, 7],
        southern: [0, 1],
      }
    },{
      type: 'insect',
      name: 'Violin Beetle',
      price: '450',
      location: 'On Trees',
      months: {
        northern: [4, 5, 8, 9, 10],
        southern: [2, 3, 4, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Dung Beetle	',
      price: '0',
      location: 'On Ground',
      months: {
        northern: [11, 0, 1],
        southern: [5, 6, 7],
      }
    },{
      type: 'insect',
      name: 'Earth-boring Dung Beetle',
      price: '300',
      location: 'On Ground',
      months: {
        northern: [6, 7, 8],
        southern: [0, 1, 2],
      }
    },{
      type: 'insect',
      name: 'Scarab Beetle',
      price: '0',
      location: 'On Trees',
      time: {
        start: '23',
        end: '08'
      },
      months: {
        northern: [6, 7],
        southern: [0, 1],
      }
    },{
      type: 'insect',
      name: 'Drone Beetle',
      price: '200',
      location: 'On Trees',
      months: {
        northern: [5, 6, 7],
        southern: [11, 0, 1],
      }
    },{
      type: 'insect',
      name: 'Goliath Beetle',
      price: '0',
      location: 'On Trees',
      time: {
        start: '17',
        end: '08'
      },
      months: {
        northern: [5, 6, 7, 8],
        southern: [11, 0, 1, 2, 3],
      }
    },{
      type: 'insect',
      name: 'Saw Stag',
      price: '0',
      location: 'On Trees',
      months: {
        northern: [6, 7],
        southern: [0, 1],
      }
    },{
      type: 'insect',
      name: 'Miyama Stag',
      price: '0',
      location: 'On Trees',
      months: {
        northern: [6, 7],
        southern: [0, 1],
      }
    },{
      type: 'insect',
      name: 'Giant Stag',
      price: '0	0',
      location: 'On Trees',
      time: {
        start: '23',
        end: '08'
      },
      months: {
        northern: [6, 7],
        southern: [0, 1],
      }
    },{
      type: 'insect',
      name: 'Rainbow Stag',
      price: '0',
      location: 'On Trees',
      time: {
        start: '19',
        end: '08'
      },
      months: {
        northern: [5, 6, 7, 8],
        southern: [11, 0, 1, 2],
      }
    },{
      type: 'insect',
      name: 'Cyclommatus Stag',
      price: '0',
      location: 'On Trees',
      time: {
        start: '17',
        end: '08'
      },
      months: {
        northern: [6, 7],
        southern: [0, 1],
      }
    },{
      type: 'insect',
      name: 'Golden Stag',
      price: '0',
      location: 'On Trees',
      time: {
        start: '17',
        end: '08'
      },
      months: {
        northern: [6, 7],
        southern: [0, 1],
      }
    },{
      type: 'insect',
      name: 'Giraffe Stag',
      price: '0	0',
      location: 'On Trees',
      time: {
        start: '17',
        end: '08'
      },
      months: {
        northern: [6, 7],
        southern: [0, 1],
      }
    },{
      type: 'insect',
      name: 'Horned Dynastid',
      price: '0',
      location: 'On Trees',
      time: {
        start: '17',
        end: '08'
      },
      months: {
        northern: [6, 7],
        southern: [0, 1],
      }
    },{
      type: 'insect',
      name: 'Horned Atlas',
      price: '0',
      location: 'On Trees',
      time: {
        start: '17',
        end: '08'
      },
      months: {
        northern: [6, 7],
        southern: [0, 1],
      }
    },{
      type: 'insect',
      name: 'Horned Elephant',
      price: '0',
      location: 'On Trees',
      time: {
        start: '17',
        end: '08'
      },
      months: {
        northern: [6, 7],
        southern: [0, 1],
      }
    },{
      type: 'insect',
      name: 'Horned Hercules',
      price: '0',
      location: 'On Trees',
      time: {
        start: '17',
        end: '08'
      },
      months: {
        northern: [6, 7],
        southern: [0, 1],
      }
    },{
      type: 'insect',
      name: 'Walking Stick',
      price: '0',
      location: 'On Trees',
      time: {
        start: '17',
        end: '19'
      },
      months: {
        northern: [6, 7, 8, 9, 10],
        southern: [0, 1, 2, 3, 4],
      }
    },{
      type: 'insect',
      name: 'Walking Leaf',
      price: '600',
      location: 'On Ground (Beneath Trees)',
      months: {
        northern: [6, 7, 8],
        southern: [0, 1, 2],
      }
    },{
      type: 'insect',
      name: 'Bagworm',
      price: '600',
      location: 'On Trees',
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Ant',
      price: '80',
      location: 'On Rotten Turnips and Fruit',
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Hermit Crab',
      price: '1,000',
      location: 'On Beach',
      time: {
        start: '19',
        end: '08'
      },
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Wharf Roach',
      price: '200',
      location: 'On Beach (Rocks)',
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Fly',
      price: '0',
      location: 'On Rotten Food and Garbage',
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Mosquito',
      price: '130',
      location: 'Flying',
      time: {
        start: '17',
        end: '04'
      },
      months: {
        northern: [5, 6, 7, 8],
        southern: [11, 0, 1, 2],
      }
    },{
      type: 'insect',
      name: 'Flea',
      price: '70',
      location: 'On Flea-Infested Villagers',
      months: {
        northern: [3, 4, 5, 6, 7, 8, 9, 10],
        southern: [9, 10, 11, 0, 1, 2, 3, 4],
      }
    },{
      type: 'insect',
      name: 'Snail',
      price: '250',
      location: 'Under Rocks',
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Pill Bug',
      price: '250',
      location: 'Under Rocks',
      time: {
        start: '11',
        end: '16'
      },
      months: {
        northern: [8, 9, 10, 11, 0, 1, 2, 3, 4, 5],
        southern: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Centipede',
      price: '300',
      location: 'Under Rocks',
      time: {
        start: '05',
        end: '23'
      },
      months: {
        northern: [8, 9, 10, 11, 0, 1, 2, 3, 4, 5],
        southern: [2, 3, 4, 5, 6, 7, 8, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Spider',
      price: '480',
      location: 'Shaking Trees',
      time: {
        start: '19',
        end: '08'
      },
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }
    },{
      type: 'insect',
      name: 'Tarantula',
      price: '8,000',
      location: 'On Ground',
      time: {
        start: '19',
        end: '04'
      },
      months: {
        northern: [10, 11, 0, 1, 2, 3],
        southern: [4, 5, 6, 7, 8, 9],
      }
    },
    {
      type: 'insect',
      name: 'Scorpion',
      price: '8,000',
      location: 'On Ground',
      time: {
        start: '19',
        end: '04'
      },
      months: {
        northern: [4, 5, 6, 7, 8, 9],
        southern: [10, 11, 0, 1, 2, 3]
      }
    },
    {
      type: 'fish',
      name: 'Bitterling',
      price:' 900',
      location:' River',
      months: {
        northern: [10, 11, 0, 1, 2],
        southern: [4, 5, 6, 7, 8]
      }
    },
    {
      type: 'fish',
      name: 'Pale Chub',
      price:' 160',
      location:' River',
      time: {
        start: '09',
        end: '16'
      },
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    },
    {
      type: 'fish',
      name: 'Crucian Carp',
      price:' 160',
      location:' River',
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    },
    {
      type: 'fish',
      name: 'Dace',
      price:' 240',
      location:' River',
      time: {
        start: '16',
        end: '09'
      },
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    },
    {
      type: 'fish',
      name: 'Carp',
      price:' 300',
      location:' Pond',
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    },
    {
      type: 'fish',
      name: 'Koi',
      price:' 4,000',
      location:' Pond',
      time: {
        start: '16',
        end: '09'
      },
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    },
    {
      type: 'fish',
      name: 'Goldfish',
      price:' 1,300',
      location:' Pond',
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    },
    {
      type: 'fish',
      name: 'Pop-eyed Goldfish',
      price:' 1,300',
      location:' Pond',
      time: {
        start: '09',
        end: '16'
      },
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    },
    {
      type: 'fish',
      name: 'Ranchu Goldfish',
      price:' 4,500',
      location:' Pond',
      time: {
        start: '09',
        end: '16'
      },
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    },
    {
      type: 'fish',
      name: 'Killifish',
      price:' 300',
      location:' Pond',
      months: {
        northern: [3, 4, 5, 6, 7],
        southern: [9, 10, 11, 0, 1]
      }
    },
    {
      type: 'fish',
      name: 'Crawfish',
      price:' 200',
      location:' Pond',
      months: {
        northern: [3, 4, 5, 6, 7, 8],
        southern: [9, 10, 11, 0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Soft-shelled Turtle',
      price:' 3,750',
      location:' River',
      time: {
        start: '16',
        end: '09'
      },
      months: {
        northern: [7, 8],
        southern: [1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Snapping Turtle',
      price:' 5,000',
      location:' River',
      time: {
        start: '21',
        end: '04'
      },
      months: {
        northern: [3, 4, 5, 6, 7, 8, 9],
        southern: [9, 10, 11, 0, 1, 2, 3]
      }
    },
    {
      type: 'fish',
      name: 'Tadpole',
      price:' 100',
      location:' Pond',
      months: {
        northern: [2, 3, 4, 5, 6],
        southern: [8, 9, 10, 11, 0]
      }
    },
    {
      type: 'fish',
      name: 'Frog',
      price:' 0',
      location:' Pond',
      months: {
        northern: [4, 5, 6, 7],
        southern: [10, 11, 0, 1]
      }
    },
    {
      type: 'fish',
      name: 'Freshwater Goby',
      price:' 400',
      location:' River',
      time: {
        start: '16',
        end: '09'
      },
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    },
    {
      type: 'fish',
      name: 'Loach',
      price:' 400',
      location:' River',
      months: {
        northern: [2, 3, 4],
        southern: [8, 9, 10]
      }
    },
    {
      type: 'fish',
      name: 'Catfish',
      price:' 800',
      location:' Pond',
      time: {
        start: '16',
        end: '09'
      },
      months: {
        northern: [4, 5, 6, 7, 8, 9],
        southern: [10, 11, 0, 1, 2, 3]
      }
    },
    {
      type: 'fish',
      name: 'Giant Snakehead',
      price:' 0',
      location:' Pond',
      time: {
        start: '09',
        end: '16'
      },
      months: {
        northern: [5, 6, 7],
        southern: [11, 0, 1]
      }
    },
    {
      type: 'fish',
      name: 'Bluegill',
      price:' 180',
      location:' River',
      time: {
        start: '09',
        end: '16'
      },
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    },
    {
      type: 'fish',
      name: 'Yellow Perch',
      price:' 300',
      location:' River',
      months: {
        northern: [9, 10, 11, 0, 1, 2],
        southern: [3, 4, 5, 6, 7, 8]
      }
    },
    {
      type: 'fish',
      name: 'Black Bass',
      price:' 400',
      location:' River',
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    },
    {
      type: 'fish',
      name: 'Tilapia',
      price:' 800',
      location:' River',
      months: {
        northern: [5, 6, 7, 8, 9],
        southern: [11, 0, 1, 2, 3]
      }
    },
    {
      type: 'fish',
      name: 'Pike',
      price:' 1,800',
      location:' River',
      months: {
        northern: [8, 9, 10, 11],
        southern: [2, 3, 4, 5]
      }
    },
    {
      type: 'fish',
      name: 'Pond Smelt',
      price:' 0,',
      location:' River',
      months: {
        northern: [11, 0, 1],
        southern: [5, 6, 7]
      }
    },
    {
      type: 'fish',
      name: 'Sweetfish',
      price:' 900',
      location:' River',
      months: {
        northern: [6, 7, 8],
        southern: [11, 0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Cherry Salmon',
      price:' 1,000',
      location:' River (Clifftop)',
      time: {
        start: '16',
        end: '09'
      },
      months: {
        northern: [2, 3, 4, 5, 8, 9, 10],
        southern: [2, 3, 4, 8, 9, 10, 11]
      }
    },
    {
      type: 'fish',
      name: 'Char',
      price:' 3,800',
      location:' River (Clifftop)',
      time: {
        start: '16',
        end: '09'
      },
      months: {
        northern: [2, 3, 4, 5, 8, 9, 10],
        southern: [8, 9, 10, 11, 2, 3, 4]
      }
    },
    {
      type: 'fish',
      name: 'Golden Trout',
      price:' 15,000',
      location:' River (Clifftop)',
      time: {
        start: '16',
        end: '09'
      },
      months: {
        northern: [2, 3, 4, 8, 9, 10],
        southern: [8, 9, 10, 2, 3, 4]
      }
    },
    {
      type: 'fish',
      name: 'Stringfish',
      price:' 15,000',
      location:' River (Clifftop)',
      time: {
        start: '16',
        end: '09'
      },
      months: {
        northern: [11, 0, 1, 2],
        southern: [5, 6, 7, 8]
      }
    },
    {
      type: 'fish',
      name: 'Salmon',
      price:' 700',
      location:' River (Mouth)',
      months: {
        northern: [8],
        southern: [2]
      }
    },
    {
      type: 'fish',
      name: 'King Salmon',
      price:' 1,800',
      location:' River (Mouth)',
      months: {
        northern: [8],
        southern: [2]
      }
    },
    {
      type: 'fish',
      name: 'Mitten Crab',
      price:' 2,000',
      location:' River',
      time: {
        start: '16',
        end: '09'
      },
      months: {
        northern: [8, 9, 10],
        southern: [2, 3, 4]
      }
    },
    {
      type: 'fish',
      name: 'Guppy',
      price:' 1,300',
      location:' River',
      time: {
        start: '09',
        end: '16'
      },
      months: {
        northern: [3, 4, 5, 6, 7, 8, 9, 10],
        southern: [9, 10, 0, 1, 2, 3, 4]
      }
    },
    {
      type: 'fish',
      name: 'Nibble Fish',
      price:' 1,500',
      location:' River',
      time: {
        start: '09',
        end: '16'
      },
      months: {
        northern: [4, 5, 6, 7, 8],
        southern: [10, 11, 0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Angelfish',
      price:' 3,000',
      location:' River',
      time: {
        start: '16',
        end: '09'
      },
      months: {
        northern: [4, 5, 6, 7, 8, 9],
        southern: [10, 11, 0, 1, 2, 3]
      }
    },
    {
      type: 'fish',
      name: 'Betta',
      price:' 2,500',
      location:' River',
      time: {
        start: '09',
        end: '16'
      },
      months: {
        northern: [4, 5, 6, 7, 8, 9],
        southern: [10, 11, 0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Neon Tetra',
      price:' 500',
      location:' River',
      time: {
        start: '09',
        end: '16'
      },
      months: {
        northern: [3, 4, 5, 6, 7, 8, 9, 10],
        southern: [9, 10, 11, 0, 1, 2, 3, 4]
      }
    },
    {
      type: 'fish',
      name: 'Rainbowfish',
      price:' 800',
      location:' River',
      time: {
        start: '09',
        end: '16'
      },
      months: {
        northern: [4, 5, 6, 7, 8, 9],
        southern: [10, 11, 0, 1, 2, 3]
      }
    },
    {
      type: 'fish',
      name: 'Piranha',
      price:' 2,500',
      location:' River',
      time: {
        start: '09',
        end: '16'
      },
      months: {
        northern: [5, 6, 7, 8],
        southern: [11, 0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Arowana',
      price:' 10,000',
      location:' River',
      time: {
        start: '16',
        end: '09'
      },
      months: {
        northern: [5, 6, 7, 8],
        southern: [11, 0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Dorado',
      price:' 15,000',
      location:' River',
      time: {
        start: '04',
        end: '21'
      },
      months: {
        northern: [5, 6, 7, 8],
        southern: [11, 0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Gar',
      price:' 6,000',
      location:' Pond',
      time: {
        start: '16',
        end: '09'
      },
      months: {
        northern: [5, 6, 7, 8],
        southern: [11, 0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Arapaima',
      price:' 10,000',
      location:' River',
      time: {
        start: '16',
        end: '09'
      },
      months: {
        northern: [5, 6, 7, 8],
        southern: [11, 0, 1, 2, 3]
      }
    },
    {
      type: 'fish',
      name: 'Saddled Bichir',
      price:' 4,000',
      location:' River',
      time: {
        start: '21',
        end: '04'
      },
      months: {
        northern: [5, 6, 7, 8],
        southern: [11, 0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Sturgeon',
      price:' 10,000',
      location:' River (Mouth)',
      months: {
        northern: [8, 9, 10, 11, 0, 1, 2],
        southern: [2, 3, 4, 5, 6, 7, 8]
      }
    },
    {
      type: 'fish',
      name: 'Sea Butterfly',
      price:' 1,000',
      location:' Sea',
      months: {
        northern: [11, 0, 1, 2],
        southern: [5, 6, 7, 8]
      }
    },
    {
      type: 'fish',
      name: 'Seahorse',
      price:' 1,100',
      location:' Sea',
      months: {
        northern: [3, 4, 5, 6, 7, 8, 9, 10],
        southern: [9, 10, 0, 1, 2, 3, 4]
      }
    },
    {
      type: 'fish',
      name: 'Clownfish',
      price:' 650',
      location:' Oeacean',
      months: {
        northern: [3, 4, 5, 6, 7, 8],
        southern: [9, 10, 11, 0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Surgeonfish',
      price:' 1,000',
      location:' Sea',
      months: {
        northern: [3, 4, 5, 6, 7, 8],
        southern: [9, 10, 11, 0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Butterfly Fish',
      price:' 1,000',
      location:' Sea',
      months: {
        northern: [3, 4, 5, 6, 7, 8],
        southern: [9, 10, 11, 0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Napoleonfish',
      price:' 10,000',
      location:' Sea',
      time: {
        start: '04',
        end: '21'
      },
      months: {
        northern: [6, 7],
        southern: [0, 1]
      }
    },
    {
      type: 'fish',
      name: 'Zebra Turkeyfish',
      price:' 500',
      location:' Sea',
      months: {
        northern: [3, 4, 5, 6, 7, 8, 9, 10],
        southern: [9, 10, 11, 0, 1, 2, 3, 4]
      }
    },
    {
      type: 'fish',
      name: 'Blowfish',
      price:' 5,000',
      location:' Sea',
      time: {
        start: '21',
        end: '04'
      },
      months: {
        northern: [10, 11, 0, 1],
        southern: [4, 5, 6, 7]
      }
    },
    {
      type: 'fish',
      name: 'Puffer Fish',
      price:' 250',
      location:' Sea',
      months: {
        northern: [6, 7, 8],
        southern: [0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Anchovy',
      price:' 200',
      location:' Sea',
      time: {
        start: '04',
        end: '21'
      },
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    },
    {
      type: 'fish',
      name: 'Horse Mackerel',
      price:' 150',
      location:' Sea',
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    },
    {
      type: 'fish',
      name: 'Barred Knifejaw',
      price:' 5,000',
      location:' Sea',
      months: {
        northern: [2, 3, 4, 5, 6, 7, 8, 9, 10],
        southern: [8, 9, 10, 11, 0, 1, 2, 3, 4]
      }
    },
    {
      type: 'fish',
      name: 'Sea Bass',
      price:' 400',
      location:' Sea',
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    },
    {
      type: 'fish',
      name: 'Red Snapper',
      price:' 3,000',
      location:' Sea',
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    },
    {
      type: 'fish',
      name: 'Dab',
      price:' 300',
      location:' Sea',
      months: {
        northern: [9, 10, 11, 0, 1, 2, 3],
        southern: [7, 8, 9]
      }
    },
    {
      type: 'fish',
      name: 'Olive Flounder',
      price:' 800',
      location:' Sea',
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    },
    {
      type: 'fish',
      name: 'Squid',
      price:' 500',
      location:' Sea',
      months: {
        northern: [11, 0, 1, 2, 3, 4, 5, 6, 7,],
        southern: [5, 6, 7, 8, 9, 10, 11, 0, 1]
      }
    },
    {
      type: 'fish',
      name: 'Moray Eel',
      price:' 2,000',
      location:' Sea',
      months: {
        northern: [7, 8, 9],
        southern: [1, 2, 3]
      }
    },
    {
      type: 'fish',
      name: 'Ribbon Eel',
      price:' 600',
      location:' Sea',
      months: {
        northern: [5, 6, 7, 8, 9],
        southern: [11, 0, 1, 2, 3]
      }
    },
    {
      type: 'fish',
      name: 'Tuna',
      price:' 7,000',
      location:' Pier',
      months: {
        northern: [10, 11, 0, 1, 2, 3],
        southern: [4, 5, 6, 7, 8, 9]
      }
    },
    {
      type: 'fish',
      name: 'Blue Marlin',
      price:' 10,000',
      location:' Pier',
      months: {
        northern: [10, 11, 0, 1, 2, 3, 6, 7, 8,],
        southern: [0, 1, 2, 4, 5, 6, 7, 8, 9]
      }
    },
    {
      type: 'fish',
      name: 'Giant Trevally',
      price:' 4,500',
      location:' Pier',
      months: {
        northern: [4, 5, 6, 7, 8],
        southern: [10, 11, 0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Mahi-mahi',
      price:' 6,000',
      location:' Pier',
      months: {
        northern: [4, 5, 6, 7, 8, 9],
        southern: [10, 11, 0, 1, 2, 3]
      }
    },
    {
      type: 'fish',
      name: 'Ocean Sunfish',
      price:' 4,000',
      location:' Sea',
      time: {
        start: '04',
        end: '21'
      },
      months: {
        northern: [6, 7, 8],
        southern: [0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Ray',
      price:' 3,000',
      location:' Sea',
      time: {
        start: '04',
        end: '21'
      },
      months: {
        northern: [7, 8, 9, 10],
        southern: [1, 2, 3, 4]
      }
    },
    {
      type: 'fish',
      name: 'Saw Shark',
      price:' 12,000',
      location:' Sea',
      time: {
        start: '16',
        end: '09'
      },
      months: {
        northern: [5, 6, 7, 8],
        southern: [11, 0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Hammerhaead Shark',
      price:' 8,000',
      location:' Sea',
      time: {
        start: '16',
        end: '09'
      },
      months: {
        northern: [5, 6, 7, 8],
        southern: [11, 0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Great White Shark',
      price:' 15,000',
      location:' Sea',
      time: {
        start: '16',
        end: '09'
      },
      months: {
        northern: [5, 6, 7, 8],
        southern: [11, 0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Whale Shark',
      price:' 13,000',
      location:' Sea',
      months: {
        northern: [5, 6, 7, 8],
        southern: [11, 0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Suckerfish',
      price:' 1,500',
      location:' Sea',
      months: {
        northern: [5, 6, 7, 8],
        southern: [11, 0, 1, 2]
      }
    },
    {
      type: 'fish',
      name: 'Football Fish',
      price:' 2,500',
      location:' Sea',
      time: {
        start: '16',
        end: '09'
      },
      months: {
        northern: [10, 11, 0, 1, 2],
        southern: [4, 5, 6, 7, 8]
      }
    },
    {
      type: 'fish',
      name: 'Oarfish',
      price:' 9,000',
      location:' Sea',
      months: {
        northern: [11, 0, 1, 2, 3, 4],
        southern: [5, 6, 7, 8, 9, 10]
      }
    },
    {
      type: 'fish',
      name: 'Barreleye',
      price:' 15,000',
      location:' Sea',
      time: {
        start: '21',
        end: '04'
      },
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    },
    {
      type: 'fish',
      name: 'Coelacanth',
      price:' 15,000',
      location:' Sea (Rainy Days)',
      months: {
        northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    }
  ]
}
});
