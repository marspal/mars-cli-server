'use strict';

const Mongodb = require('@pick-star/cli-mongodb');
const {mongoDbUrl, mongoDbName} = require('../../config/db');

function mongo() {
    return new Mongodb(mongoDbUrl, mongoDbName);
}

module.exports = mongo;
