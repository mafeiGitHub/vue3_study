const path = require('path')


module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,"./build"),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]

            },
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]

            },
            {
                test: /\.(jpg|png|gif|svg)/,
                use: 'file-loader'
            }

        ]
    }
}