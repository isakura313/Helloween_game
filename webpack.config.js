const path = require('path');

module.exports = {
    mode: develpoment,
    entry: './js/code.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    }
};
