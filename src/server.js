// eslint-disable-next-line import/no-extraneous-dependencies
const Hapi = require('@hapi/hapi');
// eslint-disable-next-line import/extensions
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5001,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route(routes);
  await server.start();
  console.info(`Server berjalan pada ${server.info.uri}`);
};

init();
