'use strict';

module.exports = {
  client: {
    service: {
      url: 'http://localhost:8081/v1/graphql',
    },
    includes: ['./src/queries/*.graphql'],
  },
};
