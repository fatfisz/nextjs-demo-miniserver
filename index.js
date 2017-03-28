const http = require('http');


const responses = new Map([
  ['/blog', [
    { id: 'first', title: 'The first page' },
    { id: 'second', title: 'The second page' },
    { id: 'third', title: 'The third page' },
    { id: 'fourth', title: 'The fourth page' },
    { id: 'fifth', title: 'The fifth page' },
  ]],

  ['/blog/first', {
    title: 'The first page',
    text: 'Apple pie donut cheesecake. Cake tiramisu danish macaroon candy. Brownie bear claw fruitcake jelly oat cake. Pastry pastry pastry lemon drops pudding marshmallow.',
  }],

  ['/blog/second', {
    title: 'The second page',
    text: 'Liquorice donut biscuit powder gummi bears halvah jujubes gummies. Soufflé fruitcake pudding donut danish liquorice lemon drops donut wafer. Tart candy canes fruitcake wafer soufflé pie candy chocolate cake powder.',
  }],

  ['/blog/third', {
    title: 'The third page',
    text: 'Bonbon gummies muffin. Liquorice croissant soufflé marshmallow marzipan lollipop sweet lollipop. Topping bear claw jelly beans jelly apple pie jelly-o.',
  }],

  ['/blog/fourth', {
    title: 'The fourth page',
    text: 'Powder liquorice powder bear claw bonbon cupcake gummi bears. Macaroon macaroon powder. Toffee danish pastry carrot cake powder wafer dragée.',
  }],

  ['/blog/fifth', {
    title: 'The fifth page',
    text: 'Oat cake jujubes muffin chocolate. Bear claw topping croissant tiramisu chocolate bar bonbon sweet roll chupa chups bear claw. Icing chupa chups cake tart.',
  }],
]);


http
  .createServer((req, res) => {
    if (responses.has(req.url)) {
      const body = responses.get(req.url);

      res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
      });

      res.write(JSON.stringify(body));
    } else {
      res.writeHead(404);
      res.write('Not found');
    }

    setTimeout(() => {
      res.end();
    }, Math.floor(Math.random() * 3) + 0.5);
  })
  .listen(4000);
