const assert = require('assert');
const filter = require('../index');

const movies = [
  {
    _id: 'e17fc4ee-061c-4037-8f8c-44dd88ffe98b',
    name: 'Vikram',
    directedBy: 'Lokesh Kanagaraj',
    imdbRating: 8.4,
    year: '2022',
    characters: [
      {
        _actorId: '727c2c16-796f-4232-88d9-b5ac8da8b222',
        _characterId: 'c5f985e8-2080-429b-8db1-db33ea98df2d',
        name: 'Vikram',
        occupation: 'Black-Ops Squad Commander',
        playedBy: 'Kamal Haasan',
      },
      {
        _actorId: '9503b66d-f5be-4cf7-b664-8f969e901da4',
        _characterId: '91320073-997e-4b7b-821c-cd50d0ceabaf',
        name: 'Sandhanam',
        occupation: 'Runs the crime syndicate "Vetti Vagaiyara"',
        playedBy: 'Vijay Sethupathi',
      },
      {
        _actorId: 'f41331ce-7c09-4e2d-8023-2be3fcbf36ff',
        _characterId: 'c0dbef3f-2a9b-44d9-9c18-4834870bcadd',
        name: 'Amar',
        occupation: 'Head of Black-Ops team',
        playedBy: 'Fahadh Faasil',
      },
    ],
  },
  {
    _id: '2b3b611f-6a34-4425-8915-ac0317ac89a6',
    name: 'Vishwaroopam',
    directedBy: 'Kamal Haasan',
    imdbRating: 7.9,
    year: '2013',
    characters: [
      {
        _actorId: '727c2c16-796f-4232-88d9-b5ac8da8b222',
        _characterId: '378d4583-5fa1-43a6-ad35-09ef28f476a5',
        name: 'Wizam Ahmad Kashmiri',
        occupation: 'Agent of Research and Analysis Wing',
        playedBy: 'Kamal Haasan',
      },
      {
        _actorId: 'f444fe48-382f-4113-ab82-f5ec8cacd95a',
        _characterId: '6709364e-5e12-4010-9bdc-f2ee489b8899',
        name: 'Omar',
        occupation: 'Extremist',
        playedBy: 'Rahul Bose',
      },
      {
        _actorId: 'a086017-376d-4eeb-90fb-ae693490d362',
        _characterId: 'b5968b64-a856-43c2-a46b-b28bd9b6d94e',
        name: 'Nirupama Vishwanath',
        occupation: 'Oncologist',
        playedBy: 'Pooja Kumar',
      },
    ],
  },
];
const moviesFiltered = [
  {
    name: 'Vikram',
    directedBy: 'Lokesh Kanagaraj',
    imdbRating: 8.4,
    year: '2022',
    characters: [
      {
        _characterId: 'c5f985e8-2080-429b-8db1-db33ea98df2d',
        name: 'Vikram',
        occupation: 'Black-Ops Squad Commander',
        playedBy: 'Kamal Haasan',
      },
      {
        _characterId: '91320073-997e-4b7b-821c-cd50d0ceabaf',
        name: 'Sandhanam',
        occupation: 'Runs the crime syndicate "Vetti Vagaiyara"',
        playedBy: 'Vijay Sethupathi',
      },
      {
        _characterId: 'c0dbef3f-2a9b-44d9-9c18-4834870bcadd',
        name: 'Amar',
        occupation: 'Head of Black-Ops team',
        playedBy: 'Fahadh Faasil',
      },
    ],
  },
  {
    name: 'Vishwaroopam',
    directedBy: 'Kamal Haasan',
    imdbRating: 7.9,
    year: '2013',
    characters: [
      {
        _characterId: '378d4583-5fa1-43a6-ad35-09ef28f476a5',
        name: 'Wizam Ahmad Kashmiri',
        occupation: 'Agent of Research and Analysis Wing',
        playedBy: 'Kamal Haasan',
      },
      {
        _characterId: '6709364e-5e12-4010-9bdc-f2ee489b8899',
        name: 'Omar',
        occupation: 'Extremist',
        playedBy: 'Rahul Bose',
      },
      {
        _characterId: 'b5968b64-a856-43c2-a46b-b28bd9b6d94e',
        name: 'Nirupama Vishwanath',
        occupation: 'Oncologist',
        playedBy: 'Pooja Kumar',
      },
    ],
  },
];
const keysToRemove = ['_id', '_actorId'];

test(
  'Should return an error if the passed parameter is not an object',
  async () => {
    expect(() => (
      filter('{ movies: [] }', keysToRemove)
    )).toThrow();
  },
);

test(
  `After the keys specified in 'keysToRemove' are removed from 'movies',
  the result object should match with 'moviesFiltered'`,
  async () => {
    expect(() => (
      assert.deepStrictEqual(filter(movies, keysToRemove), moviesFiltered)
    )).not.toThrow();
  },
);
