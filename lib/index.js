'use strict';

const assert = require('assert'),
      re = (module)=>{ return require('./' + module); }

let api = {};
api = re('types')(api);
api.MD5 = re('MD5')(api);
api.makeId = re('makeId')(api);

module.exports = api;

