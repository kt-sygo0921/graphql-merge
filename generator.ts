import path from 'path';
import {loadFilesSync} from '@graphql-tools/load-files';
import {mergeTypeDefs} from '@graphql-tools/merge';
import {print} from 'graphql';
import fs from 'fs';

const loadedFiles = loadFilesSync(`${__dirname}/src/*.graphql`)
const typeDefs = mergeTypeDefs(loadedFiles)
const printedTypeDefs = print(typeDefs)
fs.writeFileSync('joined.graphql', printedTypeDefs)