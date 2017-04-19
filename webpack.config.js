/**
 * Created by ahmad on 2/28/2017.
 */
var path = require('path');
module.exports = {
    entry : "./index.js" ,
    output : {
        filename : "./dist/index.js"
    },
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader']},
            {test: /\.css$/,use: [ 'style-loader','css-loader' ]},
            {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/public/icons/[name].[ext]"},
            {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: "file-loader?name=/public/icons/[name].[ext]"}
        ]
    }
};

