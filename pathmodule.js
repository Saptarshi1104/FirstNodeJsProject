const path = require('path');

console.log(path.basename('C:\\temp\\myfile.html'));
console.log(path.dirname('C:\\temp\\myfile.html'));
console.log(path.extname(__filename), __filename);
console.log(path.delimiter);
console.log(path.format({ dir: 'C:\\path\\dir',base: 'file.txt'}));
console.log(path.isAbsolute("//server"));
console.log(path.join('/foo','bar','baz/asdf','quux','..'));
console.log(path.normalize('C:////temp\\\\/\\/\\/foo/bar'));
console.log(path.parse('C:\\path\\dir\\file.txt'));
console.log(path.posix);
console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
console.log('foo\\bar\\baz'.split(path.sep));
console.log(path.toNamespacedPath());
console.log(path.win32);

//Wow I finished Path Module as well now FS Module