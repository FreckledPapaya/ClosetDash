const path = require('path');

module.exports = {
    entry: './src2/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};