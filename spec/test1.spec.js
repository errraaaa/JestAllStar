const quv1 = require ('../operation')
const quv2 = require ('../operationtwo')
const quv3 = require ('../operationthree')
const quv4 = require ('../operationfour')
describe ('First', () => {

  test('quest1', () => {
    expect(quv1([1,2,3,4,5,6])).toEqual(21);
    expect(quv1([-2,1,-4,2,6])).toEqual(9);
    expect(quv1([])).toEqual(0);
  })
  test('quest2', () => {
    expect(quv2(10)).toEqual(-10);
    expect(quv2(6223)).toEqual(-6223);
    expect(quv2(-71)).toEqual(71);
  })
  test('quest3', () => {
    expect(quv3('rozalina')).toEqual('ozalin');
    expect(quv3('boogiman')).toEqual('oogima');
    expect(quv3('memery')).toEqual('emer');
  })
  test('quest4', () => {
    expect(quv4(4,'bob')).toEqual('bobbobbobbob');
    expect(quv4(3,'like')).toEqual('likelikelike');
    expect(quv4(5,'gav')).toEqual('gavgavgavgavgav');
  })
})
  


