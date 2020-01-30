import { readFileSync } from 'fs'

let apiSpecsFolderPath = process.argv[2];
let rawData = readFileSync(apiSpecsFolderPath);
let jsonApiSpec = JSON.parse(rawData)

console.log(jsonApiSpec.user)
