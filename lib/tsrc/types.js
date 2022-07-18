'use strict';

describe('yeap_types.types', ()=>{

    const assert = require('assert');
    let api;

    before(()=>{
        const re = (module)=>{ return require('../' + module); }
        api = {};
        api.types = re('types')(api);
    });

    describe('lib.types.hash4', ()=>{
        it('Success cases', ()=>{
            assert.equal(true, api.types.hash4.test('0000'));
            assert.equal(true, api.types.hash4.test('9999'));
        });

        it('Success cases', ()=>{
            assert.equal(true, api.types.hash4.test('aaaa'));
            assert.equal(true, api.types.hash4.test('AAAA'));
        });

        it('Success cases', ()=>{
            assert.equal(true, api.types.hash4.test('ffff'));
            assert.equal(true, api.types.hash4.test('FFFF'));
        });

        it('Failure cases', ()=>{
            assert.equal(false, api.types.hash4.test(''));
            assert.equal(false, api.types.hash4.test('000'));
            assert.equal(false, api.types.hash4.test('00000'));
            assert.equal(false, api.types.hash4.test('0000a'));
        });
    });

    describe('lib.types.hash8', ()=>{
        it('Success cases', ()=>{
            assert.equal(true, api.types.hash8.test('00000000'));
            assert.equal(true, api.types.hash8.test('99999999'));
        });

        it('Success cases', ()=>{
            assert.equal(true, api.types.hash8.test('aaaaaaaa'));
            assert.equal(true, api.types.hash8.test('AAAAAAAA'));
        });

        it('Success cases', ()=>{
            assert.equal(true, api.types.hash8.test('ffffffff'));
            assert.equal(true, api.types.hash8.test('FFFFFFFF'));
        });

        it('Failure cases', ()=>{
            assert.equal(false, api.types.hash8.test(''));
            assert.equal(false, api.types.hash8.test('0000000'));
            assert.equal(false, api.types.hash8.test('000000000'));
            assert.equal(false, api.types.hash8.test('00000000a'));
        });
    });

    describe('lib.types.hash16', ()=>{
        it('Success cases', ()=>{
            assert.equal(true, api.types.hash16.test('0000000000000000'));
            assert.equal(true, api.types.hash16.test('9999999999999999'));
        });

        it('Success cases', ()=>{
            assert.equal(true, api.types.hash16.test('aaaaaaaaaaaaaaaa'));
            assert.equal(true, api.types.hash16.test('AAAAAAAAAAAAAAAA'));
        });

        it('Success cases', ()=>{
            assert.equal(true, api.types.hash16.test('ffffffffffffffff'));
            assert.equal(true, api.types.hash16.test('FFFFFFFFFFFFFFFF'));
        });

        it('Failure cases', ()=>{
            assert.equal(false, api.types.hash16.test(''));
            assert.equal(false, api.types.hash16.test('000000000000000'));
            assert.equal(false, api.types.hash16.test('00000000000000000'));
            assert.equal(false, api.types.hash16.test('0000000000000000a'));
        });
    });

    describe('lib.types.hash32', ()=>{
        it('Success cases', ()=>{
            assert.equal(true, api.types.hash32.test('00000000000000000000000000000000'));
            assert.equal(true, api.types.hash32.test('99999999999999999999999999999999'));
        });

        it('Success cases', ()=>{
            assert.equal(true, api.types.hash32.test('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));
            assert.equal(true, api.types.hash32.test('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'));
        });

        it('Success cases', ()=>{
            assert.equal(true, api.types.hash32.test('ffffffffffffffffffffffffffffffff'));
            assert.equal(true, api.types.hash32.test('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF'));
        });

        it('Failure cases', ()=>{
            assert.equal(false, api.types.hash32.test(''));
            assert.equal(false, api.types.hash32.test('0000000000000000000000000000000'));
            assert.equal(false, api.types.hash32.test('000000000000000000000000000000000'));
            assert.equal(false, api.types.hash32.test('00000000000000000000000000000000a'));
        });
    });

    describe('lib.types.text8max', ()=>{
        it('Success cases', ()=>{
            assert.equal(true, api.types.text8max.test('a'));
            assert.equal(true, api.types.text8max.test('AA'));
            assert.equal(true, api.types.text8max.test('fff'));
            assert.equal(true, api.types.text8max.test('FFFF'));
            assert.equal(true, api.types.text8max.test('yyyyyyy'));
            assert.equal(true, api.types.text8max.test('YYYYYYY'));
            assert.equal(true, api.types.text8max.test('ffffffff'));
            assert.equal(true, api.types.text8max.test('FFFFFFFF'));
        });

        it('Failure cases', ()=>{
            assert.equal(true, api.types.text8max.test('a'));
            assert.equal(true, api.types.text8max.test('AA'));
            assert.equal(true, api.types.text8max.test('fff'));
            assert.equal(true, api.types.text8max.test('FFFF'));
            assert.equal(true, api.types.text8max.test('yyyyyyy'));
            assert.equal(true, api.types.text8max.test('YYYYYYY'));
            assert.equal(true, api.types.text8max.test('ffffffff'));
            assert.equal(true, api.types.text8max.test('FFFFFFFF'));
        });
    });

    describe('lib.types.Name', ()=>{
        it('Success cases', ()=>{
            assert.equal(true, api.types.Name.test('AA'));
            assert.equal(true, api.types.Name.test('0A'));
            assert.equal(true, api.types.Name.test('A0'));
            assert.equal(true, api.types.Name.test('aaa'));
            assert.equal(true, api.types.Name.test('FFFF'));
            assert.equal(true, api.types.Name.test('yyy-yyyy'));
            assert.equal(true, api.types.Name.test('YYY_YYYY'));
            assert.equal(true, api.types.Name.test('fff.fffff'));
            assert.equal(true, api.types.Name.test('FFFFFFFF'));
            assert.equal(true, api.types.Name.test('aaaabbbbyyyyzzzz'));
            assert.equal(true, api.types.Name.test('0aaabbbbyyyyzzzz'));
            assert.equal(true, api.types.Name.test('aaaabbbbyyyyzzz9'));
            assert.equal(true, api.types.Name.test('0aaabbbbyyyyzzz9'));
            assert.equal(true, api.types.Name.test('00000'));
        });

        it('Failure cases', ()=>{
            assert.equal(false, api.types.Name.test('A'));
            assert.equal(false, api.types.Name.test('Abcdefghigklmnxyz'));
        });
    });

    describe('lib.types.uint', ()=>{
        it('Success cases', ()=>{
            assert.equal(true, api.types.uint.test('0'));
            assert.equal(true, api.types.uint.test('1'));
            assert.equal(true, api.types.uint.test('0123456789012345'));
        });

        it('Failure cases', ()=>{
            assert.equal(false, api.types.uint.test(''));
            assert.equal(false, api.types.uint.test('a'));
            assert.equal(false, api.types.uint.test('-1'));
            assert.equal(false, api.types.uint.test('01234567890123456'));
        });
    });

});

