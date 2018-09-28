import main from 'project-files-uploader';

import playWithNumbers from 'test_program_for_with_npm';

console.log(playWithNumbers);
console.log(playWithNumbers(5, 99));
console.log(playWithNumbers(4, 4));

const root = document.getElementById('root');
const serverURL = 'http://localhost:3002/upload';
// console.log(root);
// console.log(main);
function foo() {
  console.log('wwdwd');
}

foo();

main(root, serverURL);
