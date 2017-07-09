// https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
const express = require('express')
const jwt = require('express-jwt')
const jwks = require('jwks-rsa')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const serverConfig = require('./config')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect(serverConfig.dburl)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected to database.')
})

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: serverConfig.jwksUri,
  }),
  // This is the identifier we set when we created the API
  audience: serverConfig.audience,
  issuer: serverConfig.audience,
  algorithms: ['RS256']
})

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  username: String,
})

const Post = mongoose.model('Post', postSchema)

app.post('/api/post', (req, res) => {
  const reqData = req.body
  console.log(req.body)
  console.log(req)
  /*
  var newPost = new Post({ title: 'Silence',
                           content: 'Random stuff here',
                           username: 'Beans'  });
  */
  const newPost = new Post({
    title: reqData.title,
    content: reqData.content,
    username: reqData.username
  })
  console.log(newPost)

  newPost.save(function(err, postResult) {
    if (err) return console.error(err)

    console.log('Post created successfully.')
    res.send('Good')
    // fluffy.speak();
  })
})

app.get('/api/blog', (req, res) => {
  console.log(req)
  const posts = [
    {
      title: 'Testing 1',
      content:
        'dlkjkfldsksjf fdlfjdlkkjfldf df dljfdsjf fd fdlf;dssfjdsslklkf df jdslfjdslfjldsjf dfl;djf',
      user: 'beans'
    },
    {
      title: 'Testing 2',
      content:
        'dlkjkfldsksjf fdlfjdlkkjfldf df dljfdsjf fd fdlf;dssfjdsslklkf df jdslfjdslfjldsjf dfl;djf',
      user: 'beans'
    },
    {
      title: 'Testing 3',
      content:
        'dlkjkfldsksjf fdlfjdlkkjfldf df dljfdsjf fd fdlf;dssfjdsslklkf df jdslfjdslfjldsjf dfl;djf',
      user: 'beans'
    },
    {
      title: 'Testing 3',
      content:
        'dlkjkfldsksjf fdlfjdlkkjfldf df dljfdsjf fd fdlf;dssfjdsslklkf df jdslfjdslfjldsjf dfl;djf',
      user: 'beans'
    },
    {
      title: 'Testing 4',
      content:
        'dlkjkfldsksjf fdlfjdlkkjfldf df dljfdsjf fd fdlf;dssfjdsslklkf df jdslfjdslfjldsjf dfl;djf',
      user: 'beans'
    }
  ]

  res.json(posts)
})

app.get('/api/private/profile', authCheck, (req, res) => {
  const users = [
    {
      username: 'beans',
      fullName: 'Beans Rice',
      hobbies: 'programming',
    },
    /*
    {
      id: 2112,
      name: 'Startup Vegas',
      sponsor: 'Bill Gates',
      seedFund: '20M'
    },
    {
      id: 2113,
      name: 'Startup Addis-Ababa',
      sponsor: 'Aliko Dangote',
      seedFund: '8M'
    },
    {
      id: 2114,
      name: 'Startup Abuja',
      sponsor: 'Femi Otedola',
      seedFund: '5M'
    },
    {
      id: 2115,
      name: 'Startup Paris',
      sponsor: 'Jeff Bezos',
      seedFund: '1.6M',
    },
    {
      id: 2116,
      name: 'Startup London',
      sponsor: 'Dave McClure',
      seedFund: '1M',
    },
    {
      id: 2117,
      name: 'Startup Oslo',
      sponsor: 'Paul Graham',
      seedFund: '2M',
    },
    {
      id: 2118,
      name: 'Startup Bangkok',
      sponsor: 'Jeff Clavier',
      seedFund: '5M',
    },
    {
      id: 2119,
      name: 'Startup Seoul',
      sponsor: 'Paul Buchheit',
      seedFund: '4M',
    }, */
  ]

  res.json(users)
})

/*
app.get('/api/battles/public', (req, res) => {
  let publicBattles = [
  {
    id: 1111,
    name: 'Startup NYC',
    sponsor: 'Alec Pesola',
    seedFund: '500k'
  },
  {
    id: 1112,
    name: 'Startup Ontario',
    sponsor: 'Ryan Chenkie',
    seedFund: '750k'
  },
  {
    id: 1113,
    name: 'Startup Uttah',
    sponsor: 'Diego Poza',
    seedFund: '550k'
  },
  {
    id: 1114,
    name: 'Startup Australia',
    sponsor: 'Eugene Kogan',
    seedFund: '500k'
  },
  {
    id: 1115,
    name: 'Startup Buenos Aires',
    sponsor: 'Sebastian Peyrott',
    seedFund: '600k'
  },
  {
    id: 1116,
    name: 'Startup Lagos',
    sponsor: 'Prosper Otemuyiwa',
    seedFund: '650k'
  },
  {
    id: 1117,
    name: 'Startup Oslo',
    sponsor: 'Mark Fish',
    seedFund: '600k'
  },
  {
    id: 1118,
    name: 'Startup Calabar',
    sponsor: 'Christian Nwamba',
    seedFund: '800k'
  },
  {
    id: 1119,
    name: 'Startup Nairobi',
    sponsor: 'Aniedi Ubong',
    seedFund: '700k'
  }];

  res.json(publicBattles);
})

app.get('/api/battles/private', authCheck, (req,res) => {
  let privateBattles = [
  {
    id: 2111,
    name: 'Startup Seattle',
    sponsor: 'Mark Zuckerberg',
    seedFund: '10M'
  },
  {
    id: 2112,
    name: 'Startup Vegas',
    sponsor: 'Bill Gates',
    seedFund: '20M'
  },
  {
    id: 2113,
    name: 'Startup Addis-Ababa',
    sponsor: 'Aliko Dangote',
    seedFund: '8M'
  },
  {
    id: 2114,
    name: 'Startup Abuja',
    sponsor: 'Femi Otedola',
    seedFund: '5M'
  },
  {
    id: 2115,
    name: 'Startup Paris',
    sponsor: 'Jeff Bezos',
    seedFund: '1.6M'
  },
  {
    id: 2116,
    name: 'Startup London',
    sponsor: 'Dave McClure',
    seedFund: '1M'
  },
  {
    id: 2117,
    name: 'Startup Oslo',
    sponsor: 'Paul Graham',
    seedFund: '2M'
  },
  {
    id: 2118,
    name: 'Startup Bangkok',
    sponsor: 'Jeff Clavier',
    seedFund: '5M'
  },
  {
    id: 2119,
    name: 'Startup Seoul',
    sponsor: 'Paul Buchheit',
    seedFund: '4M'
  }];

  res.json(privateBattles);
})
*/
app.listen(3333)
console.log('Listening on localhost:3333')
