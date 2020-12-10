import { compare } from 'odiff-bin';

const referencePath = './screenshots/file1.png';
const currentImagePath = './screenshots/file2.png';
const diffPath = './screenshots/diff.png';

const result = compare(referencePath, currentImagePath, diffPath);
console.log(result);
