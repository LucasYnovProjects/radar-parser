#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetchAll_1 = __importDefault(require("./fetchAll"));
const yargs_1 = __importDefault(require("yargs"));
const usage = '\nUsage: radar-parser <action>';
const options = yargs_1.default
    .usage(usage)
    .command('fetchAll', 'Fetch all incidents', (argv) => (0, fetchAll_1.default)())
    .help(true)
    .argv;
