'use strict';

describe('yeap_types.makeId', ()=>{

    const assert = require('assert');
    const re = (module)=>{ return require('../' + module); }
    let api;

    before(()=>{
        api = {};
        api = {};
        api.types = re('index');
    });

    it('Single id.', ()=>{
        const id = api.types.makeId();
        assert.equal(true, api.types.hash32.test(id));
    });

    it('Many ids.', ()=>{
        const id1 = api.types.makeId();
        const id2 = api.types.makeId();
        const id3 = api.types.makeId();
        assert.equal(true, api.types.hash32.test(id1));
        assert.equal(true, api.types.hash32.test(id2));
        assert.equal(true, api.types.hash32.test(id3));
        assert.notEqual(id1, id2);
        assert.notEqual(id1, id3);
    });

});

