module.exports = {
    entry: [
        "whatwg-fetch",
        "./public/app.js"
        ],
    output: {
        path: __dirname + "/public/dest/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { 
                test: /.jsx?$/, 
                exclude: /node_modules/, 
                loader: "babel-loader",    
                query: {
                    presets: ['es2015', 'react']
                } 
            }
        ],

    },
    devtool: "eval"
};