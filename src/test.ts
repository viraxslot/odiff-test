import { compare } from 'odiff-bin';

async function test() {
    const referencePath = './screenshots/file1.png';
    const currentImagePath = './screenshots/file2.png';
    const diffPath = './screenshots/diff.png';

    const result = await compare(referencePath, currentImagePath, diffPath);
    console.log(result);
}

test();
