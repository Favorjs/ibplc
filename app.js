
var express = require('express');
var app = express();
const bodyParser = require('body-parser');

//route to controllers

app.use(express.json());
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const holders = require("./models/holders");
const { Script } = require('vm');
app.post('/getDetails', async (req, res) => {
 
    const Name  = req.body.Name;

    // To Ensure 'Name' is present in the request body
    // if (!Name) {
    //   return res.status(400).json({ error: "Name is required in the request body" });
    // }
   // Find records based on the provided 'Name'
   try {
    const getHolders = await holders.findOne({
      where: {
       Name:Name
      },
  
    });
    
    // Check if any records were found
    if (getHolders) {
      // Render a page with user details
      res.render('getDetails', {getHolders});
    } else {
      // Render a page indicating that the user was not found
      res.render('not-found', { Name});
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/getAllNames', async (req, res) => {
  try {
    const getAllHolders = await holders.findAll();
    res.json( getAllHolders);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// Example route to get objects from the database
// app.get('localhost3000/getAllNames', (req, res) => {
//   // Replace 'your_table' with the actual table name
//   const query = 'SELECT * FROM holders';

//   connection.query(query, (err, results) => {
//     if (err) {
//       console.error('Error executing MySQL query:', err);
//       res.status(500).send('Internal Server Error');
//       return;
//     }

//     res.json(results);
//   });
// });



app.set('view engine', 'ejs');
  app.set('views', __dirname + '/views');






  // confirm the connection
  const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server started at port ${port}`);

})

module.exports = app;