'use strict';

const assert = require('assert'),
      re = (module)=>{ return require('./' + module); }

const api = {}
module.exports = api;

api.types = re('types')(api);
api.Md5 = re('Md5')(api);
api.makeId = re('makeId')(api);

