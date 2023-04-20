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
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",{
                        loader:'postcss-loader',
                        options:{
                            postcssOptions:{
                                plugins:[
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    "less-loader",
                ]

            }

        ]
    }
}