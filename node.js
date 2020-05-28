'use strict'

import { off, always, error, never } from './constants';

module.exports = {
  'rules': {
    'camelcase': off,
    'indent': [ error, 'tab' ],
    'semi': always,
    'comma-dangle': [ error, never ]
  }
};
