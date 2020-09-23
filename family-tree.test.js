  const familyTree = require('./family-tree')

describe('Family Tree', function () {
    test('I am in my family tree', function () {
        const me = familyTree[0]
        expect(me.name).toEqual('Leigh')
    })

    test('My sister is also there', function () {
        const sister = familyTree[1]
        expect(sister.name).toEqual('Anouk')
    })

    test('My mum is in the tree', function () {
        const mum = familyTree[2]
        expect(mum.name).toEqual('Tracey')
    })

    test('I was born in Edinburgh', function () {
        const me = familyTree[0]
        expect(me.birthplace).toEqual('Edinburgh')
    })

    test('Anouk was born in Doncaster', function () {
        const sister = familyTree[1]
        expect(sister.birthplace).toEqual('Doncaster')
    })

    test('Mum was born in Doncaster', function () {
        const mum = familyTree[2]
        expect(mum.birthplace).toEqual('Doncaster')
    })

    test('I am 26', function () {
        const me = familyTree[0]
        expect(me.age).toEqual('26')
    })
})