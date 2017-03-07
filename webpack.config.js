/**
 * Created by ahmad on 2/28/2017.
 */
module.exports = {
    entry : "./src/app.js" ,
    output : {
        filename : "./index.js"
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader']}
        ]
    }
};

