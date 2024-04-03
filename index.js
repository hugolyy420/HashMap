import HashMap from './hashmap.js';

const testMap = new HashMap();
testMap.set('Water', '100');
testMap.set('Air', '55');
testMap.set('Tissue', '4');
testMap.set('Paper', '95');
testMap.set('Juice', '1');
testMap.set('Pen', '5');
testMap.set('Red', '12');
testMap.set('Bus', '55');
testMap.set('Restaurant', '33');
testMap.set('Folder', '22');
testMap.set('Laptop', '25');
console.log(testMap.get('Air')); // 55
console.log(testMap.has('Folder')); // true
console.log(testMap.remove('Red')); //true
console.log(testMap.has('Red')); // false
console.log(testMap.length()); // 10
console.log(testMap.keys());
// [
//     'Juice',      'Bus',
//     'Tissue',     'Water',
//     'Pen',        'Air',
//     'Laptop',     'Paper',
//     'Restaurant', 'Folder'
// ]
console.log(testMap.values());
// [
//     '1',   '55', '4',
//     '100', '5',  '55',
//     '25',  '95', '33',
//     '22'
// ]
console.log(testMap.entries());
// [
//   [ 'Juice', '1' ],
//   [ 'Bus', '55' ],
//   [ 'Tissue', '4' ],
//   [ 'Water', '100' ],
//   [ 'Pen', '5' ],
//   [ 'Air', '55' ],
//   [ 'Laptop', '25' ],
//   [ 'Paper', '95' ],
//   [ 'Restaurant', '33' ],
//   [ 'Folder', '22' ]
// ]
testMap.set('Pencil', '76');
testMap.set('Cherry', '12');
testMap.clear();
console.log(testMap.length()); // 0
