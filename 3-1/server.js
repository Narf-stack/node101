'use strict';

// import the needed node_modules.
const express = require('express');
const morgan = require('morgan');

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan('tiny'))

  // Any requests for static files will go into the public folder
  .use(express.static('public'))

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here π
  .get('/cat-message', (req, res) => {
    const message = { author: 'cat', text: 'Meow' };
    const randomTime = Math.floor(Math.random() * 3000);
    setTimeout(() => {
      res.status(200).json({ status: 200, message });
    }, randomTime);
  })

  .get('/monkey-message', (req, res) => {
    const messages = [
      'Donβt monkey around with me.',
      'If you pay peanuts, you get monkeys.',
      'I fling π© at you!',
      'π',
      'π',
      'π',
    ];
    const randomMess = Math.floor(Math.random() * months.length);
    const message = { author: 'monkey', text: messages[randomMess] };
    // const randomTime = 200;
    // console.log(message)
    // setTimeout(() => {
      res.status(200).json({ status: 200, message });
    // }, randomTime);
  })

  .get('/parrot-message', (req, res) => {
    const message = { author: 'parrot', text: `${req.query.text}` };
    console.log(message)
    const randomTime = 200;

    setTimeout(() => {
      res.status(200).json({ status: 200, message });
    }, randomTime);
  })

  .get('/bot-message', (req, res) => {

    const getBotMessage = (text) => {
      const commonGreetings = ['hi', 'hello', 'howdy'];
      let botMsg = '';
      commonGreetings.forEach((greeting) => {
        if (text.toLowerCase().includes(greeting)) {
          botMsg = "Bzzt Hello!";
        } else {
          botMsg = "Bzzt "+ text;
        }
      })
      return botMsg;
    };


    const message = { author: 'bot', text: `${getBotMessage(req.query.text)}` };
    const randomTime = 200;

    setTimeout(() => {
      res.status(200).json({ status: 200, message });
    }, randomTime);
  })

  // add new endpoints here βοΈ
  // ---------------------------------
  // Nothing to modify below this line

  // this serves up the homepage
  .get('/', (req, res) => {
    res
      .status(200)
      .json({ status: 200, message: "This is the homepage... it's empty :(" });
  })

  // this is our catch all endpoint. If a user navigates to any endpoint that is not
  // defined above, they get to see our 404 page.
  .get('*', (req, res) => {
    res
      .status(404)
      .json({
        status: 404,
        message: 'This is obviously not the page you are looking for.',
      });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
