'use strict';

describe('yeap_types.MD5', ()=>{

    const assert = require('assert');
    let api;

    before(()=>{
        const re = (module)=>{ return require('../' + module); }
        api = {};
        api.types = re('index');
    });


    it('Empty string', ()=>{
        const h = api.types.MD5('');
        assert.equal(h, 'd41d8cd98f00b204e9800998ecf8427e');
        const h2 = api.types.MD5('');
        assert.equal(h, h2);
    });

    it('A', ()=>{
        const h = api.types.MD5('A');
        assert.equal(h, '7fc56270e7a70fa81a5935b72eacbe29');
        const h2 = api.types.MD5('A');
        assert.equal(h, h2);
    });

    it('a', ()=>{
        const h = api.types.MD5('a');
        assert.equal(h, '0cc175b9c0f1b6a831c399e269772661');
        const h2 = api.types.MD5('a');
        assert.equal(h, h2);
    });

});

