module.exports = {
  settings: {
    runtime: {
      applicationName: 'Calico',
      port: 3030,
      serve: ['public', 'build/client'],
      favicon: 'favicon.png',
    },
    build: {
      routes: 'src/routes.js',
    },
    dev: {
      browsersync: {
        options: {
          open: true,
        },
      },
    },
  },
};
