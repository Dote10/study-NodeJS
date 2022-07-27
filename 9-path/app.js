const path = require("path");

//POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
//Window: 'C:\\temp\\myfile.html'

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
// path안에 있는 경로 구분자
console.log(path.delimiter);
// path안에 있는 환경변수 구분자

//basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));

//dirname
console.log(path.dirname(__filename));

//extension
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed);
console.log(str);

//isAbsolute
console.log("isAbsolute?", path.isAbsolute(__dirname));
//절대 경로
console.log("isAbsolute?", path.isAbsolute("../"));
//절대 경로에서 한단계 나가는 경로

//normalize
console.log(path.normalize("./folder//////sub"));

//join
console.log(__dirname + "/" + "image");
console.log(__dirname + path.sep + "image");
//첫번째 처럼 경로를 쓸 수도 있지만 path.sep을 사용해서
//운영 체제에 맞는 경로구분자를 불러와서 사용할 수도 있다.
console.log(path.join(__dirname, "image"));
