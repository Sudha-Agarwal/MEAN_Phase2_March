const path = require('path');

module.exports = {
    entry:{
        index: './src/index.ts',
        app: './src/app.ts'
    },
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode:'development',
    resolve:{
        extensions:['.ts','.js']
    },
    module:{
        rules:[
            {
            test:/\.ts$/,
            use:'ts-loader',
            exclude: /node_modules/
            }
        ]
    }
    }

