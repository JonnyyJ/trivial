let webpack = require('webpack');

let path = require('path');

module.exports = {
    entry: {app:'./resources/assets/js/app.js',

    vendor: ['vue', 'axios']
    },

    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js',
        publicPath: './public'
    } ,

    module:{
        rules:[
            {
                test: /\. js$/,
                exclude: /nbode_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    resolve: {
        alias:{
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    
    plugin:[
         
    ]

};