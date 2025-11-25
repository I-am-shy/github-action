const fs = require('fs');
const path = require('path');
const { argv } = require('process');

const filePaths = argv.slice(2);

console.log('本次 pr 变更的文件列表', filePaths);
console.log('--------------------------------');
console.log('开始读取 mdx 文件的内容:');
for (const filePath of filePaths) {
  if(!filePath.endsWith('.mdx')) {
    continue;
  }
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log(content);
    console.log('--------------------------------');
  } catch (error) {
    console.error(error.message);
    continue;
  }
}
