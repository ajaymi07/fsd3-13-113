
// import {writeFile} from  "fs/promises";

//  await writeFile("stud.txt", "Name : Ajay Mishra" );
//  console.log("File written");

// import { log } from "console";
// import { log } from "console";
import { readFile } from "fs/promises";
const data =await readFile("stud.txt", "utf-8");
console.log("file contents ");
console.log(data);
